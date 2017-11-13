
import fetch from 'isomorphic-unfetch'

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

export const getInitialPosts = () => {
    return dispatch => {
        dispatch({
            type: LOADING
        })
        fetch( 'ig/posts', {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        }).then( res => {
            return res.json()
        }).then( json => {
            if (!json.meta || json.meta.code != 200) {
                dispatch({
                    type: ERROR,
                    message: json.error_message
                })
                return
            }
            dispatch({
                type: SET_ALL,
                posts: json.data
            })
        }).catch( res => {
            dispatch({
                type: ERROR,
                message: res
            })
        })
    }
}