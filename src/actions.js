import { compose, map, take } from 'ramda'
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const LOADING_TODOS = 'LOADING_TODOS'
export const SUCCESS_LOADING_TODOS = 'SUCCESS_LOADING_TODOS'
export const FAILURE_LOADING_TODOS = 'FAILURE_LOADING_TODOS'
export const ADDING_TODO = 'ADDING_TODO'
export const SUCCESS_ADDING_TODO = 'SUCCESS_ADDING_TODO'
export const FAILED_ADDING_TODO = 'FAILED_ADDING_TODO'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function getToDos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
}

function addToDo(text) {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      title: text,
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

function convertToDo(todo) {
  return { text: todo.title, completed: todo.completed }
}

export function addToDoListToAPI(text) {
  //console.log('addToDoListToAPI: About to thunk')

  return function(dispatch) {
    //  console.log('Inside the thunk.  about to call the api...')
    dispatch({ type: ADDING_TODO })

    return addToDo(text)
      .then(result => result.json())
      .then(
        newToDo => {
          console.log('Successfully added the todo to the API. YAY!')

          dispatch({
            type: ADD_TODO,
            payload: { text: newToDo.title, completed: newToDo.completed }
          })
          dispatch({ type: SUCCESS_ADDING_TODO })
        },
        err => {
          dispatch({ type: FAILED_ADDING_TODO })
        }
      )
  }
}

export function getToDoListFromAPI(limit) {
  return function(dispatch) {
    dispatch({ type: LOADING_TODOS })

    return getToDos()
      .then(response => response.json())
      .then(
        todos => {
          const massagedToDos = compose(
            map(convertToDo),
            take(limit || 5)
          )(todos)
          dispatch({ type: SET_TODOS, payload: massagedToDos })
          dispatch({ type: SUCCESS_LOADING_TODOS })
        },
        err => dispatch({ type: FAILURE_LOADING_TODOS })
      )
  }
}

// THIS IS AN ACTION CREATOR
//  IT CREATES ACTION OBJECTS... DUH
// export function addTodo(text) {
//   //console.log({ type: ADD_TODO, payload: text })
//   return { type: ADD_TODO, payload: text }
// }

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, payload: index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, payload: filter }
}

//dispatch(addTodo(text))
