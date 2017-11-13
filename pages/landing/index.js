
import React from 'react'
import { connect } from 'react-redux'

import portrait from './img/chris-a-self-portrait.png'
import Layout from '~/layouts/p2017'
import styles from './styles'

import IgFeed from '~/shared/igfeed'

import Switcher from './sub/switcher'
const Landing = () => {
    return (
        <Layout>
            <section>
                <div className="welcome">
                    <h1>Welcome to the LandingPage</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum arcu at imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sit amet diam nec ipsum sagittis tristique. Phasellus pellentesque leo a lectus aliquam pharetra.
                    </p>
                    <p>
                        Vivamus a laoreet ante. Maecenas bibendum elit eget nunc condimentum placerat. Aenean at euismod nisl. Quisque laoreet dignissim eleifend. Nunc ultrices dignissim elit, nec tincidunt mi sollicitudin sed. Quisque magna diam, hendrerit at tristique vitae, volutpat sit amet orci. Nulla tempor sem id dictum ultricies. Suspendisse ultricies risus et nunc hendrerit,
                    </p>
                </div>
                <style jsx>{styles}</style>
                <IgFeed />
            </section>
            <Switcher />
        </Layout>
    )
}

export default connect()(Landing)
