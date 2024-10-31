import { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo.jsx';
import { Todos } from './components/Todos.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://todo-app-eight-zeta-44.vercel.app/todos");
      const json = await response.json();
      setTodos(json.todos);
    };

    fetchTodos();
  }, []); // Only run once on component mount

  return (
    <>
      <div>
        <h1>My Todos</h1>
        <CreateTodo setTodos={setTodos} /> {/* Pass setTodos here */}
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
