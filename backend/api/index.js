const express = require('express');
const cors = require('cors');
const { Todo } = require('./api/db'); // Adjust path as needed
const { createTodo, updateTodo } = require("./api/types.js");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://your-frontend-url.vercel.app"
}));

const allowedOrigins = [
  "http://localhost:5173", // Local development URL
  "https://todo-app-u4i4.vercel.app" // Frontend production URL on Vercel
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));


// Create Todo
app.post('/api/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload); 

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent wrong inputs"
    });
  }

  try {
    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
    });
    res.json({ msg: "Todo created" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating todo", error });
  }
});

// Get all Todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving todos", error });
  }
});

// Mark Todo as Completed
app.put('/api/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload); 

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent wrong inputs"
    });
  }

  try {
    await Todo.updateOne({ _id: updatePayload.id }, { $set: { completed: true } });
    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating todo", error });
  }
});

// Delete Todo
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.json({ msg: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting todo", error });
  }
});

// Export the app for Vercel
module.exports = app;
