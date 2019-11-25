import { ADD_TODO, TOGGLE_TODO } from '../actions'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload.text, complete: false }]
    case TOGGLE_TODO:
      return state.todos.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

export default todos
