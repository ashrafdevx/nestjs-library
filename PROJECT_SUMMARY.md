# Book Management API

A small NestJS backend for managing books and authors with authentication.

## Stack
- NestJS
- TypeScript
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing

## What we built
- Author registration and login
- JWT-based protected routes
- Book create, read, update, and delete operations
- Book listing with search by title and pagination
- MongoDB connection setup and schema models
- Role/owner-style access pattern using userId on books

## Main modules
- `auth` — register/login and token generation
- `author` — author data and email lookup
- `book` — book CRUD logic and filtering
- `app.module` — app startup and MongoDB connection

## Notes
This project is a basic API backend for a book management system. It is not a full frontend app; it focuses on the backend logic, database integration, and protected API access.

## Run locally
```bash
npm install
npm run dev
```

Make sure MongoDB is running locally on:
```bash
mongodb://localhost:27017/booking-management
```
