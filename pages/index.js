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
                            Over my career as a web developer, browsers and the languages of the web have evolved alot.
                            At one time getElementById was the only method of selecting elements and images had to be used for rounded corners.
                            Amazing people found solutions to the short commings of he web.  More advanced CSS and Javascript libraries set out 
                            to make ui more intersting and interactive. jQuery became the libary of choice simpliying how JS is writen, and adding a more elaborate feature set.
                            Now powerful tools like webpack and React building complex user interfaces much more simple, organized and dynamic.
                        </p>
                        <p>
                            My experience as a developer is fullstack, but I have always been drawn to the front end. 
                            As a visual person, it's great to write code that outputs an interactive design. I am lucky to have worked at such an interesting
                            time to be a web developer. ReactJS is a pleasure to do work with, dispite how quirky browser still can be.
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
