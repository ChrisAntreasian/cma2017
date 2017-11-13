import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import store from '~/store'

import Layout from '~/layouts/p2017'
import Post from './sub/post'

import { getInitialPosts } from './store.js'
import styles from './styles'

class IgFeed extends Component {
    componentDidMount() {
        this.props.getInitialPosts()
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
                    <Post {...post} key={'ig-post' + post.id}/>
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
            <aside>
                <h2>My Instagram</h2>
                <div>
                    {loadingNode}
                    {errorNode}
                    {postsNode}
                </div>
                <style jsx>{styles}</style>
            </aside>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    getInitialPosts
}, dispatch)

const mapStateToProps = state => ({
    posts: state.igfeed.posts,
    loading: state.igfeed.loading,
    error: state.igfeed.error
})

export default connect(mapStateToProps, mapDispatchToProps)(IgFeed)

