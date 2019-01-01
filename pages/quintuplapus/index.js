import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Layout from '~/layouts/p2017'
import store from '~/store'
import { setClientLoaded } from './store'
import styles from './styles'
import dynamic from 'next/dynamic';

const FlipPage = dynamic(import('react-flip-page'), { ssr: false });

class Quintuplapus extends Component {
    static getInitialProps ({store, isServer, pathname, query}) {
        const fetcher = require('~/fetcher')

        const media = fetcher.getQuintuplapusGallery()
        store.dispatch(media)

        return media.resolve.then((res) => {
            store.dispatch({
                type: 'quint/SET_GALLERY',
                media: res.media
            })
        })
    }
    componentDidMount() {
        this.props.setClientLoaded()
    }
    render() {
        const leaves = this.props.quintLeaves.map((leaf, i) => {
            return (
                <img src={leaf.src} alt={leaf.alt} key={'leaf-' + i} />
            )
        })

        let flipPageNode = this.props.clientLoaded ? (
            <FlipPage
            responsive={false}
            orientation="horizontal"
            className="quint-book"
            width={770}
            pageBackground="none"
            uncutPages={false}
            animationDuration={700}
            flipOnTouch={true}
            flipOnTouchZone={30}
            disableSwipe={true}
            showHint={true}
            showTouchHint={true}>
                {leaves}
            </FlipPage>
        ) : 'loading...'
        
        return (
            <Layout>
                <section>
                    <h1>The Quintupalpus</h1>
                    <article>
                        {flipPageNode}
                    </article>
                </section>
                <style jsx>{styles}</style>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quintuplapus)
