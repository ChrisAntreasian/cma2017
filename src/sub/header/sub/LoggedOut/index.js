import React from 'react'

const LoggedOut = (props) => {
    return (
        <div className="header__logged-out" onClick={props.displayLogin}>
            Log in
        </div>
    )
}

export default LoggedOut 