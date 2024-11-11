import React from 'react'

export default function Footer({ todos, getFilteredTodos }) {
    console.log(todos)
  return (
    <>
    <div> {todos.length} item left</div>
    <button onClick={()=>getFilteredTodos('all')}>All</button>
    <button onClick={()=>getFilteredTodos('active')}>Active</button>
    <button onClick={()=>getFilteredTodos('completed')}>Completed</button>
    </>
  )
}
