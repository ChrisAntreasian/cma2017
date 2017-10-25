
import React from 'react'
import { Provider } from 'react-redux'

import store from './../../store'

import portrait from './img/chris-a-self-portrait.png'
import Layout from '../../layouts/main'

const Landing = () => {
    return (
        <Provider store={store}>
            <Layout>
                <section>
                    <h1>Welcome to the LandingPage</h1>
                    <img src={portrait} alt="Christopher Antreasian self portrait" className="" />
                    <div>
                        placeholder
                    </div>
                </section>
            </Layout>
        </Provider>
    )
}

export default Landing
