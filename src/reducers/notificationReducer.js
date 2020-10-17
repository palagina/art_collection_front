const notifictionReducer = (state = "", action) => {
  switch (action.type) {
  case "LIKE_NOTIFICATION": {
    const postName = action.data
    const like_notification = "You liked post '" + postName + "'"
    return like_notification }
  case "DELETE_NOTIFICATION":{
    const postName = action.data
    const delete_notification = "You deleted post '" + postName + "'"
    return delete_notification }
  case "UPDATE_NOTIFICATION":{
    const postName = action.data
    const delete_notification = "You updated post '" + postName + "'"
    return delete_notification }
  case "EMPTY":
    return ""
  case "NEWPOST_NOTIFICATION":{
    const postName = action.data
    const new_name = "You created new post '" + postName + "'"
    return new_name }
    default: return state
  }
}

export const like_notification = (postName, time) => {
  return async dispatch => {
    dispatch({
      type: "LIKE_NOTIFICATION",
      data: postName
    })
    setTimeout(() => dispatch({ type: "EMPTY" }), time + "00")
  }
}

export const delete_notification = (postName, time) => {
  return async dispatch => {
    dispatch({
      type: "DELETE_NOTIFICATION",
      data: postName
    })
    setTimeout(() => dispatch({ type: "EMPTY" }), time + "00")
  }
}

export const newPost_notify = (postName, time) => {
  return async dispatch => {
    dispatch({
      type: "NEWPOST_NOTIFICATION",
      data: postName
    })
    setTimeout(() => dispatch({ type: "EMPTY" }), time + "00")
  }
}

export const updatePost_notify = (postName, time) => {
  return async dispatch => {
    dispatch({
      type: "UPDATE_NOTIFICATION",
      data: postName
    })
    setTimeout(() => dispatch({ type: "EMPTY" }), time + "00")
  }
}

export default notifictionReducer
