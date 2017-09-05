import React from 'react'

const LogInDropdown = (props) => {
    const displayClass = (props.loginDisplayed) ? 
        ' header__dropdown--visible' : ' header__dropdown--hidden';
    
    return (
        (!props.loggedIn) ? (
            <div className={"header__dropdown" + displayClass}>
                <a className="header__dropdown-x" onClick={props.hideLogin}>x</a>
                <a onClick={props.logIn}>Click to log in.</a>
            </div>
        ) : (
            null
        )
    )
}

export default LogInDropdown
