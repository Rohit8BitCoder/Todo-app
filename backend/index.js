
const express = require('express');
const cors = require('cors');
const { Todo } = require('./db'); 
const { createTodo , updateTodo } = require ("./types.js")


const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

// Create Todo

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload); 

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs"
    });
    return;
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

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving todos", error });
  }
});

// Mark Todo as Completed

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload); 
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs"
    });
    return;
  }

  try {
    await Todo.updateOne({ _id: updatePayload.id }, { $set: { completed: true } });
    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating todo", error });
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000 successfully");
});

