
import cover from './img/book-leaves/quintupalpus-leaf-fc.png'
import leaf1 from './img/book-leaves/quintupalpus-leaf-1.jpg'
import leaf2 from './img/book-leaves/quintupalpus-leaf-2.jpg'
import leaf3 from './img/book-leaves/quintupalpus-leaf-3.jpg'
import leaf4 from './img/book-leaves/quintupalpus-leaf-4.jpg'
import leaf5 from './img/book-leaves/quintupalpus-leaf-5.jpg'
import leaf6 from './img/book-leaves/quintupalpus-leaf-6.jpg'
import back from './img/book-leaves/quintupalpus-leaf-bc.png'

export const CLIENT_LOADED = 'quint/CLIENT_LOADED'
export const SET_GALLERY = 'quint/SET_GALLERY'

const initialState = {
    clientLoaded: false,
    galeryMedia: [],
    quintLeaves: [{
        alt: 'Quintpuapus demo cover',
        src: cover
    }, {
        alt: 'Quintpuapus demo leaf 1',
        src: leaf1
    }, {
        alt: 'Quintpuapus demo leaf 2',
        src: leaf2
    }, {
        alt: 'Quintpuapus demo leaf 3',
        src: leaf3
    }, {
        alt: 'Quintpuapus demo leaf 4',
        src: leaf4
    }, {
        alt: 'Quintpuapus demo leaf 5',
        src: leaf5
    }, {
        alt: 'Quintpuapus demo leaf 6',
        src: leaf6
    }, {
        alt: 'Quintpuapus demo back',
        src: back
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LOADED:
            return {
                ...state,
                clientLoaded: true
            }
        case SET_GALLERY:
            return {
                ...state,
                galeryMedia: action.media
            }
        default:
        return state
    }
}

export const setClientLoaded = () => {
    return dispatch => {
        dispatch({
            type: CLIENT_LOADED
        })
    }
}
