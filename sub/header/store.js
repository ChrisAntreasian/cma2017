
import fetchival from 'fetchival'
import configs from './../../configs.js'

export const DISPLAY_LOGIN = 'burger/DISPLAY_LOGIN'
export const HIDE_LOGIN = 'burger/HIDE_LOGIN'
export const LOGIN_SUCCESS = 'burger/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'burger/LOGIN_ERROR'
export const LOGIN_LOADING = 'burger/LOGIN_LOADING'
export const LOGOUT = 'burger/LOGOUT'

const initialState = {
    logIn: {
        displayed: false,
        error: null,
        loading: false
    },
    user: {
        loggedIn: false,
        name: null,
        email: null,
        token: null
    }
}

export default (state = initialState, action) => {
      switch (action.type) {
        case DISPLAY_LOGIN:
            return {
                ...state,
                logIn: {
                    displayed: true,
                    error: null,
                    loading: false
                }
            }
        case HIDE_LOGIN:
            return {
                ...state,
                logIn: {
                    displayed: false,
                    error: null,
                    loading: false
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                logIn: {
                    displayed: false,
                    error: null,
                    loading: false
                }
            }
        case LOGIN_ERROR:
            return {
                ...state,
                logIn: {
                    displayed: true,
                    error: action.message,
                    loading: false
                }
            }
        case LOGOUT:
            return {
                ...state,
                user: action.user
            }
         case LOGIN_LOADING:
            return {
                ...state,
                logIn: {
                    displayed: true,
                    error: null,
                    loading: true
                }
            }
        default:
            return state
    }
}

export const displayLogIn = () => {
    return dispatch => {
        dispatch({
            type: DISPLAY_LOGIN
        })
    }
}

export const hideLogIn = () => {
    return dispatch => {
        dispatch({
            type: HIDE_LOGIN
        })
    }
}

export const logInLoading = () => {
    return dispatch => {
            dispatch({
            type: LOGIN_LOADING
        })
    }
}
export const logInUserFromStorage = () => {
    return dispatch => {
        let userData = JSON.parse(window.localStorage.getItem('user'))
        if (userData) {
            dispatch({
                type: LOGIN_SUCCESS,
                user: userData
            })
        }
    }
}

export const logInUser = (d) => {
    return dispatch => {
        dispatch({
            type: LOGIN_LOADING
        })
        fetchival( configs.baseurl + '/jwt-auth/v1/token', {
            mode: 'cors' 
        }).post({
            username: d.username,
            password: d.password
        }).then( r => {
            const userData = {
                loggedIn: true,
                name: r.user_display_name,
                email: r.user_email,
                token: r.user_token
            }

            window.localStorage.setItem('user', JSON.stringify(userData))

            dispatch({
                type: LOGIN_SUCCESS,
                user: userData
            })
        }).catch( r => {
            dispatch({
                type: LOGIN_ERROR,
                message: r.message 
            })
        })
    }
}

export const logOutUser = () => {
    return dispatch => {
        window.localStorage.removeItem('user')
        dispatch({
            type: LOGOUT,
            user: {
                loggedIn: false,
                name: null,
                email: null,
                token: null
            }
        })
    }
}