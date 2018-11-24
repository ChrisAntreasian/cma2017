
import fetch from 'isomorphic-unfetch'
import fetcher from '~/fetcher'

export const SET_ALL = 'fbSidebar/SET_ALL'
export const LOADING = 'fbSidebar/LOADING'
export const ERROR = 'fbSidebar/ERROR'

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
        const setPosts = async () => {
            const postsRequest = await fetcher.getFBPosts()
            return postsRequest.resolve.then((res) => {
                if (res.error) {
                    dispatch({
                        type: ERROR,
                        error: res.error
                    })
                    return
                }
                dispatch({
                    type: SET_ALL,
                    posts: res.posts.data
                })
            })
        }
        setPosts()
    }
}
