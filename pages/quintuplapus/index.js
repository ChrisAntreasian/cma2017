
import React, { Component } from 'react'
import NoSSR from 'react-no-ssr';

import withRedux from "next-redux-wrapper";

import Layout from '~/layouts/main'
import store, {makeStore} from '~/store'

import styles from './styles'

let FlipPage = (typeof window !== 'undefined') ? require('react-flip-page') : null

class Quintuplapus extends Component {
    componenetDidMount() {
        FlipPage = (FlipPage) ? FlipPage : require('react-flip-page')
    }
    render() {
        const leaves = this.props.quintLeaves.map((leaf, i) => {
            return (
                <img src={leaf.src} alt={leaf.alt} key={'leaf-' + i} />
            )
        })
        console.log(<FlipPage
            orientation="horizontal"
            className="book"
            width={707}
            pageBackground="none"
            uncutPages={true}
            animationDuration={320}>
                {leaves}
            </FlipPage>
        )
        const flipPageNode = null
        // (FlipPage) ?
        //     <FlipPage
        //     orientation="horizontal"
        //     className="book"
        //     width={707}
        //     pageBackground="none"
        //     uncutPages={true}
        //     animationDuration={320}>
        //         {leaves}
        //     </FlipPage>
        // : 'loading...'
        return (
            <Layout>
                <section>
                    <h1>Welcome to the Quintpuapus</h1>
                    <div className="container">
                        {flipPageNode}
                    </div>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    quintLeaves: state.quint.quintLeaves
})

export default withRedux(makeStore, mapStateToProps)(Quintuplapus)

