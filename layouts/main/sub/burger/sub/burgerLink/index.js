import React from 'react'
import Link from 'next/link'

const BurgerLink = (props) => {    
    return (
            <Link href={props.href}><a>
                <div className="">
                    <img src={props.img} alt={props.title} />
                </div>
                <div>
                    {props.title}
                </div>
            </a></Link>
    )
}

export default BurgerLink