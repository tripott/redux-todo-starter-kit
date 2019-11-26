import React from 'react'

const ToDo = ({ completed, text, onClick }) => {
  //console.log(`6. todo render..again. and again...`)

  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  )
}

export default ToDo
