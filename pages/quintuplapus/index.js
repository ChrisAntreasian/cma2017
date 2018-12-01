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
        /*
        
        {
  "responsive": true,
  "orientation": "horizontal",
  "animationDuration": 200,
  "treshold": 10,
  "maxAngle": 45,
  "maskOpacity": 0.4,
  "perspective": "130em",
  "pageBackground": "#fff",
  "firstComponent": null,
  "lastComponent": null,
  "showHint": false,
  "showSwipeHint": false,
  "showTouchHint": false,
  "uncutPages": false,
  "style": {},
  "height": 480,
  "width": 320,
  "onPageChange": "[function onPageChange]",
  "className": "",
  "flipOnLeave": false,
  "loopForever": false,
  "flipOnTouch": false,
  "flipOnTouchZone": 10,
  "disableSwipe": false
}
*/
        return (
            <FlipPage
            responsive={false}
            orientation="horizontal"
            className="quint-book"
            width={770}
            pageBackground="none"
            uncutPages={false}
            animationDuration={320}
            flipOnTouch={true}
            flipOnTouchZone={30}
            disableSwipe={true}
            showHint={true}
            showTouchHint={true}>
                {leaves}
            </FlipPage>
        )
    }

    render() {  
        let flipPageNode = 'loading...'
        if (this.props.clientLoaded) {
            flipPageNode = this.initalizeFlipPage()
        }
        console.log('page rendered')
        return (
            <Layout>
                <section>
                    <article>
                        {flipPageNode}
                    </article>
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
