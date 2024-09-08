import { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
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
      alert('Todo added to the list');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <input 
        id="title" 
        style={{ padding: 10, margin: 10 }} 
        type="text" 
        placeholder="title" 
        onChange={(e) => setTitle(e.target.value)} 
      /> <br />

      <input 
        id="description"
        style={{ padding: 10, margin: 10 }} 
        type="text" 
        placeholder="description" 
        onChange={(e) => setDescription(e.target.value)} 
      /> <br />

      <button 
        style={{ padding: 10, margin: 10 }} 
        onClick={handleSubmit}
      >
        Add a todo
      </button>
    </div>
  );
}

