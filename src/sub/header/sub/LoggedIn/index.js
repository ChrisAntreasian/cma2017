import React from 'react'

const LoggedIn = (props) => {
    console.log(props)
    return (
        <div className="header__logged-in">
            {props.user.name} <span onClick={props.logOut}>(Log Out)</span>
        </div>
    )
}

export default LoggedIn