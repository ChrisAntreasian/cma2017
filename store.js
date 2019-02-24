import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import posts from '~/pages/posts/store.js'
import quint from '~/pages/quintuplapus/store.js'
import landing from '~/pages/store.js'

import header from '~/layouts/p2017/sub/header/store.js'
import burger from '~/layouts/p2017/sub/burger/store.js'
import fbSidebar from '~/shared/fbSidebar/store.js'
import gallery from '~/shared/gallery/store.js'

import contact from '~/pages/sub/contact/store.js'

const rootReducer = combineReducers({
    // pages
    posts,
    quint,
    landing,
    // submodules
    header,
    burger,
    fbSidebar,
    gallery,
    contact
})

const initialState = {}

export default (initialState, options) => {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}
