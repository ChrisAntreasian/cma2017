import React from 'react'

import Header from './sub/header'
import Burger from './sub/burger'

import styles, { main } from './styles'
import normalize from 'normalize.css'

export default (props) => (
    <div>
        <Header />
        <main className="main wrap">
            {props.children}
            <Burger />
        </main>
        <style jsx global>{normalize}</style>
        <style jsx>{styles}</style>
        <style jsx>{main}</style>
    </div>
)
