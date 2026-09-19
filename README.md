# Book Management API

A NestJS backend for managing books, authors, categories, reviews, and Cloudinary image uploads.

## Project setup

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

You can also keep legacy keys if already used in your local setup:

```env
CLD_CLOUD_NAME=your_cloud_name
CLD_API_KEY=your_api_key
CLD_API_SECRET=your_api_secret
```

## Run the project

```bash
npm run start
```

For development mode:

```bash
npm run start:dev
```

## Main features

- Author registration and login
- JWT authentication for protected routes
- Book CRUD operations
- Category management
- Review management
- Cloudinary image upload for book cover images
- MongoDB integration with Mongoose

## Notes

This project is a backend-only application built with NestJS.
