import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserStatus from './sub/UserStatus'
import Dropdown from './sub/Dropdown'

import {
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser
} from './store.js'


const mapStateToProps = state => ({
    user: state.header.user,
    logIn: state.header.logIn
})

const mapDispatchToProps = dispatch => bindActionCreators({
    displayLogIn,
    hideLogIn,
    logInUser,
    logOutUser
}, dispatch)

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
        let error = null
        if (this.props.logIn.error) {
            error = (
                <div className="header__error">
                    {this.props.logIn.error}
                </div>
            )
        }

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
                        logOutUser={this.props.logOutUser}/>

                        <Dropdown
                        logInUser={this.props.logInUser}
                        hideLogIn={this.props.hideLogIn}
                        loggedIn={this.props.user.loggedIn}
                        logIn={this.props.logIn} />

                        {error}

                    </div>
                </div>
            </header>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
