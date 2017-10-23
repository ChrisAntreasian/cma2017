import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post from './sub/Post'

import {
    getPosts
} from './store.js'

class Posts extends Component {
    componentWillMount() {
        this.props.getPosts()
    }

    render() {

        let loadingNode = null
        if (this.props.loading) {
            loadingNode = (
                <div className="posts__loading">...loading</div>
            )
        }

        let postsNode = null
        if (this.props.posts) {
            postsNode = this.props.posts.map((post, i) => {
                return (
                    <Post {...post} key={i}/>
                )
            })
        }

        let errorNode = null
        if (this.props.error) {
            return (
                <div className="posts__error">Error: {this.props.error}</div>
            )
        }

        return (
            <section>
                <h1>WP posts</h1>
                <div>
                    {loadingNode}
                    {errorNode}
                    {postsNode}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
