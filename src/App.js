import React, { useEffect } from "react"
import Login from "./components/Login"
import PostList from "./components/PostList"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Users from "./components/Users"
import User from "./components/User"
import Post from "./components/Post"
import Notification from "./components/Notification"
import postService from "./services/posts"
import { initializePosts } from "./reducers/postReducer"
import { initComments } from "./reducers/commentsReducer"
import { getUsers } from "./reducers/usersReducer"
import { logout, setUser } from "./reducers/loginReducer"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Container, Header } from "semantic-ui-react"

const App = props => {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      postService.setToken(user.token)
      props.setUser(user.username)
    }
    props.getUsers()
    props.initializePosts()
    props.initComments().catch(error => {
      console.log(error.message)
    })
  }, [])

  const LoggedIn = () => {
    return (
      <div>
        <NavBar user={props.user} />
        <Notification />
      </div>
    )
  }

  const userById = id => {
    return props.users.find(user => user.id === id);
  }

  const postById = id => {
    return props.posts.find(post => post.id === id);
  }

  return (
    <Container>
      <Router>
        <Container>
          <Container>
            {props.user === "" ? <Redirect to="/login" /> : <Redirect to="/" />}
            <Header size="large" style={{ padding: "30px 0px" }}>
              ARTICLES COLLECTION
            </Header>
          </Container>
          <Route
            exact
            path="/"
            render={() => (
              <Container>
                <LoggedIn />
                <PostList user={props.user} />
                <Footer />
              </Container>
            )}
          />
          <Route exact path="/login" render={() => <Login />} />
          <Route
            path="/users"
            render={() => (
              <Container>
                <LoggedIn />
                <Users user={props.user} />
                <Footer />
              </Container>
            )}
          />
          <Route
            path="/users/:id"
            render={({ match }) => (
              <Container>
                <User user={userById(match.params.id)} />
                <Footer />
              </Container>
            )}
          />
          <Route
            exact
            path="/posts/:id"
            render={({ match }) => (
              <Container>
                <LoggedIn />
                <Post post={postById(match.params.id)} />
                <Footer />
              </Container>
            )}
          />
        </Container>
      </Router>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    users: state.users,
    posts: state.posts,
  }
}

const mapDispatchToProps = {
  initializePosts, logout, setUser, getUsers, initComments
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
