import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserStatus from './sub/UserStatus'
import LogInDropdown from './sub/LogInDropdown'
import LogInError from './sub/LogInError'

import {
    displayLogIn,
    hideLogIn,
    logIn,
    logOut
} from './store.js'

class Header extends Component {
    previousScrollPosition = 0

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        console.log('scrolling')
        // let previousScrollPosition = this.previousScrollPosition
        // let scrollPosition = window.pageYOffset || document.documentElement.scrollTop

        // if (!this.props.user.loggedIn && scrollPosition < previousScrollPosition) {
        //     this.props.displayLogIn()
        // } else {
        //     this.props.hideLogIn()
        // }
        
        // previousScrollPosition = scrollPosition

    }

    render () {       
        return (
            <header className="header">
                <div className="header__wrap wrap clear">
                    <div className="header__logo">
                        <Link to="/landing">
                            Chris A Project 2017
                        </Link>
                    </div>
                    <div className="header__user">

                        <UserStatus 
                        user={this.props.user} 
                        displayLogIn={this.props.displayLogIn}
                        logOut={this.props.logOut}/>

                        <LogInDropdown
                        logIn={this.props.logIn}
                        hideLogIn={this.props.hideLogIn}
                        logInDisplayed={this.props.logInDisplayed}
                        loggedIn={this.props.user.loggedIn}
                        logInLoading={this.props.logInLoading}/>

                        <LogInError error={this.props.logInError} />

                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.header.user,
    logInDisplayed: state.header.logInDisplayed,
    logInLoading: state.header.logInLoading,
    logInError: state.header.logInError
})

const mapDispatchToProps = dispatch => bindActionCreators({
    displayLogIn,
    hideLogIn,
    logIn,
    logOut
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
