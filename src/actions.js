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

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// THIS IS AN ACTION CREATOR
//  IT CREATES ACTION OBJECTS... DUH
export function addTodo(text) {
  //console.log({ type: ADD_TODO, payload: text })
  return { type: ADD_TODO, payload: text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, payload: index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, payload: filter }
}

function getToDos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
}

export function getToDoListFromAPI() {
  return function(dispatch) {
    dispatch({ type: LOADING_TODOS })

    return getToDos()
      .then(response => response.json())
      .then(
        todos => {
          dispatch({ type: SUCCESS_LOADING_TODOS })

          dispatch({
            type: SET_TODOS,
            payload: compose(
              map(t => ({ text: t.title, completed: t.completed })),
              take(10)
            )(todos)
          })
        },
        err => dispatch({ type: FAILURE_LOADING_TODOS })
      )
  }
}

//dispatch(addTodo(text))
