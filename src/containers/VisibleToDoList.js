import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  console.log(`10. Visible ToDos. I got notified of a state change.`)
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: id => {
      // {type: "TOGGLE_TODO", payload: 1}
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList)

export default VisibleToDoList
