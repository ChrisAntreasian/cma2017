import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import portrait from './img/chris-a-self-portrait.png'
import Layout from '~/layouts/p2017'
import styles from './styles'

import store from '~/store'

import FbSidebar from '~/shared/fbSidebar'

import Switcher from './sub/switcher'

class Landing extends Component {

    static getInitialProps ({store}) {
        const fetcher = require('~/fetcher')

        const resume = fetcher.getResume()
        store.dispatch(resume)

        return resume.resolve.then((res) => {
            store.dispatch({
                type: 'landing/SET_RESUME',
                resume: res.resume.content.rendered
            })
        })
    }

    render() {
        return (
            <Layout>
                <section>
                    <article>
                        <h1>Welcome to the Landing Page</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum arcu at imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sit amet diam nec ipsum sagittis tristique. Phasellus pellentesque leo a lectus aliquam pharetra.
                        </p>
                        <p>
                            Vivamus a laoreet ante. Maecenas bibendum elit eget nunc condimentum placerat. Aenean at euismod nisl. Quisque laoreet dignissim eleifend. Nunc ultrices dignissim elit, nec tincidunt mi sollicitudin sed. Quisque magna diam, hendrerit at tristique vitae, volutpat sit amet orci. Nulla tempor sem id dictum ultricies. Suspendisse ultricies risus et nunc hendrerit,
                        </p>
                    </article>
                    <div className="portrait"></div>
                    <FbSidebar />
                    <style jsx>{styles}</style>
                </section>
                <Switcher resume={this.props.resume} inView={this.props.inView}/>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    resume: state.landing.resume,
    inView: state.landing.inView
})

export default withRedux(store, mapStateToProps)(Landing)
