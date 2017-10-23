import React from 'react'

import styles from './../../../../styles.css'

const LogInForm = (props) => {
    let username;
    let password

    const loginFormSubmit = (e) => {
        e.preventDefault()
        props.logInUser({
            username: username.value,
            password: password.value
        });        
    }

    let loadingNode = null;
    if (props.logInLoading) {
        loadingNode = (
            <div className="header__login-loading">
                Loading...
            </div>
        )
    }

    return (
        <div className={styles.form}>
            <form className="login" onSubmit={loginFormSubmit}>
                <label>username:</label>
                <input ref={(ref) => username = ref} placeholder="username" type="text" />
                <label>password:</label>
                <input ref={(ref) => password = ref} placeholder="password" type="password" />
                <button>Log In</button>
            </form>
            {loadingNode}     
        </div>
    )
}

export default LogInForm