export const BURGER_OPEN = 'burger/BURGER_OPEN'
export const BURGER_CLOSE = 'burger/BURGER_CLOSE'


const initialState = {
  burgerExpanded: false,
  burgerLinks: [
    {
      key: 'landing',
      title: 'Landing Page',
      href: '/landing',
      img: 'burg-link__burger.jpg'
    },
    {
      key: 'quint',
      title: 'Quintuplapus',
      href: '/quintuplapus',
      img: 'burg-link__quint.jpg'
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