import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import store from '~/store'

import Layout from '~/layouts/p2017'
import Post from './sub/post'

import { getInitialPosts } from './store.js'
import styles from './styles'

class fbSidebar extends Component {
    componentDidMount(store) {
        this.props.getInitialPosts()
    }

    render() {
        let loadingNode = null
        if (this.props.loading) {
            loadingNode = (
                <div className="posts__loading">...loading</div>
            )
        }

        const mockposts = [
            {
                id: 1,
                message: 'message',
                picture: 'http://www.gigamegaultra.com/wordpress/wp-content/themes/q/images/quintuplapus-chapter3-btn.jpg'
            }, {
                id: 2,
                message: 'message',
                picture: 'http://www.gigamegaultra.com/wordpress/wp-content/themes/q/images/quintuplapus-chapter3-btn.jpg'
            }, {
                id: 3,
                message: 'message',
                picture: 'http://www.gigamegaultra.com/wordpress/wp-content/themes/q/images/quintuplapus-chapter3-btn.jpg'
            }, {
                id: 4,
                message: 'message',
                picture: 'http://www.gigamegaultra.com/wordpress/wp-content/themes/q/images/quintuplapus-chapter3-btn.jpg'
            }
        ]
        let postsNode = null
        // if (this.props.posts) {
            // postsNode = this.props.posts.map((post, i) => {
        if (mockposts) {
            postsNode = mockposts.map((post, i) => {
                return (
                    <Post {...post} key={'fb-post' + post.id} />
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
                <h2>My FB feed</h2>
                <div>
                    {loadingNode}
                    {errorNode}
                    {postsNode}
                </div>
                <style jsx>{styles}</style>
            </aside>
        )

        return null
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    getInitialPosts
}, dispatch)

const mapStateToProps = state => ({
    posts: state.fbSidebar.posts,
    loading: state.fbSidebar.loading,
    error: state.fbSidebar.error
})

export default connect(mapStateToProps, mapDispatchToProps)(fbSidebar)
