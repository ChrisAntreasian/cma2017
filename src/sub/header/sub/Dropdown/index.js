
import React from 'react'
import LogInForm from './sub/LogInForm'

const Dropdown = (props) => {
    if (props.loggedIn) {
        return null
    }

    const displayClass = (props.logIn.displayed) ? 
        ' header__dropdown--visible' : ' header__dropdown--hidden';

    return (
        <div className={"header__dropdown" + displayClass}>
            <a className="header__dropdown-x" onClick={props.hideLogIn}>x</a>
            <LogInForm logInUser={props.logInUser} logInLoading={props.logIn.loading} />
        </div>
    )
}

export default Dropdown
