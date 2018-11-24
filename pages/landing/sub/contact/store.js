import fetch from 'isomorphic-unfetch'

export const UPDATE_INPUT = 'contact/UPDATE_INPUT'
export const SET_LOADING = 'contact/SET_LOADING'
export const SET_ERROR = 'contact/SET_ERROR'
export const SET_SUCCESS = 'contact/SET_SUCCESS'

const initialState = {
    email: null,
    subject: null,
    body: null,
    name: null,
    error: null,
    success: null,
    loading: false
}

export default (state = initialState, action) => {
      switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                [action.name]: action.value
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.message
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: action.message
            }
        default:
            return state
    }
}

export const updateInput = (field) => {
    return dispatch => {
        dispatch({
            type: UPDATE_INPUT,
            action: field
        })
    }
}
export const submitForm = (e) => {
    e.preventDefault()
    console.log('submit form', e)
    return (dispatch, getState)=> {
        const state = getState()
        console.log('state', state)
        dispatch({
            type: SET_LOADING,
            action: true
        })
        if (!state.email || !state.subject || state.body || state.name) {
            dispatch({
                type: SET_ERROR,
                error: 'Enter all of the required fields.'
            })
            return
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(re.test(String(state.email).toLowerCase())) {
            dispatch({
                type: SET_ERROR,
                error: 'This is not a valid email.'
            })
            return
        }
        console.log('sending promise')
        const sendContactMail = async () => {
            const postsRequest = await fetcher.sendContactMail({
                email: state.email,
                subject: state.subject,
                body: state.body,
                name: state.name
            })
            return postsRequest.resolve.then((res) => {
                console.log('attempting to resolve posts')
                if (res.error) {
                    dispatch({
                        type: SET_ERROR,
                        error: res.error
                    })
                    return
                }
                console.log('failed resolve posts')

                dispatch({
                    type: SET_SUCCESS,
                    posts: res.posts.data
                })
            })
        }
        sendContactMail()
    }
}
