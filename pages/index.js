import React from 'react'
import withRedux from "next-redux-wrapper";
import store from '~/store'

import Landing from './landing'

const Index = () => {
    return (
        <Landing />
    )
}

export default withRedux(store)(Index)