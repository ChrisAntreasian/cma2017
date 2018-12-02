import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'

import HTMLParser from 'html-react-parser'
import { bindActionCreators } from 'redux'

import store from '~/store'
import Layout from '~/layouts/p2017'

import FbSidebar from '~/shared/fbSidebar'

import { switchContent } from './store'
import styles from './styles'
import { switcher } from './styles'
import portrait from './img/chris-a-self-portrait.png'

import Contact from './sub/contact'

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
        let contentInViewNode = HTMLParser(this.props.resume);
        if (this.props.inView == 'contact') {
             contentInViewNode = <Contact />;
        }
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

                <div className="wrap">
                    <section>
                        <nav>
                            <a onClick={() => {this.props.switchContent('resume')}}>Resume</a>
                            <a onClick={() => {this.props.switchContent('contact')}}>Contact</a>
                        </nav>
                        <article>
                            {contentInViewNode}
                        </article>
                    </section>
                    <style jsx>{switcher}</style>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    resume: state.landing.resume,
    inView: state.landing.inView
})

const mapDispatchToProps = dispatch => bindActionCreators({
    switchContent
}, dispatch)

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Landing)
