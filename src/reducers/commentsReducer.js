import commentsService from "../services/comments"

const commentsReducer = (state = [], action) => {
  switch (action.type) {
  case "INIT_COMMENTS":
    return action.data
  case "NEW_COMMENT":
    return [...state, action.data]
  default:
    return state
  }
}

export const initComments = () => {
  return async dispatch => {
    const comments = await commentsService.getAllComments()
    dispatch({
      type: "INIT_COMMENTS",
      data: comments
    })
  }
}

export const addComment = newObject => {
  return async dispatch => {
    const newComment = await commentsService.addComment(newObject)
    dispatch({
      type: "NEW_COMMENT",
      data: newComment
    })
  }
}

export default commentsReducer
