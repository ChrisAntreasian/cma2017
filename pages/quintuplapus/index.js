
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import FlipPage from 'react-flip-page'
import Layout from '../../layouts/main'

import {makeStore} from './../../store/index'

class Quintuplapus extends Component {

    // componentDidMount() {
    // }
    render() {
        const leaves = this.props.quintLeaves.map((leaf, i) => {
            return (
                <img src={leaf.src} alt={leaf.alt} key={'leaf-' + i} />
            )
        })

        let book = null;
        // book = (
        //     <FlipPage
        //     orientation="horizontal"
        //     className=""
        //     width={707}
        //     pageBackground="none"
        //     uncutPages={true}
        //     animationDuration={320}>
        //         {leaves}
        //     </FlipPage>
        // )

        return (
                <Layout>
                    <section>
                        <h1>Welcome to the Quintpuapus</h1>
                        <div className="">
                            {book}
                        </div>
                    </section>
                </Layout>
        )
    }
}

const mapStateToProps = state => ({
    quintLeaves: state.quint.quintLeaves
})

export default withRedux(makeStore, (state) => ({foo: state.foo}))(Page);

// export default connect(
//     mapStateToProps
// )(Quintuplapus)
