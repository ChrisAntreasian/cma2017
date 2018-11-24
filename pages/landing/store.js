export const SET_RESUME = 'landing/SET_RESUME'
export const SWITCH_CONTENT = 'landing/SWITCH_CONTENT'

const initialState = {
    resume: null,
    inView: 'resume'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RESUME:
            return {
                ...state,
                resume: action.resume
            }
        case SWITCH_CONTENT:
            return {
                ...state,
                inView: action.switchTo
            }
        default:
            return state
    }
}

export const switchContent = (switchTo) => {
    return dispatch => {
        dispatch({
            type: SWITCH_CONTENT,
            switchTo: switchTo
        })
    }
}
