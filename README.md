
# Todo Application

This is a full-stack Todo application built using **Node.js**, **Express.js**, **MongoDB**, and **React.js**. It allows users to create, update, and mark tasks as complete. The project uses **Zod** for payload validation on the server side.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)



---

## Features

- **Create Todos**: Users can add new todos with a title and description.
- **View Todos**: Displays a list of todos and their current status (completed or not).
- **Mark as Completed**: Users can mark any todo as completed.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **Zod**: JavaScript schema declaration and validation library.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Fetch API**: For making API requests from the client to the backend.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) on your machine or use MongoDB Atlas (cloud service)
- **Git**: [Install Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rohit8BitCoder/Todo-app.git
   cd todo-app

 2. **Environment Variables**:

Create a .env file in the backend directory or add Mongobd string url to **db.js** file inside backend directory and add the following:

     
      MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app

Replace <username> and <password> with your MongoDB credentials.

# Contributing to Todo Application

Thank you for your interest in contributing to the Todo Application! We welcome contributions from the community to help improve the project. Please follow the guidelines below to get started.

## How to Contribute

### Reporting Issues

If you encounter any bugs or issues, please report them using the GitHub Issues page. Provide as much detail as possible, including:

- Steps to reproduce the issue
- Expected and actual results
- Screenshots or logs if applicable

### Suggesting Features

If you have ideas for new features or improvements, please create a new issue with a clear description of the feature, why it's valuable, and how it could be implemented.

### Making Contributions

To contribute code, follow these steps:

1. **Fork the Repository**

   Click the "Fork" button at the top right of this repository to create a copy under your own GitHub account.

2. **Clone Your Fork**

   Clone your fork to your local machine:

   ```bash
   git clone https://github.com/Rohit8BitCoder/Todo-app.git


- The **API Endpoints** section lists the backend routes that the app uses.

The app will now be running on:

Backend: http://localhost:3000
Frontend: http://localhost:5173

## API Routes
 - **POST /todo:** Create a new todo.
 - **GET /todos:** Fetch all todos.
 - **PUT /completed:** Mark a todo as complete.
