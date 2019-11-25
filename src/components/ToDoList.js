import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ todos, onToDoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} />
      ))}
    </ul>
  )
}

export default ToDoList
