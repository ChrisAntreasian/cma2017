
import fetch from 'isomorphic-unfetch'

import configs from '~/configs.js'

export const SET_ALL = 'posts/SET_ALL'
export const LOADING = 'posts/POSTS_LOADING'
export const ERROR = 'posts/ERROR'

const initialState = {
    posts: [],
    activeId: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL:
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}

export const getInitialPosts = () => {
    return {
        type: 'GET_ALL',
        resolution: new Promise( resolution => {
            fetch( configs.baseurl + '/wp/v2/posts', {
                method: 'GET'
            }).then( res => {
                return res.json();
            }).then( res => {
                let postsArray = []
                for (let post of res) {
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
}