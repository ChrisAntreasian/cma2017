import quintImg from './img/quint.jpg'
import landingImg from './img/landing.jpg'

export const BURGER_OPEN = 'burger/BURGER_OPEN'
export const BURGER_CLOSE = 'burger/BURGER_CLOSE'

const initialState = {
  burgerExpanded: false,
  burgerLinks: [
    {
      key: 'landing',
      title: 'Landing Page',
      href: '/landing',
      img: landingImg
    },
    {
      key: 'quint',
      title: 'Quintuplapus',
      href: '/quintuplapus',
      img: quintImg
    },
    {
      key: 'posts',
      title: 'Posts',
      href: '/posts',
      img: landingImg
    },
    {
      key: 'counter',
      title: 'Counter',
      href: '/counter',
      img: quintImg
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
   
    case BURGER_OPEN:
      return {
        ...state,
        burgerExpanded: true
      }

    case BURGER_CLOSE:
      return {
        ...state,
        burgerExpanded: false
      }

    default:
      return state
  }
}

export const openBurger = () => {
  return dispatch => {
    dispatch({
      type: BURGER_OPEN
    })
  }
}

export const closeBurger = () => {
  return dispatch => {
    dispatch({
      type: BURGER_CLOSE
    })
  }
}