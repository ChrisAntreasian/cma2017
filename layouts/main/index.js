import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Header from './sub/header'
import Burger from './sub/burger'

import styles, { main } from './styles'

const MainLayout = (props) => (
    <div>
        <Header />
        <main className="main wrap">
            {props.children}
            <Burger />
        </main>
        <style jsx>{styles}</style>
        <style jsx>{main}</style>
    </div>
)

export default MainLayout