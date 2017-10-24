import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserStatus from './sub/UserStatus'
import Dropdown from './sub/Dropdown'
import Link from 'next/link'

import styles from './styles.js'
import { error } from './styles.js'

import {
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser,
    logInUserFromStorage
} from './store.js'

const mapStateToProps = state => ({
    user: state.header.user,
    logIn: state.header.logIn
})

const mapDispatchToProps = dispatch => bindActionCreators({
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser,
    logInUserFromStorage
}, dispatch)

class Header extends Component {
    previousScrollPosition = 0

    componentDidMount() {
        this.props.logInUserFromStorage()
    }

    render () {       
        let error = null
        if (this.props.logIn.error) {
            error = (
                <div className="">
                    {this.props.logIn.error}
                    <style jsx> { error }</style>
                </div>
            )
        }

        return (
            <header>
                <div className="wrap">
                    <div className="logo">
                        <Link href="/landing"><a>
                            Chris A Project 2017
                        </a></Link>
                    </div>
                    <div className="user">

                        <UserStatus 
                        user={this.props.user} 
                        displayLogIn={this.props.displayLogIn}
                        logOutUser={this.props.logOutUser}/>

                        <Dropdown
                        logInUser={this.props.logInUser}
                        hideLogIn={this.props.hideLogIn}
                        loggedIn={this.props.user.loggedIn}
                        logIn={this.props.logIn} />

                        {error}

                    </div>
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
