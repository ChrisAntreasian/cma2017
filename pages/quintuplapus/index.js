
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from "next-redux-wrapper"

import Layout from '~/layouts/p2017'
import store from '~/store'
import { setClientLoaded } from './store'
import styles from './styles'

let FlipPage = null

class Quintuplapus extends Component {

    componentDidMount() {
        FlipPage = require('react-flip-page').default
        this.props.setClientLoaded()
    }

    initalizeFlipPage() {
        const leaves = this.props.quintLeaves.map((leaf, i) => {
            return (
                <img src={leaf.src} alt={leaf.alt} key={'leaf-' + i} />
            )
        })
        return (
            <FlipPage
            orientation="horizontal"
            className="quint-book"
            width={707}
            pageBackground="none"
            uncutPages={true}
            animationDuration={320}>
                {leaves}
            </FlipPage>
        )
    }

    render() {
        let flipPageNode = 'loading...'
        if (this.props.clientLoaded) {
            flipPageNode = this.initalizeFlipPage()
        }
        return (
            <Layout>
                <section>
                    <h1>Welcome to the Quintpuapus</h1>
                    <div className="container">
                        {flipPageNode}
                    </div>
                    <style jsx>{styles}</style>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    quintLeaves: state.quint.quintLeaves,
    clientLoaded: state.quint.clientLoaded
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setClientLoaded
}, dispatch)

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Quintuplapus)
