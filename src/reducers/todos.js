import { ADD_TODO, TOGGLE_TODO } from '../actions'

function todos(
  state = [
    { text: 'Feed the cat', completed: true },
    { text: 'Make bed', completed: false }
  ],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload.text, complete: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
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
