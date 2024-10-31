
import { useState } from 'react';
import './CreateTodo.css'; // Importing the CSS file

export function CreateTodo({ setTodos }) { // Receive setTodos as a prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://todo-app-eight-zeta-44.vercel.app/todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description
        }),
      });
      
      const json = await response.json();

      // After adding the todo, update the local state
      setTodos(prevTodos => [
        ...prevTodos,
        { title, description, completed: false, _id: json._id } // Ensure you include the new todo's ID if returned
      ]);

      alert('Todo added to the list');
      // Reset input fields
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="todo-container">
      <input 
        id="title"
        className="input-field" 
        type="text" 
        placeholder="Title" 
        value={title} // Controlled component
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        id="description" 
        className="input-field" 
        type="text" 
        placeholder="Description" 
        value={description} // Controlled component
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button 
        className="submit-button" 
        onClick={handleSubmit}
      >
        Add a todo
      </button>
    </div>
  );
}
