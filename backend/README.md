# InternTrack – Internship Application Tracker

A RESTful backend API that helps users manage and track their internship applications.

## Features

- Create a new internship application
- View all applications
- Search applications by company
- Filter applications by status
- Pagination support
- View a single application by ID
- Update application details
- Delete an application
- Input validation and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript

## Project Structure

```text
InternTrack/
├── config/
│   └── db.js
├── controllers/
│   └── applicationController.js
├── models/
│   └── Application.js
├── routes/
│   └── applicationRoutes.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## Setup Instructions

1. Clone the repository.
2. Install dependencies:

   npm install

3. Create a `.env` file in the root directory using `.env.example` as a reference.
4. Add your MongoDB connection string to `MONGO_URI`.
5. Start the development server:

   npm run dev

The server runs at `http://localhost:5000`.

## API Endpoints

Base URL: `/api/applications`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Create an application |
| GET | `/` | Get all applications |
| GET | `/:id` | Get application by ID |
| PUT | `/:id` | Update an application |
| DELETE | `/:id` | Delete an application |

### Filtering and Pagination

You can filter applications using query parameters:

- `status`: Applied, Interview, Offer, or Rejected
- `company`: Search by company name
- `page`: Page number
- `limit`: Number of records per page

Example:

`GET /api/applications?status=Applied&page=1&limit=10`

## Environment Variables

| Variable | Description |
|---|---|
| PORT | Server port |
| MONGO_URI | MongoDB connection string |

## Author

Pranav Chauhan