const user = {
  username: "user",
  name: "Tester",
  token: "1231231214"
}
let token = null

const setToken = () => {
  token = `bearer ${user.token}`
}
const setUser = () => {
  return Promise.resolve(user)
}

const login = () => {
  return Promise.resolve(user)
}

export default { login, setUser, setToken }

// export default { setUser, setToken }