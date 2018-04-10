import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import fetch from 'isomorphic-unfetch'

import store from '~/store'

import Layout from '~/layouts/p2017'
import Post from './sub/post'

import styles from './styles'

import IgFeed from '~/shared/igfeed'

class Posts extends Component {

    static getInitialProps ({store}) {
        const fetcher = require('~/fetcher')
        const posts = fetcher.getInitalWpPosts()
        store.dispatch(posts)

        return posts.resolve.then((res) => {
            store.dispatch({
                type: 'posts/SET_ALL',
                posts: res.posts
            })
        })
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
                    <Post {...post} key={'wp-post' + post.id}/>
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
            <Layout>
                <section>
                    <div className="posts">
                        <h1>WP posts</h1>
                        {loadingNode}
                        {errorNode}
                        {postsNode}
                    </div>
                    <IgFeed />
                </section>
                <style jsx>{styles}</style>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
})

export default withRedux(store, mapStateToProps)(Posts)
