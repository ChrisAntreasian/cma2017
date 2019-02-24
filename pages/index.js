import React, { Component } from 'react'
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
import Link from 'next/link'

class Landing extends Component {

    static getInitialProps ({store, isServer, pathname, query}) {
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
        let resume =  this.props.resume
        let contentInViewNode = this.props.resume ? HTMLParser(this.props.resume) : 'loading...'
        if (this.props.inView == 'contact') {
             contentInViewNode = <Contact />;
        }
        return (
            <Layout>
                <section>
                    <article>
                        <h2>Web development</h2>
                        <p>
                            Through my career as a web developer, I've gained some experience working fullstack, but have always been drawn to he front end.
                            Over this time I have witnesed browsers and the languages of the web grow, change and evolved.
                            At one time getElementById was the only method of selecting elements and images were used for rounded corners.
                            CSS became more mature and jQuery became the libary of choice, making building user interfaces more simply.
                            For the past few years I have been using newer tools like ReactJS and SCSS.
                            Dispite the challenges of learning any new technology, ReactJS provided organization and stability to dynamic interfaces.
                            I have since become comfortable with these tools and can use them quickly to realize application compositions.
                            The internet is a wonderful place and using JavaScript and CSS I love building for the web.
                        </p>
                        <h2>Illustration</h2>
                        <p>
                            I started my artistic endever at a young age, spending hours drawing cartoon characters at my great aunts house. 
                            My family motivated me to forge forward enrolling me in a number of after school art programs.
                            Thanks to the opportunities given to me by my family art had become an enormous part of who i am as a person.
                            Surrounded by other talented artists I have made it a point to continue to make art a priority in my life and attempt to 
                            find enough motivation to create whenever I can.
                        </p>
                        <p>
                            Off and on, since graduating high school, I have been working on an illustrated novel called the Quintuplapus.
                            It is a story about an octopus who experiences many challenges on his adventure.
                            <Link href="/quintuplapus">
                                <a>Learn more about the quintuplapus</a>
                            </Link>
                        </p>
                    </article>
                    <div className="portrait"></div>
                    <FbSidebar />
                    <style jsx>{styles}</style>
                </section>

                <div className="wrap wrap--red">
                    <section>
                        <nav>
                            <a onClick={() => {this.props.switchContent('resume')}}>Resume</a>
                            <a onClick={() => {this.props.switchContent('contact')}}>Contact</a>
                        </nav>
                        <article className="capsule">
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

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Landing)
