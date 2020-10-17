import loginService from "../services/login"

const loginReducer = (state = "", action) => {
  switch (action.type) {
  case "SETUSER":
    return action.data
  case "LOGOUT":
    return action.data
  default: return state
  }
}

export const logout = () => {
  return async dispatch => {
    const user = null
    dispatch({
      type: "LOGOUT",
      data: user
    })
  }
}

export const setUser = (user) => {
  return async dispatch => {
    dispatch({
      type: "SETUSER",
      data: user
    })
  }
}

export default loginReducer
