import React from 'react'

const LogInForm = (props) => {
    let username;
    let password

    const loginFormSubmit = (e) => {
        e.preventDefault()
        props.logIn({
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
        <div className="header__login-form">
            <form className="login" onSubmit={loginFormSubmit}>
                <label>username:</label>
                <input ref={(ref) => username = ref} placeholder="username" />
                <label>password:</label>
                <input ref={(ref) => password = ref} placeholder="password"  />
                <button>Log In</button>
            </form>
            {loadingNode}     
        </div>
    )
}

export default LogInForm