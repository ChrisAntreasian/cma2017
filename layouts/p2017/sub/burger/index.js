
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BurgerLink from './sub/burgerLink'
import BurgerLayer from './sub/burgerLayer'

import {
    openBurger,
    closeBurger
} from './store'

import styles from './styles'

const Burger = (props) => {

    const burgerLinks = props.burgerLinks.map((burgerLink) => {
        return (
            <BurgerLink {...burgerLink}
            key={burgerLink.key}
            closeBurger={props.closeBurger}
            burgerExpanded={props.burgerExpanded}/>
        )
    })

    let cheeseBottomIndex = props.burgerLayers.findIndex(layer => layer.name === 'cheeseBottom')
    const burgerLayers = props.burgerLayers.map((layerDetails, i) => {
        let layerIndex = (i > cheeseBottomIndex) ? i - 1 : i
        let negativeIndex = props.burgerLayers.length - layerIndex
        return (
            <BurgerLayer key={'burger-img-' + i}
            layerDetails={layerDetails}
            burgerExpanded={props.burgerExpanded}
            index={layerIndex}
            negativeIndex={negativeIndex} />
        )
    })

    return (
        <div className="wrap">
            <div className="container">
                <div className="burger"
                onClick={props.burgerExpanded ? props.closeBurger : props.openBurger}>
                    {burgerLayers}
                </div>
                <nav>
                    {burgerLinks}
                </nav>
            </div>

            <style jsx>{styles}</style>
            <style jsx>{`
                nav {
                    height: ${props.burgerExpanded ? 'auto' : '1px'};
                    padding-bottom: ${props.burgerExpanded ?  200 : -220}px;
                }
                @media only screen and (max-width: 31em) {
                    nav {
                        display: ${props.burgerExpanded ? 'block' : 'none'};
                    }
                }
            `} </style>
        </div>
    )
}

const mapStateToProps = state => ({
    burgerExpanded: state.burger.burgerExpanded,
    burgerLinks: state.burger.burgerLinks,
    burgerLayers: state.burger.burgerLayers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    openBurger,
    closeBurger
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Burger)
