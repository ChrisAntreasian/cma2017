import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import posts from '~/pages/posts/store.js'
import quint from '~/pages/quintuplapus/store.js'

import header from '~/layouts/main/sub/header/store.js'
import burger from '~/layouts/main/sub/burger/store.js'

const rootReducer = combineReducers({
    // pages
    posts,
    quint,
    // submodules
    header,
    burger,
})

const initialState = {}

export default (initialState, options) => {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}
