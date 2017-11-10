
import React from 'react'
import { connect } from 'react-redux'

import portrait from './img/chris-a-self-portrait.png'
import Layout from '~/layouts/p2017'
import styles from './styles'

const Landing = () => {
    return (
        <Layout>
            <section>
                <h1>Welcome to the LandingPage</h1>
                <img src={portrait} alt="Christopher Antreasian self portrait" />
                <div>
                    placeholder
                </div>
                <style jsx>{styles}</style>
            </section>
        </Layout>
    )
}

export default connect()(Landing)
