const posts = [
  {
    id: "5a451df7571c224a31b5c8ce",
    title: "HTML is easy",
    author: "Author",
    url: "url",
    likes: 5,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  },
  {
    id: "5a451e21e0b8b04a45638211",
    title: "Browser can execute only javascript",
    author: "Author2",
    url: "url",
    likes: 0,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  },
  {
    id: "5a451e30b5ffd44a58fa79ab",
    title: "The most important methods of HTTP are GET and POST",
    author: "Author2",
    url: "url",
    likes: 6,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  }
]

const user = {
  username: "user",
  name: "Tester",
  token: "1231231214"
}
let token = null

const setToken = () => {
  token = `bearer ${user.token}`
}

const getAll = () => {
  return Promise.resolve(posts)
}

export default { getAll, setToken }
