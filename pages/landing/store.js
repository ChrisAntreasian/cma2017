export const SET_RESUME = 'landing/SET_RESUME'

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
        default:
            return state
    }
}
