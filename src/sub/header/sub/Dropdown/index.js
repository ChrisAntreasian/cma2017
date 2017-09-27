
import cx from 'classnames';

import React from 'react'
import LogInForm from './sub/LogInForm'

import styles from './../../styles.css'

const Dropdown = (props) => {
    if (props.loggedIn) {
        return null
    }

    const displayClass = (props.logIn.displayed) ? 
        styles.dropdownVisible : '';

    return (
        <div className={cx(styles.dropdown, displayClass)}>
            <a className={styles.dropdownClose} onClick={props.hideLogIn}>x</a>
            <LogInForm logInUser={props.logInUser} logInLoading={props.logIn.loading} />
        </div>
    )
}

export default Dropdown
