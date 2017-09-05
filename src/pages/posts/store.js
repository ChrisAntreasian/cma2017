const PostsApi = './../base/models/Posts.js'

export const GET_POST = 'posts/GET_POST'

const initialState = {
  posts: [],
  activePostId: null
}

export default (state = initialState, action) => {
  switch (action.type) {
   
    case GET_POST:
      return {
        ...state,
        activePostId: action.payload.activePostId
      }

    default:
      return state
  }
}

export const getPost = (id) => {
  return dispatch => {
    dispatch({
      type: GET_POST,
      payload: {
        postId: id
      }
    })
  }
}

