const errorReducer = (state = "", action) => {
  switch (action.type) {
  case "EMPTY":
    return ""
  case "ERROR": {
    return action.data
  }
  default:
    return state
  }
}

export const error = (error, time) => {
  return async dispatch => {
    dispatch({
      type: "ERROR",
      data: error
    })
    setTimeout(() => dispatch({ type: "EMPTY" }), time + "00")
  }
}

export default errorReducer
