import React from 'react'

import styles from './../../styles.css'

const UserStatus = (props) => {
    return (
        <div className={styles.userStatus}>
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
