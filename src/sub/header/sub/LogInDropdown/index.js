
import React from 'react'
import LogInForm from '../LogInForm'

const LogInDropdown = (props) => {
    if (props.loggedIn) {
        return null
    }

    const displayClass = (props.logInDisplayed) ? 
        ' header__dropdown--visible' : ' header__dropdown--hidden';

    return (
        <div className={"header__dropdown" + displayClass}>
            <a className="header__dropdown-x" onClick={props.hideLogIn}>x</a>
            <LogInForm logIn={props.logIn} logInLoading={props.logInLoading} />
        </div>
    )
}

export default LogInDropdown
