import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Todo({todo, completedTask, deleteTodo}) {
  return (
    <li style={{marginLeft: "300px", backgroundColor: "#9e9b9b", maxWidth: "150px"}}>

            
              <div style={{backgroundColor:"#000000", width: '20px', height: '20px'}} onClick={()=>completedTask(todo.id)}></div>
              <div key={todo.id}>
                    {todo.text}
               </div>
              <FontAwesomeIcon icon={faTimes} style={{marginLeft: "80px"}} onClick={()=>deleteTodo(todo.id)}/> 
                
                

    </li>
  )
}
