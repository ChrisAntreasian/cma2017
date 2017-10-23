
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BurgerLink from './sub/BurgerLink'

import {
    openBurger,
    closeBurger
} from './store.js'

import cx from 'classnames'
import styles from './styles.css'

const Burger = (props) => {

    const burgerLinks = props.burgerLinks.map((burgerLink) => {
        return (
            <BurgerLink {...burgerLink} key={burgerLink.key}/> 
        )
    });

    let burgerLinksClass = styles.navigationCollapsed
    let burgerAction = props.openBurger
    if (props.burgerExpanded) {
        burgerLinksClass = styles.navigationExpanded
        burgerAction = props.closeBurger
    }
    return (
        <nav className={cx(styles.burger)} onClick={burgerAction}>
            <div className={styles.overlay}>Menu</div>
            <div className={cx(styles.navigation, burgerLinksClass)}>
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
