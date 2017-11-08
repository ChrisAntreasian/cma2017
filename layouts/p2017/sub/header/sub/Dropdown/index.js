
import React from 'react'

import { dropdown, form } from './../../styles.js'

export default (props) => {
    if (props.loggedIn) {
        return null
    }

    const loginFormSubmit = (e) => {
        e.preventDefault()
        props.logInUser({
            username: username.value,
            password: password.value
        });
    }

    let username
    let password
    const logInFormNode = (
        <div>
            <form  onSubmit={loginFormSubmit}>
                <label>username:</label>
                <input ref={(ref) => username = ref} placeholder="username" type="text" />
                <label>password:</label>
                <input ref={(ref) => password = ref} placeholder="password" type="password" />
                <button>Log In</button>
            </form>
            {(props.logIn.loading) ? (
                <div className="header__login-loading">
                    Loading...
                </div>
            ) : null}
            <style jsx>{form}</style>
        </div>
    )
    return (
        <div className="dropdown">
            <a className="dropdown__close" onClick={props.hideLogIn}>x</a>
            {logInFormNode}
            <style jsx>{dropdown}</style>
            <style jsx>{`
            .dropdown {
                margin-top: ${props.logIn.displayed ?  33 : -140}px;
            }
            `}</style>
        </div>
    )
}

