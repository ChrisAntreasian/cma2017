import React from 'react'

const UserStatus = (props) => {
    return (
        <div className="">
            {(props.user.loggedIn) ? (
                <div>
                    {props.user.name} <a onClick={props.logOutUser}>(Log Out)</a>
                </div>
            ) : (
                <a onClick={props.displayLogIn}>
                    Log in
                </a>
            )}
        </div>
    )
}

export default UserStatus
