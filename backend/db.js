
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure to load environment variables

// MongoDB connection URI
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:rohit2002@cluster0.vus00tn.mongodb.net/Todo-app';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if the connection fails
  });

// Define Todo schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 30 // Optional: set maximum length for title
  },
  description: {
    type: String,
    required: true,
    minlength: 5, // Optional: set minimum length for description
    maxlength: 300 // Optional: set maximum length for description
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Create Todo model
const Todo = mongoose.model('Todo', todoSchema); // Changed model name to singular 'Todo'

module.exports = {
  Todo
};
