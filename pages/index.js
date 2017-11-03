import React from 'react'
import withRedux from "next-redux-wrapper";
import {makeStore} from '~/store'

import Landing from './landing'

const Index = () => {
    return (
        <Landing />
    )
}

export default withRedux(makeStore)(Index)