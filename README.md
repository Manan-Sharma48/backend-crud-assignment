# Backend CRUD API

A RESTful backend application built using **Node.js, Express.js, MongoDB and Mongoose**.

This project demonstrates user registration, login and CRUD (Create, Read, Update, Delete) operations through REST APIs.

## Author

- **Name:** Manan Sharma
- **Email:** manansharma4848@gmail.com

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman
- Git and GitHub

## Project Structure

```text
backend-crud-assignment/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── index.js
├── postman/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Manan-Sharma48/backend-crud-assignment.git
cd backend-crud-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

Add the following configuration:

```env
PORT=8000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Replace the MongoDB URI placeholder with your own Atlas connection string.

**Never upload your `.env` file or database credentials to GitHub.**

### 4. Start the server

```bash
npm run dev
```

The server runs on the configured port.

## API Endpoints

**Base URL:** `http://localhost:8000`

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/users/register` | Register a user |
| POST | `/api/v1/users/login` | Login a user |
| POST | `/api/v1/users/logout` | Logout endpoint |

### Post APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/posts/create` | Create a post |
| GET | `/api/v1/posts/getPosts` | Retrieve all posts |
| PATCH | `/api/v1/posts/update/:id` | Update a post |
| DELETE | `/api/v1/posts/delete/:id` | Delete a post |

## Post Data Format

Example JSON request:

```json
{
  "name": "Manan",
  "description": "My first backend project post",
  "age": 19
}
```

## Testing

The APIs can be tested using Postman.

The Postman collection is provided in the `postman` directory, containing requests for:

- User Registration
- User Login
- Create Post
- Get All Posts
- Update Post
- Delete Post

### API Testing Results

| Operation | Method | Status |
|---|---|---|
| User Registration | POST | 201 Created |
| User Login | POST | 200 OK |
| Create Post | POST | 201 Created |
| Get All Posts | GET | 200 OK |
| Update Post | PATCH | 200 OK |
| Delete Post | DELETE | 200 OK |

**Postman Collection:**

`postman/Manan Backend Assignment.postman_collection.json`

## Learning Reference

This project was developed as an academic backend assignment, using an online backend development tutorial as a learning reference. The implementation was subsequently configured, tested and worked on for the assignment.

## License

This project is intended for academic and educational purposes.