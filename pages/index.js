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
                            I have been working as a professional web developer for 10 years, gaining experience with full stack development. The aspect of web developemnt that I find most rewarding is building front ends.
                            Using JavaScript and CSS together they are incredibly powerful tools that I use to build fun interactive user interfaces.
                            Over my career the languages of the web have evolved, at one time jQuery was used to for user interactions and images for rounded corners. Newer tools like ReactJS provides organization and stability to interfaces and many of the older limitations of CSS have been solved.
                            My skills with web technology have grown with these new tools, and many moments that may have proved chalenging in the past are now much more simple.
                        </p>
                        <h2>Illustration</h2>
                        <p>
                            I started my artistic career at a young age, spending hours drawing cartoon characters at my great aunts house. 
                            My family motivated me to forge forward enrolling me in a number of after school art programs.
                            Thanks to the opportunities given to me by my family art had become an enormous part of who i am as a person.
                            Surrounded by other talented artists I have made it a point to continue to make art a priority in my life and attempt to 
                            find enough motivation to create whenever I can.
                        </p>
                        <p><Link href="/quintuplapus">Learn more about the quintuplapus</Link></p>
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
