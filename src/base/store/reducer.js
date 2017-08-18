import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './../../modules/counter.js'
import burger from './../../sub/burger/store.js'

export default combineReducers({
  routing: routerReducer,
  counter,
  burger
})