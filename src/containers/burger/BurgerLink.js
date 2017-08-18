import React from 'react'
import { Link } from 'react-router-dom'

const BurgerLink = (props) => {    
    return (
        <div className="burger-link">
            <Link to={props.href}>
                <div className="burger-link__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="burger-link__title">
                    {props.title}
                </div>
            </Link>
        </div>
    )
}

export default BurgerLink