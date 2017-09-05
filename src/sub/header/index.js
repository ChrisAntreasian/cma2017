import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserStatus from './sub/UserStatus'
import LogInDropdown from './sub/LogInDropdown'

import {
    displayLogin,
    hideLogin,
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
        //     this.props.displayLogin()
        // } else {
        //     this.props.hideLogin()
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
                        displayLogin={this.props.displayLogin}
                        logOut={this.props.logOut}/>

                        <LogInDropdown
                        logIn={this.props.logIn}
                        hideLogin={this.props.hideLogin}
                        loginDisplayed={this.props.loginDisplayed}
                        loggedIn={this.props.user.loggedIn} />

                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.header.user,
    submitting: state.header.submitting,
    loginDisplayed: state.header.loginDisplayed
})

const mapDispatchToProps = dispatch => bindActionCreators({
    displayLogin,
    hideLogin,
    logIn,
    logOut
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
