import axios from "axios"
import token from "./posts"

const baseUrl = "http://localhost:3003/api/posts"

const getAllComments = async id => {
  const url = `${baseUrl}/${id}/comments`
  const response = await axios.get(url)
  return response.data
}

const addComment = async newObject => {
  const config = {
    headers: { Authorization: token }
  }
  const url = `${baseUrl}/${newObject.postId}/comments`
  const response = await axios.post(url, newObject, config)
  return response.data
}

export default { getAllComments, addComment }