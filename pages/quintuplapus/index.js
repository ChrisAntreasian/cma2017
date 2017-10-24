
import React, { Component } from 'react'
import FlipPage from 'react-flip-page'
import Layout from '../../layouts/main'

import { connect } from 'react-redux'

class Quintuplapus extends Component {
    render() {
        console.log(this.props)
        const book = this.props.quintLeaves.map((leaf, i) => {
            return (
                <img src={leaf.src} alt={leaf.alt} key={'leaf-' + i} />
            )
        })
        return (
            <Layout>
                <section>
                    <h1>Welcome to the Quintpuapus</h1>
                    <div className="">
                        <FlipPage
                        orientation="horizontal"
                        className=""
                        width={707}
                        pageBackground="none"
                        uncutPages={true}
                        animationDuration={320}>
                            {book}
                        </FlipPage>
                    </div>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    quintLeaves: state.quint.quintLeaves
})

export default connect(
    mapStateToProps
)(Quintuplapus)
