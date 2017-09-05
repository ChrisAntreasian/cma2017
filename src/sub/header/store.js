
export const DISPLAY_LOGIN = 'burger/DISPLAY_LOGIN'
export const HIDE_LOGIN = 'burger/HIDE_LOGIN'
export const LOGIN = 'burger/LOGIN'
export const LOGOUT = 'burger/LOGOUT'

const initialState = {
  submitting: false,
  loginDisplayed: false,
  user: {
    loggedIn: false,
    name: null,
    email: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOGIN:
      return {
        ...state,
        loginDisplayed: true
      }
    case HIDE_LOGIN:
      return {
        ...state,
        loginDisplayed: false
      }
    case LOGIN:
      return {
        ...state,
        user: action.user,
        loginDisplayed: false
      }
    case LOGOUT:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export const displayLogin = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_LOGIN
    })
  }
}

export const hideLogin = () => {
  return dispatch => {
    dispatch({
      type: HIDE_LOGIN
    })
  }
}

export const logIn = () => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      user: {
        loggedIn: true,
        name: 'chris Test',
        email: 'chrisantreasian@gmail.com'  
      }
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
        email: null
      }
    })
  }
}