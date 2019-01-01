import React from 'react'
import normalize from 'normalize.css'

import Header from './sub/header'
import Burger from './sub/burger'
import Footer from './sub/footer'

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
            <Footer />
            <style jsx global>{styles}</style>
            <style jsx global>{fonts}</style>
        </div>
    )
}