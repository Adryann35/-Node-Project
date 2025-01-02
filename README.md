# Bank Server Website

## Project Description

The **Bank Server Website** is a full-stack web application designed to manage customer information and provide basic CRUD (Create, Read, Update, Delete) functionality for banking operations. It is built using modern web development technologies:

- **Backend**: Node.js with TypeScript
- **Frontend**: Angular with TypeScript
- **Database**: PostgreSQL (or text file-based storage as an alternative)

This project also includes a Swagger OpenAPI documentation page to display all available REST API endpoints exposed by the backend.

---

## Features

### Backend
- RESTful API endpoints for managing customer data.
- Implementation of CRUD operations.
- Swagger OpenAPI documentation for easy API exploration.
- Configurable to use either PostgreSQL or text file-based storage for customer data.

### Frontend
- User-friendly interface to display, add, update, and delete customer records.
- Responsive design for accessibility on various devices.
- Seamless integration with the backend APIs.

### Database
- PostgreSQL database for reliable and scalable data storage.
- Alternative text file storage for simplicity and portability.

---

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Express**: Web framework for building REST APIs.
- **Swagger**: API documentation using Swagger UI and swagger-jsdoc.
- **File System (fs)**: Alternative to database storage.

### Frontend
- **Angular**: Framework for building dynamic, single-page web applications.
- **TypeScript**: Strong typing for better maintainability.

### Database
- **PostgreSQL**: Relational database management system.
- **Text Files**: Fallback for data persistence.

---

## Installation

### Prerequisites
- Node.js (v16 or later)
- npm (Node Package Manager)
- PostgreSQL (if using database storage)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `Backend` directory with the following variables:
     ```env
     PORT=3000
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     ```
4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Open the application in your browser at:
   ```
   http://localhost:4200
   ```

---

## Usage

1. **Access the Website**:
   - Open the frontend in your browser (http://localhost:4200).
   - Navigate through the interface to manage customer records.

2. **API Documentation**:
   - Swagger UI is available at `http://localhost:3000/api-docs` for exploring backend APIs.

---

## Project Structure

### Backend
```
Backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   └── index.ts
├── package.json
├── tsconfig.json
└── .env
```

### Frontend
```
Frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── app.module.ts
│   ├── assets/
│   └── environments/
├── angular.json
├── package.json
└── tsconfig.json
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your forked repository.
4. Create a pull request to the main repository.





