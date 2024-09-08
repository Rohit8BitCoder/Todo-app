import { useState } from 'react'
import  { CreateTodo } from './components/CreateTodo.jsx'
import {Todos} from './components/Todos.jsx'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function (res) 
  { 
        const json = await res.json();
        setTodos(json.todos);
   })

 
 

  return (
    <>
    <div>

        <h1>my todos</h1>

               <CreateTodo />
              <Todos todos = {todos}/>

    </div> 
  </>
  )
}

export default App

