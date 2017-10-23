import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store, { history } from './../../store/index.js'

import Header from './sub/header'
import Burger from './sub/burger'

const MainLayout = (props) => (
    <Provider store={store}>
        <div>
            <Header />
            <main className="main wrap">
                {props.children}
                <Burger />
            </main>
        </div>
    </Provider>
)

export default MainLayout