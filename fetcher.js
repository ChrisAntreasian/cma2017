const configs = require('./configs')
require('isomorphic-unfetch')


module.exports = {

    getInitalWpPosts: function() {
        return {
            type: 'wp/SET_ALL',
            resolve: new Promise( resolve => {
                fetch( configs.wp.url + '/wp/v2/posts', {
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
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },

    getInitalIgPosts: function() {
        console.log('something is happening')
        return {
            type: 'ig/SET_ALL', // this may not be necessary look in to removing in all instances
            resolve: new Promise ( resolve => {
                fetch(
                    configs.ig.url +
                    '/v1/users/' + configs.ig.userId +
                    '/media/recent?access_token=' + configs.ig.token, 
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' }
                    }
                ).then( posts => {
                    return posts.json()
                }).then( posts => {
                    let postsArray = []
                    for (let post of posts) {
                        postsArray.push(post)
                    }
                    resolve({ posts: postsArray })
                }).catch( res => {
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },
/*
    getInitalIgPostsV1: function(data) {
        console.log('getting posts')
        return async(data) => {
            console.log('derp')
            console.log('trying')
            let posts = await fetch(
                configs.ig.url +
                '/v1/users/' + configs.ig.userId +
                '/media/recent?access_token=' + configs.ig.token, {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            console.log('after first await')
            posts = await posts.json()
            console.log('after second await');
            return { posts: posts }
        }
    },

    OgetInitalIgPosts: (data) => {
        return {
            type: 'posts/SET_ALL',
            resolve: new Promise( resolve => {
                fetch( configs.ig.url + '/v1/users/' + configs.ig.userId + '/media/recent?access_token=' + configs.ig.token, {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                }).then( posts => {
                    return posts.json()
                }).then( posts => {
                    resolve({ posts: posts })
                }).catch( res => {
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },
    */
}
