import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Table, Container } from "semantic-ui-react"
import AddNew from "./AddNew"
import Togglable from "./Togglable"
import Search from "./Search"

const PostList = props => {
  return (
    <Container>
      <Togglable buttonLabel="New Post">
        <AddNew />
      </Togglable>
      <Search />
      <Table striped celled>
        <Table.Body>
          {props.visiblePosts.map(post => (
            <Table.Row key={post.id}>
              <Table.Cell>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </Table.Cell>
              <Table.Cell>{post.user.username}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  )
}

const postsToShow = ({ posts, filter }) => {
  if (filter !== undefined) {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    )
    return filteredPosts
  } else {
    return posts
  }
}

const mapStateToProps = (state) => {
  return {
    visiblePosts: postsToShow(state)
  }
}

export default connect(
  mapStateToProps, null
)(PostList)
