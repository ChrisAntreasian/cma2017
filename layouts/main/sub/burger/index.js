
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

    let styles = {}; // remove me 
    let burgerLinksClass = styles.navigationCollapsed
    let burgerAction = props.openBurger
    if (props.burgerExpanded) {
        burgerLinksClass = styles.navigationExpanded
        burgerAction = props.closeBurger
    }
    return (
        <nav className="" onClick={burgerAction}>
            <div className="">Menu</div>
            <div className="">
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
