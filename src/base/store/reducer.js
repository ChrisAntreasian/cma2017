import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './../../pages/Counter/store.js'
import posts from './../../pages/Posts/store.js'
import quint from './../../pages/Quintuplapus/store.js'

import header from './../../sub/Header/store.js'
import burger from './../../sub/Burger/store.js'

export default combineReducers({
  routing: routerReducer,
  
  counter,
  posts,
  quint,
  
  header,
  burger,
})