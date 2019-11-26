import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ToDo from './ToDo'
import { getToDoListFromAPI, SUCCESS_LOADING_TODOS } from '../actions'

const ToDoList = ({ todos, loadingState, onToDoClick }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getToDoListFromAPI())
    //dispatch({ type: SUCCESS_LOADING_TODOS })
  }, [dispatch])

  if (loadingState === 'loading') {
    return (
      <div>
        <h1>Loading ToDos from API</h1>
      </div>
    )
  }

  if (loadingState === 'failure') {
    return (
      <div>
        <h1>Failed Loading ToDos</h1>
      </div>
    )
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} />
      ))}
    </ul>
  )
}

export default ToDoList
