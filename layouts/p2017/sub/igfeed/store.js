
import fetch from 'isomorphic-unfetch'

import configs from '~/configs.js'

export const SET_ALL = 'igfeed/SET_ALL'
export const LOADING = 'igfeed/POSTS_LOADING'
export const ERROR = 'igfeed/ERROR'

const initialState = {
    posts: [],
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
    
    return dispatch => {
        dispatch({
            type: LOADING
        })
        fetch( configs.instagram.url + '/v1/users/' + configs.instagram.userId + '/media/recent', {
            method: 'GET',            
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then( res => {
            console.log('first')
            return res.json()
        }).then( res => {
            // if (!res.token) {
            //     dispatch({
            //         type: LOGIN_ERROR,
            //         message: res.message
            //     })
            //     return

            console.log('jsonfied', res)
            dispatch({
                type: SET_ALL,
                posts: res.posts
            })

        }).catch( res => {
            console.log('error', res)
            dispatch({
                type: ERROR,
                message: res.message
            })
        })
    }
}
// export const getInitialPosts = () => {
//     console.log('get inital posts')
//     return {
//         type: 'GET_ALL',
//         resolution: new Promise( resolution => {
//             fetch( configs.instagram.url + '/v1/users/' + configs.instagram.userId + '/media/recent', {
//                 method: 'GET'
//             }).then( res => {
//                 return res.json();
//             }).then( res => {
//                 console.log('success', res)
//                 let postsArray = []
//                 for (let post of res) {
//                     postsArray.push(post)
//                 }
//                 resolution({ posts: postsArray })
//             }).catch( res => {
//                 console.log('error', res)
//                 resolution({
//                     error: res.message
//                 })
//             })
//         })
//     }
// }