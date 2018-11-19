import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import posts from '~/pages/posts/store.js'
import quint from '~/pages/quintuplapus/store.js'

import header from '~/layouts/p2017/sub/header/store.js'
import burger from '~/layouts/p2017/sub/burger/store.js'
import fbSidebar from '~/shared/fbSidebar/store.js'

const rootReducer = combineReducers({
    // pages
    posts,
    quint,
    // submodules
    header,
    burger,
    fbSidebar
})

const initialState = {}

export default (initialState, options) => {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}
