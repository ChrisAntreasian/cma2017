import React from 'react'
import normalize from 'normalize.css'

import Header from './sub/header'
import Burger from './sub/burger'

import styles from './styles'

export default (props) => (
    <div>
        <Header />
        <main className="wrap">
            {props.children}
            <Burger />
        </main>
        <style jsx global>{normalize}</style>
        <style jsx global>{styles}</style>
    </div>
)
