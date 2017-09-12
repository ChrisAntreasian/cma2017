import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    getPosts
} from './store.js'

class Posts extends Component {
    componentWillMount() {
        this.props.getPosts()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>WP posts</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.posts,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
