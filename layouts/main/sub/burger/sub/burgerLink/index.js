import React from 'react'
import Link from 'next/link'

import { burgerLink } from './../../styles'

export default (props) => {
    return (
        <div className="link">
            <Link href={props.href}><a>
                <div className="linkImage">
                    <img src={props.img} alt={props.title} />
                </div>
                <div>
                    {props.title}
                </div>
            </a></Link>
            <style jsx>{burgerLink}</style>
        </div>
    )
}