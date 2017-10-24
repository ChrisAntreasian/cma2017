import React from 'react'

import { userStatus } from './../../styles.js'

export default (props) => {
    return (
        <div className="userStatus">
            {(props.user.loggedIn) ? (
                <div>
                    {props.user.name} <a onClick={props.logOutUser}>(Log Out)</a>
                </div>
            ) : (
                <a onClick={props.displayLogIn}>
                    Log in
                </a>
            )}
            <style jsx>{userStatus}</style>
        </div>
    )
}