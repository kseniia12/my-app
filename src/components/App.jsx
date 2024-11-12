import { useState } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import uuid from 'react-uuid';
import { Title, Container, Input, Icon } from "./styles/style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShekelSign, faRemove } from '@fortawesome/free-solid-svg-icons';
import GlobalStyles from './styles/reset'
export default function Inputform() {
 const [todo, setTodo] = useState('')
 const [filter, setFilter] = useState('all')
 const [todos, setTodos] = useState([])
 const [completed, setCompleted] = useState(false)
 const [countCompleted, setCountCompleted] = useState(0)
 function completedTask(id) {
 const completedTodos = todos.map(todo => {
    if (id === todo.id) {
      setCountCompleted(countCompleted => countCompleted + 1)
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

function clear() {
  setTodos(todos.filter(todo => todo.completed === false))

}
function markAllAsCompleted() {
  const completedTodos = todos.map(todo => {
       return {...todo, completed: !todo.completed}
   })
   setTodos(completedTodos)
 
 }



  return (
    <>
    <GlobalStyles />
    <Container>
      <Title>todos</Title>
      <div>
      {todos.length != 0 ? (<Icon onClick={markAllAsCompleted}><FontAwesomeIcon icon={faShekelSign}/></Icon> ) : ""}
      <form onSubmit={handleSendInput}>
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={e=>setTodo(e.target.value)}
        />
    </form>
        </div>
    <Todos todos={ todos } filter={filter} completedTask={completedTask} deleteTodo={deleteTodo} />
    {todos.length != 0 ? ( <Footer todos={ todos } getFilteredTodos={changeFinter} filter={filter} clear={clear} countCompleted={countCompleted}/>) : ""}
   
    </Container>
    </>
  );
}
