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
                        props.burgerExpanded ?  10 * props.index : 0
                    }px;
                }
                @media only screen and (max-width: 31em) {
                    .layer {
                        margin-bottom: 0;
                        margin-top: ${
                            props.burgerExpanded ?  10 * props.negativeIndex : 0
                        }px;
                    }
                }
            `}</style>
        </div>
    )
}
