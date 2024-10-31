
import { useState } from 'react';
import './Todos.css';

export function Todos({ todos, setTodos }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleComplete = async (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }; // Toggle completed status
      }
      return todo;
    });

    setTodos(updatedTodos);

    const todoToUpdate = updatedTodos[index];
    await fetch(`https://todo-app-eight-zeta-44.vercel.app/todos/${todoToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: todoToUpdate.completed }),
    });
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      const todoToDelete = todos[index];
      await fetch(`https://todo-app-eight-zeta-44.vercel.app/todos/${todoToDelete.id}`, {
        method: 'DELETE',
      });
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(todos[index].title);
    setEditDescription(todos[index].description);
  };

  const handleSaveEdit = async (index) => {
    const updatedTodo = { ...todos[index], title: editTitle, description: editDescription };

    // Send PUT request to update the todo on the server
    await fetch(`https://todo-app-eight-zeta-44.vercel.app/todos/${todos[index].id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });

    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos[index] = updatedTodo;
      return newTodos;
    });
    
    setEditIndex(null); // Close edit mode
  };

  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
              <button onClick={() => setEditIndex(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h1 className="todo-title">{todo.title}</h1>
              <h2 className="todo-description">{todo.description}</h2>
              <button
                className={`todo-button ${todo.completed ? 'completed' : ''}`}
                onClick={() => handleComplete(index)}
              >
                {todo.completed ? 'Completed' : 'Mark as Complete'}
              </button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
