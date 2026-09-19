# Book Management Project Documentation

## 1. Objective

This project is a NestJS backend for a Book Management system. It allows authors to:

- register and login
- manage books
- upload cover images to Cloudinary
- create and manage categories
- add reviews for books
- access protected routes using JWT authentication

The application is designed to support a simple book catalog system where each book belongs to a category and is created by an author.

---

## 2. Project Purpose

The main goal of this application is to provide a backend API for:

- author authentication
- book CRUD operations
- category management
- review management
- image storage through Cloudinary
- secure access using JWT guards

---

## 3. Tech Stack

- NestJS
- TypeScript
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcrypt for password hashing
- Cloudinary for image upload
- Multer for file upload handling

---

## 4. Project Structure

- `src/auth` — authentication and author login/register
- `src/author` — author management
- `src/book` — book CRUD and image upload logic
- `src/category` — category CRUD
- `src/review` — review CRUD
- `src/cloudinary` — Cloudinary configuration and upload service
- `src/app.module.ts` — app root module

---

## 5. Environment Variables

Create a `.env` file in the project root with values like:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/booking-management
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

You can also use the older variable names if already configured:

```env
CLD_CLOUD_NAME=
CLD_API_KEY=
CLD_API_SECRET=
```

---

## 6. Authentication

Most routes are protected by `AuthGuard` and require a Bearer token.

### Register Author

- Method: `POST`
- URL: `/auth/register`

Request body:

```json
{
  "email": "author@example.com",
  "name": "William Shakespeare",
  "book": "Hamlet",
  "password": "secret123"
}
```

Response:

```json
{
  "access_token": "jwt_token_here"
}
```

### Login Author

- Method: `POST`
- URL: `/auth/login`

Request body:

```json
{
  "email": "author@example.com",
  "password": "secret123"
}
```

Response:

```json
{
  "access_token": "jwt_token_here"
}
```

---

## 7. Author APIs

### Get All Authors

- Method: `GET`
- URL: `/authors`
- Auth required: Yes

### Get Author By Email

- Method: `GET`
- URL: `/authors/email/:email`

### Get Author By ID

- Method: `GET`
- URL: `/authors/:id`

---

## 8. Book APIs

Base URL: `/book`

### Create a Book

- Method: `POST`
- URL: `/book`
- Auth required: Yes
- Content-Type: `multipart/form-data`

Fields:

- `title` (string)
- `author` (string)
- `isbn` (string)
- `categoryId` (string)
- `coverImage` (image file)

Example:

```http
POST http://localhost:3000/book
Authorization: Bearer <token>
Content-Type: multipart/form-data; boundary=----BookForm

------BookForm
Content-Disposition: form-data; name="title"

MerN Stack Advance 2026
------BookForm
Content-Disposition: form-data; name="author"

William Shakespeare
------BookForm
Content-Disposition: form-data; name="isbn"

978-0-7432-7356-5
------BookForm
Content-Disposition: form-data; name="categoryId"

6a9fcee86803149f1d66ede3
------BookForm
Content-Disposition: form-data; name="coverImage"; filename="cover.jpg"
Content-Type: image/jpeg

< ./cover.png
------BookForm--
```

### Get All Books

- Method: `GET`
- URL: `/book?page=1&limit=10`
- Auth required: Yes

Optional query params:

- `title`
- `categoryId`
- `page`
- `limit`

### Get Book By ID

- Method: `GET`
- URL: `/book/:id`
- Auth required: Yes

### Update a Book

- Method: `PATCH`
- URL: `/book/:id`
- Auth required: Yes

#### Update without image

```http
PATCH http://localhost:3000/book/:id
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Advance Mern Stack Course - 2026",
  "author": "F. John Smith",
  "isbn": "978-0-7432-7356-5"
}
```

#### Update with new image

- Content-Type: `multipart/form-data`

Fields:

- `title`
- `author`
- `isbn`
- `coverImage`

### Delete a Book

- Method: `DELETE`
- URL: `/book/:id`

---

## 9. Category APIs

Base URL: `/category`

### Create Category

- Method: `POST`
- URL: `/category`
- Auth required: Yes

Request body:

```json
{
  "name": "Full Stack",
  "description": "Full Stack Programmer"
}
```

### Get All Categories

- Method: `GET`
- URL: `/category`
- Auth required: Yes

### Update Category

- Method: `PATCH`
- URL: `/category/:id`

### Delete Category

- Method: `DELETE`
- URL: `/category/:id`

### Upsert Category

- Method: `PATCH`
- URL: `/category/upsert/:id`

---

## 10. Review APIs

Base URL: `/review`

### Create Review

- Method: `POST`
- URL: `/review/:id`
- Auth required: Yes

Request body:

```json
{
  "rating": 3,
  "comment": "Comment for You!!"
}
```

`id` in URL is the book ID.

### Get All Reviews

- Method: `GET`
- URL: `/review`

### Get Review By ID

- Method: `GET`
- URL: `/review/:id`

### Update Review

- Method: `PATCH`
- URL: `/review/:id`

### Delete Review

- Method: `DELETE`
- URL: `/review/:id`

---

## 11. Data Models

### Author Model

```ts
{
  name: string,
  email: string,
  book: string,
  password: string
}
```

### Book Model

```ts
{
  categoryId: ObjectId,
  userId: string,
  isbn: string,
  coverImage: string,
  title: string,
  author: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Category Model

```ts
{
  name: string,
  description: string
}
```

### Review Model

```ts
{
  rating: number,
  comment: string,
  bookId: string,
  userId: string,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 12. Cloudinary Image Upload Flow

The project supports uploading book cover images to Cloudinary.

### Upload behavior

- The uploaded file is validated
- Only allowed image types are accepted:
  - jpeg
  - jpg
  - png
  - webp
  - gif
- The file is uploaded using Cloudinary uploader
- The uploaded image URL is stored in the book's `coverImage` field

### Cloudinary folder

Uploaded files are stored under:

```text
Booking-Management
```

This is the configured Cloudinary folder in the uploader.

---

## 13. Notes

- Role-based access is implemented using the author's user ID stored in the JWT payload.
- The app keeps added images in Cloudinary instead of the local file system.
- The code is a backend-first project and does not include a frontend UI.

---

## 14. Run the Project

```bash
npm install
npm run start:dev
```

Make sure MongoDB is running locally and your Cloudinary credentials are set in `.env`.

---

## 15. Summary

This project is a complete basic backend for a Book Management platform where authors can register, sign in, create books, assign categories, upload book cover images to Cloudinary, and leave reviews on books.
