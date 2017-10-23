import { combineReducers } from 'redux'

import posts from '../pages/posts/store.js'
import quint from '../pages/quintuplapus/store.js'

import header from '../layouts/main/sub/header/store.js'
import burger from '../layouts/main/sub/burger/store.js'

export default combineReducers({
  
  posts,
  quint,
  
  header,
  burger,
})