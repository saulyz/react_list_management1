import { combineReducers } from 'redux'
import list from './list'
import select from './select'

const listApp = combineReducers({
  list,
  select
})

export default listApp