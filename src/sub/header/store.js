import fetchival from 'fetchival'

import appConfigs from './../../base/app_configs.js'

export const DISPLAY_LOGIN = 'burger/DISPLAY_LOGIN'
export const HIDE_LOGIN = 'burger/HIDE_LOGIN'
export const LOGIN_SUCCESS = 'burger/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'burger/LOGIN_ERROR'
export const LOGIN_LOADING = 'burger/LOGIN_ERROR'
export const LOGOUT = 'burger/LOGOUT'

const initialState = {
  submitting: false,
  logInDisplayed: false,
  logInError: null,
  logInLoading: false,
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
        logInDisplayed: true
      }
    case HIDE_LOGIN:
      return {
        ...state,
        logInDisplayed: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        logInDisplayed: false,
        logInLoading: false
      }
    case LOGIN_ERROR:
     return {
        ...state,
        logInError: action.message,
        logInLoading: false
      }
    case LOGOUT:
      return {
        ...state,
        user: action.user
      }
     case LOGIN_LOADING:
      return {
        ...state,
        logInLoading: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        logInError: action.message,
        logInLoading: false
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

const logInLoading = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING
    })
  }
}

export const logIn = () => {
  return dispatch => {
    logInLoading();  
    fetchival( appConfigs.baseurl + '/jwt-auth/v1/token', {
      mode: 'cors' 
    }).post({
      username: 'chris',
      password: 'chicken84'
    }).then( r => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: {
          loggedIn: true,
          name: r.user_display_name,
          email: r.user_email,
          token: r.user_token 
        }
      })
    }).catch( r => {
      dispatch({
        type: LOGIN_ERROR,
        message: r.message 
      })
    })
  }
  
}

export const logOut = () => {
  return dispatch => {
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