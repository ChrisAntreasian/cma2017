import React from 'react'
import normalize from 'normalize.css'

import Header from './sub/header'
import Burger from './sub/burger'

import styles from './styles'
import fonts from '~/styles/fonts'

export default (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
                <Burger />
            </main>
            <style jsx global>{styles}</style>
            <style jsx global>{fonts}</style>
        </div>
    )
}