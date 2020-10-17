// eslint-disable-next-line react-hooks/rules-of-hooks
import postService from "../services/posts"

const postReducer = (state = [], action) => {
  switch (action.type) {
  case "INIT_POSTS":
    return action.data
  case "DELETE": {
    const deletedPost = action.data
    const deletedPostList = state.filter(post => post.id !== deletedPost.id)
    return deletedPostList}
  case "NEW_POST":
    return [...state, action.data]
  case "UPDATE":{
    const newPost = action.data
    const updatedPostList = state.map(post => post.id !== newPost.id ? post : newPost)
    return updatedPostList }
  case "LIKE": {
    const id2 = action.data.id
    const likesToChange = state.find(p => p.id === id2)
    const changedLikesPost = { ...likesToChange, likes: likesToChange.likes+1 }
    const updatedLikesList = state.map(post => post.id !== id2 ? post : changedLikesPost)
    return updatedLikesList }
  default: return state
  }
}

export const createPost = newObject => {
  return async dispatch => {
    const newPost = await postService.create(newObject)
    dispatch({
      type: "NEW_POST",
      data: newPost,
    })
  }
}

export const deletePost = post => {
  return async dispatch => {
    await postService.remove(post)
    dispatch({
      type: "DELETE",
      data: post,
    })
  }
}

export const initializePosts = () => {
  return async dispatch => {
    const posts = await postService.getAll()
    dispatch({
      type: "INIT_POSTS",
      data: posts,
    })
  }
}

export const updatePost = (id, newPost) => {
  return async dispatch => {
    const updatedPost = await postService.updatePost(id, newPost)
    dispatch({
      type: "UPDATE",
      data: updatedPost
    })
  }
}

export const updateLikes = post => {
  return async dispatch => {
    const updatedLikes = await postService.updateLikes(post)
    dispatch({
      type: "LIKE",
      data: updatedLikes
    })
  }
}

export default postReducer