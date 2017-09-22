import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './base/store/index.js'
import App from './base'

import 'normalize.css'
import './index.css'
import './styles/base.css'
import './styles/burger.css'
import './styles/header.css'
import './styles/posts.css'
import './styles/quint.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)