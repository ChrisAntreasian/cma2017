import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './../../pages/counter/store.js'
import posts from './../../pages/posts/store.js'

import header from './../../sub/header/store.js'
import burger from './../../sub/burger/store.js'

export default combineReducers({
  routing: routerReducer,
  counter,
  header,
  burger,
  posts
})