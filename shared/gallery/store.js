
export const SET_LOADING = 'gallery/SET_LOADING'
export const SET_GALLERY = 'gallery/SET_GALLERY'
export const SET_ACTIVE = 'gallery/SET_ACTIVE'

const initialState = {
    loading: true,
    media: [],
    activeMedia: null,
    position: [0]
}
export default (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_GALLERY:
            return {
                ...state,
                media: action.media,
                activeMedia: 0,
                loading: false
            }
        case SET_ACTIVE:
            return {
                ...state,
                activeMedia: action.activeMedia
            }
        default:
        return state
    }
}

export const setActiveMedia = (index) => {
    console.log(index)
    return dispatch => {
        dispatch({
            type: SET_ACTIVE,
            activeMedia: index
        })
    }
}