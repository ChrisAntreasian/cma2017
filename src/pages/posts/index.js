import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post from './sub/post'

import {
    getPosts
} from './store.js'

class Posts extends Component {
    componentWillMount() {
        this.props.getPosts()
    }

    render() {
        console.log(this.props.posts)

        let loadingNode = null
        if (this.props.loading) {
            loadingNode = (
                <div className="posts__loading">...loading</div>
            )
        }

        let postsNode = null
        for (let post of this.props.posts) {
            console.log(post)
        }
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
            <div>
                <h1>WP posts</h1>
                <section className="posts__list">
                    {loadingNode}
                    {errorNode}
                    {postsNode}
                </section>
            </div>
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
