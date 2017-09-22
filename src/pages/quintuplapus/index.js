
import React, { Component } from 'react'
import FlipPage from 'react-flip-page'

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
            <section className="quint">
                <h1>Welcome to the Quintpuapus</h1>
                <div className="quint__book-container">
                    <FlipPage 
                    orientation="horizontal"  
                    className="quint__book"
                    width={707}
                    pageBackground="none"
                    uncutPages={true}
                    animationDuration={320}>
                        {book}
                    </FlipPage>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    quintLeaves: state.quint.quintLeaves
})

export default connect(
    mapStateToProps
)(Quintuplapus)
