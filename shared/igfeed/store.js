
import fetch from 'isomorphic-unfetch'
import fetcher from '~/fetcher'

export const SET_ALL = 'igfeed/SET_ALL'
export const LOADING = 'igfeed/LOADING'
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

 // export const getInitialPosts = () => async (dispatch) => {
 //    try {
 //        const posts = await fetcher.getInitalIgPosts();
 //        dispatch({
 //            type: SET_ALL,
 //            posts: posts
 //        })
 //    } catch (e) {
 //        dispatch({
 //            type: ERROR,
 //            error: e
 //        })
 //    }
    
export const getInitialPosts = () => async (dispatch) => {    
    const posts = await fetcher.getInitalIgPosts();
    return posts.resolve.then((res) => {
        dispatch({
            type: 'SET_ALL',
            posts: res.posts
        })
    })
}
