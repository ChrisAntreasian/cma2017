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
