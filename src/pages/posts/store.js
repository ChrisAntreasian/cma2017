import PostsApi from './../../base/models/Posts.js'

export const GET_POSTS = 'posts/GET_POSTS'

const initialState = {
  posts: [],
  activePostId: null
}

export default (state = initialState, action) => {
  switch (action.type) {
   
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    default:
      return state
  }
}

export const getPosts = () => {
  const posts = PostsApi.getAll()
  console.log(posts)
  return dispatch => {
    dispatch({
      type: GET_POSTS,
      posts: ['posts']
    })
  }
}

