import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import store, { history } from './store/index.js'

import Quintuplapus from './pages/Quintuplapus'
import Landing from './pages/Landing'
import Posts from './pages/Posts'

import Header from './sub/Header'
import Burger from './sub/Burger'

import 'normalize.css'
import './styles.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header />
                <main className="main wrap">
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/quintuplapus" component={Quintuplapus} />
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/posts" component={Posts} />
                    <Burger />
                </main>
            </div>
        </ConnectedRouter>
    </Provider>,
  target
)