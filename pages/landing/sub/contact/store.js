import fetcher from '~/fetcher'

export const UPDATE_INPUT = 'contact/UPDATE_INPUT'
export const SET_LOADING = 'contact/SET_LOADING'
export const SET_ERROR = 'contact/SET_ERROR'
export const SET_SUCCESS = 'contact/SET_SUCCESS'

const initialState = {
    email: '',
    subject: '',
    body: '',
    name: '',
    error: null,
    success: null,
    loading: false
}

export default (state = initialState, action) => {
      switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                [action.field.name]: action.field.value
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.message,
                success: null,
                loading: false
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: action.message,
                error: null,
                loading: false
            }
        default:
            return state
    }
}

export const updateInput = (field) => {
    return dispatch => {
        dispatch({
            type: UPDATE_INPUT,
            field: {
                name: field.name,
                value: field.value
            }
        })
    }
}
export const submitForm = (e) => {
    e.preventDefault()
    return (dispatch, getState)=> {
        const state = getState()
        dispatch({
            type: SET_LOADING,
            value: true
        })
        if (!state.contact.email || !state.contact.subject || !state.contact.body || !state.contact.name) {
            dispatch({
                type: SET_ERROR,
                message: 'Enter all of the required fields.'
            })
            return
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(state.contact.email).toLowerCase())) {
            dispatch({
                type: SET_ERROR,
                message: 'This is not a valid email.'
            })
            return
        }
        const sendContactEmail = async () => {
            const sendEmail = await fetcher.sendContactMail({
                address: state.contact.email,
                subject: state.contact.subject,
                body: state.contact.body,
                name: state.contact.name
            })
            return sendEmail.resolve.then((res) => {
                if (res.error) {
                    dispatch({
                        type: SET_ERROR,
                        message: res.error.message
                    })
                    return
                }

                dispatch({
                    type: SET_SUCCESS,
                    message: 'Thanks for reaching out'
                })
            })
        }
        sendContactEmail()
    }
}
