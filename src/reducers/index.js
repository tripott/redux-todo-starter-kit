import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'

/*
{
  todos: [{completed: true, text: "Feed The Cat"}]
  visibilityFilter: "SOMETHING"
}

*/

//console.log({ todos, visibilityFilter })

export default combineReducers({ todos, visibilityFilter })
