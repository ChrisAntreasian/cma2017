
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BurgerLink from './sub/burgerLink'

import {
    openBurger,
    closeBurger
} from './store.js'

const Burger = (props) => {

    const burgerLinks = props.burgerLinks.map((burgerLink) => {
        return (
            <BurgerLink {...burgerLink} key={burgerLink.key}/> 
        )
    });

    let burgerLinksClass = ' burger__navigation--collapsed'
    let burgerAction = props.openBurger
    if (props.burgerExpanded) {
        burgerLinksClass = ' burger__navigation--expanded'
        burgerAction = props.closeBurger
    }
    return (
        <nav className="burger" onClick={burgerAction}>
            <div className="burger__overlay">Menu</div>
            <div className={"burger__navigation" + burgerLinksClass}>
                {burgerLinks}
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    burgerExpanded: state.burger.burgerExpanded,
    burgerLinks: state.burger.burgerLinks
})

const mapDispatchToProps = dispatch => bindActionCreators({
    openBurger,
    closeBurger
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Burger)
