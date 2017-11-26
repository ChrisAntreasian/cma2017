const configs = require('~/configs')

module.exports = { 
    getInitalWpPosts: () => {
        return {
            type: 'ig/SET_ALL',
            resolution: new Promise( resolution => {
                fetch( configs.wp.url + '/wp/v2/posts', {
                    method: 'GET'
                }).then( posts => {
                    return posts.json()
                }).then( posts => {
                    let postsArray = []
                    for (let post of posts) {
                        postsArray.push(post)
                    }
                    resolution({ posts: postsArray })
                }).catch( res => {
                    resolution({
                        error: res.message
                    })
                })
            })
        }
    },
    getInitalIgPosts: (data) => {
        return {
            type: 'posts/SET_ALL',
            resolution: new Promise( resolution => {
                fetch( configs.ig.url + '/v1/users/' + configs.ig.userId + '/media/recent?access_token=' + configs.ig.token, {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                }).then( posts => {
                    return posts.json()
                }).then( posts => {
                    resolution({ posts: posts })
                }).catch( res => {
                    resolution({
                        error: res.message
                    })
                })
            })
        }
    }
}

export default null