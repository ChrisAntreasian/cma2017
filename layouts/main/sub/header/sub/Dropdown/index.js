
// import cx from 'classnames';

import React from 'react'
import LogInForm from './sub/LogInForm'

const Dropdown = (props) => {
    if (props.loggedIn) {
        return null
    }

    let styles; // remove me!!!
    const displayClass = (props.logIn.displayed) ? 
        styles : '';

    return (
        <div className="">
            <a className="" onClick={props.hideLogIn}>x</a>
            <LogInForm logInUser={props.logInUser} logInLoading={props.logIn.loading} />
        </div>
    )
}

export default Dropdown
