import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import store from '~/store'

import Layout from '~/layouts/p2017'
import Post from './sub/post'

import { getInitialPosts } from './store.js'

class IgFeed extends Component {
    // static getInitialProps ({store, isServer, pathname, query}) {
    //     console.log('get inital props')
    //     const posts = getInitialPosts()
    //     store.dispatch(posts)

    //     return posts.resolution.then((res) => {
    //         console.log(res)
    //         store.dispatch({
    //             type: 'igfeed/SET_ALL',
    //             posts: res.posts
    //         })
    //     })
    // }
    componentDidMount() {
        console.log('componentDidMount')
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
        // if (this.props.posts) {
        //     postsNode = this.props.posts.map((post, i) => {
        //         return (
        //             <Post {...post} key={i}/>
        //         )
        //     })
        // }

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

