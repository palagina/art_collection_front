import axios from "axios"

const baseUrl = "http://localhost:3003/api/posts"

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const updateLikes = async post => {
  const config = {
    headers: { Authorization: token },
  }
  const url = `${baseUrl}/${post.id}`
  const object = { ...post, likes: post.likes+1 }
  const response = await axios.put(url, object, config)
  return response.data
}

const updatePost = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

const remove = async post => {
  const config = {
    headers: { Authorization: token },
  }
  const url = `${baseUrl}/${post.id}`
  const response = await axios.delete(url, config)
  return response.data
}


export default { getAll, create, updateLikes, updatePost, remove, setToken }
