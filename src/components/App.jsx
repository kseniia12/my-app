import { useState } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import uuid from 'react-uuid';
export default function Inputform() {
 const [todo, setTodo] = useState('')
 const [filter, setFilter] = useState('all')
 const [todos, setTodos] = useState([])
 const [completed, setCompleted] = useState(false)
 function completedTask(id) {
 const completedTodos = todos.map(todo => {
    if (id === todo.id) {
      return {...todo, completed: !todo.completed}
    }
    return todo;
  })
  setTodos(completedTodos)
  
}

function deleteTodo(id) {
  const completedTodos = todos.filter(todo => todo.id != id)
  setTodos(completedTodos)
}

 function handleSendInput(e){
  e.preventDefault()
  setTodos(
    [...todos, {id: uuid(), text: todo, completed: completed}]
  )
  setTodo('')
}

function changeFinter(newFilter) {
  setFilter(newFilter);
  
}

  return (
    <>
      <form onSubmit={handleSendInput} style={{marginLeft: "300px", marginTop: "120px"}}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={e=>setTodo(e.target.value)}
      />
    </form>
    <Todos todos={ todos } filter={filter} completedTask={completedTask} deleteTodo={deleteTodo} />
    <Footer todos={ todos } getFilteredTodos={changeFinter}/>
    </>

  );
}
