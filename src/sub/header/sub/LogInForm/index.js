import React from 'react'

const LogInForm = (props) => {
    let username;
    let password

    const loginFormSubmit = () => {
        props.logIn({
            username: username,
            password: password
        });        
    }

    let errorNode = null;
    if (props.logInError) {
        errorNode = (
            <div className="header__login-error">
                {props.logInError}
            </div>
        )
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
        <div className="header__login-form">
            <form className="login" onSubmit={loginFormSubmit}>
                <label>username:</label>
                <input ref={(ref) => username = ref} placeholder="username" />
                <label>username:</label>
                <input ref={(ref) => password = ref} placeholder="password"  />
                <button>Log In</button>
            </form>
            {loadingNode}
            {errorNode}       
        </div>
    )
}

export default LogInForm