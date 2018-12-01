import quintImg from './img/quint.jpg'
import landingImg from './img/landing.jpg'

const burgerLinks =  [{
    key: 'landing',
    title: 'Landing Page',
    href: '/landing',
    img: landingImg
}, {
    key: 'quint',
    title: 'Quintuplapus',
    href: '/quintuplapus',
    img: quintImg
}, {
    key: 'posts',
    title: 'Posts',
    href: '/posts',
    img: landingImg
}]

import bunBottom from './img/burger/bun-bottom.svg'
import burger from './img/burger/burger.svg'
import cheeseBottom from './img/burger/cheese-bottom.svg'
import cheeseTop from './img/burger/cheese-top.svg'
import bacon from './img/burger/bacon.svg'
import lettuce from './img/burger/lettuce.svg'
import tomato from './img/burger/tomato.svg'
import onion from './img/burger/onion.svg'
import pickles from './img/burger/pickles.svg'
import bunTop from './img/burger/bun-top.svg'

const burgerLayers = [{
    src: bunBottom,
    name: 'bunBottom'
}, {
    src: burger,
    name: 'burger'
}, {
    src: cheeseBottom,
    name: 'cheeseBottom'
}, {
    src: cheeseTop,
    name: 'cheeseTop'
}, {
    src: bacon,
    name: 'bacon'
}, {
    src: lettuce,
    name: 'lettuce'
}, {
    src: tomato,
    name: 'tomato'
}, {
    src: onion,
    name: 'onion'
}, {
    src: pickles,
    name: 'pickles'
}, {
    src: bunTop,
    name: 'bunTop'
}]


const initialState = {
    burgerExpanded: false,
    burgerLinks: burgerLinks,
    burgerLayers: burgerLayers
}

export const BURGER_OPEN = 'burger/BURGER_OPEN'
export const BURGER_CLOSE = 'burger/BURGER_CLOSE'

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
