import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Todo from './Todo'

export default function Todos({todos, filter, completedTask, deleteTodo}) {
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const filterTodos = (filter) => {
    let filteredTodos = [];
    switch (filter){
      case 'all':
        filteredTodos = [...todos]
        break
      case 'completed':
        filteredTodos = todos.filter(todo => todo.completed)
        break
      case 'active':
        filteredTodos = todos.filter(todo => !todo.completed )
        break
    }
    return filteredTodos
    // setFilteredTodos(filteredTodos);
  }

//   useEffect(() => {
//     filterTodos()
//   }, [todos, filter]
// );

const filteredTodos = useMemo(() => filterTodos(filter),[todos, filter]);




  return (
    <ul>
    {filteredTodos.map(todo => 
    <Todo todo={todo} completedTask={completedTask} deleteTodo={deleteTodo}
    />)}
    </ul>

  ) 
}
