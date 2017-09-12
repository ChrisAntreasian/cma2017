import React from 'react'

const UserStatus = (props) => {
    return (
        <div className="header__user-status">
            {(props.user.loggedIn) ? (
                <div className="header__logged-in">
                    {props.user.name} <a onClick={props.logOut}>(Log Out)</a>
                </div>
            ) : (
                <a className="header__logged-out" onClick={props.displayLogIn}>
                    Log in
                </a>
            )}
        </div>
    )
}

export default UserStatus
