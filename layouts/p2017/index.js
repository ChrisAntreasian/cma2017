import React from 'react'
import flush from 'styled-jsx/server'
import normalize from 'normalize.css'

import Header from './sub/header'
import Burger from './sub/burger'
import styles from './styles'

export default (props) => {
    const styles = flush()
    return (
        <div>
            { styles }
            <Header />
            <main>
                {props.children}
                <Burger />
            </main>
            <style jsx global>{normalize}</style>
            <style jsx global>{styles}</style>
        </div>
    )
}