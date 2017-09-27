import React from 'react'
import { Link } from 'react-router-dom'

import styles from './../../styles.css'

const BurgerLink = (props) => {    
    return (
        <div className={styles.link}>
            <Link to={props.href}>
                <div className={styles.linkImage}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div>
                    {props.title}
                </div>
            </Link>
        </div>
    )
}

export default BurgerLink