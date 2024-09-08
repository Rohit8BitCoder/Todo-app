
# Todo Application

This is a full-stack Todo application built using **Node.js**, **Express.js**, **MongoDB**, and **React.js**. It allows users to create, update, and mark tasks as complete. The project uses **Zod** for payload validation on the server side.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)


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

Create a .env file in the server directory and add the following:

     ```bash
      Copy code
      MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app

Replace <username> and <password> with your MongoDB credentials.



### Key Points:

- The **Getting Started** section includes detailed steps for setting up the project locally, including both the backend and frontend setup.
- The **Project Structure** section explains how the code is organized, providing insights into each file.
- The **Contributing** section outlines the steps for anyone who wishes to contribute, making it beginner-friendly.
- The **API Endpoints** section lists the backend routes that the app uses.

This `README.md` should provide clear guidance to anyone looking to use or contribute to your project.

