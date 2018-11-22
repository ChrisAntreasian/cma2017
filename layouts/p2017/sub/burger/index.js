
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BurgerLink from './sub/burgerLink'
import BurgerLayer from './sub/burgerLayer'

import {
    openBurger,
    closeBurger
} from './store.js'

import styles from './styles'

const Burger = (props) => {

    const burgerLinks = props.burgerLinks.map((burgerLink) => {
        return (
            <BurgerLink {...burgerLink} key={burgerLink.key}/>
        )
    })

    const burgerLayers = props.burgerLayers.map((burgerImg, i) => {
        return (
            <BurgerLayer key={'burger-img-' + i}
            src={burgerImg}
            burgerExpanded={props.burgerExpanded}
            index={i}/>
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
                    margin-bottom: ${props.burgerExpanded ?  100 : -220}px;
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
