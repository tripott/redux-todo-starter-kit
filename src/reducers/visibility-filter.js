import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  console.log({ action })

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log('*** INSIDE case SET_VISIBILITY_FILTER ***')
      console.log('this is returned as state', action.payload)
      return action.payload
    default:
      return state
  }
}

export default visibilityFilter
