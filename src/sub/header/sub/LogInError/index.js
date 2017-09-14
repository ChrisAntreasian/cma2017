
import React from 'react'

const LogInError = (props) => {
    if (!props.error) {
        return null
    }

    return (
        <div className="header__error">
            {props.error}
        </div>
    )    
}

export default LogInError
