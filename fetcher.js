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
                    console.log('catch e', res)
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },

    getFBPosts: function() {
        return {
            type: 'fb/get_FB_POSTS',
            resolve: new Promise( resolve => {
                fetch( configs.fb.url + '/posts?access_token=' + configs.fb.token + '&fields=id,picture,type,message,caption', {
                    method: 'GET'
                }).then( posts => {
                    return posts.json()
                }).then( res => {
                    resolve({ posts: res.data })
                }).catch( res => {
                    console.log('e', res)
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },
    getFBAlbum: function() {
        return {
            type: 'fb/SET_ALL',
            resolve: new Promise( resolve => {
                fetch( configs.fb.url + '/posts?access_token=' + configs.fb.token + '&fields=id,picture,type,message,caption', {
                    method: 'GET'
                }).then( posts => {
                    return posts.json()
                }).then( res => {
                    resolve({ posts: res.data })
                }).catch( res => {
                    console.log('e', res)
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },

/*
    getInitalIgPosts: function() {
        console.log('something is happening')
        // https://api.instagram.com/oembed?url=http://instagr.am/christopherantreasian/
        // '/v1/users/' + configs.ig.userId +
        // '/media/recent?access_token=' + configs.ig.token,
        return {
            type: 'ig/SET_ALL', // this may not be necessary look in to removing in all instances
            resolve: new Promise ( resolve => {
                fetch(
                    configs.ig.url +
                    '/oembed?url=http://instagr.am/christopherantreasian/',
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
                    console.log(posts)
                }).catch( res => {
                    resolve({
                        error: res.message
                    })
                })
            })
        }
    },

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
