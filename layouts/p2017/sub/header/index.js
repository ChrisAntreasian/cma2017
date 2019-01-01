import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Link from 'next/link'

import styles from './styles.js'

import {
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser,
    logInUserFromStorage
} from './store.js'

const mapDispatchToProps = dispatch => bindActionCreators({
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser,
    logInUserFromStorage
}, dispatch)

const mapStateToProps = state => ({
    user: state.header.user,
    logIn: state.header.logIn
})

class Header extends Component {
    previousScrollPosition = 0

    componentDidMount() {
        this.props.logInUserFromStorage()
    }

    render () {
        return (
            <header>
                <div className="container">
                    <h2 className="logo">
                        <Link href="/"><a>
                            Christopher Antreasian
                        </a></Link>
                    </h2>
                </div>
                <style jsx>{styles}</style>
            </header>

        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
