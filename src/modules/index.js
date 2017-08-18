import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter.js'
import burger from './burger.js'

export default combineReducers({
  routing: routerReducer,
  counter,
  burger
})