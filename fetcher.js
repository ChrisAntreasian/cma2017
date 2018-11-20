const configs = require('./configs')
require('isomorphic-unfetch')

const baseUrl = 'http://localhost:3000';

module.exports = {

    getInitalWpPosts: function() {
        return {
            type: 'wp/SET_ALL',
            resolve: new Promise( resolve => {
                fetch(baseUrl + '/wp/posts', {
                    method: 'GET'
                }).then( posts => {
                    return posts.json()
                }).then( posts => {
                    let postsArray = []
                    for (let post of posts) {
                        postsArray.push(post)
                    }
                    resolve({ posts: postsArray })
                }).catch( res => {
                    console.log('e:', res)
                })
            })
        }
    },

    getFBPosts: function() {
        return {
            type: 'fb/SET_FB_POSTS',
            resolve: new Promise( resolve => {
                fetch(baseUrl + '/fb/posts', {
                    method: 'GET'
                }).then( posts => {
                    return posts.json()
                }).then( posts => {
                    resolve({ posts: posts })
                }).catch( res => {
                    console.log('e:', res)
                })
            })
        }
    }
}
