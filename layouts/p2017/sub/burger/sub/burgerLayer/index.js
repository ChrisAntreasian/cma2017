import React from 'react'
import { burgerLayer } from './../../styles'

export default (props) => {
    return (
        <div className="layer">
            <img src={props.src} />
            <style jsx>{burgerLayer}</style>
            <style jsx>{`
                .layer {
                    margin-bottom: ${
                        props.burgerExpanded != 0
                        ?  10 * props.index : 0
                    }px;
                }
            `}</style>
        </div>
    )
}
