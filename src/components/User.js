import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { List, Container, Header } from "semantic-ui-react"

const User = props => {
  if (props.user === undefined) {
    return null
  }
  return (
    <Container>
      <Header size="large" style={{ paddingTop: "30px" }}>{props.user.username}</Header>
      <Header size="medium">Added blogs</Header>
      <List>
        {props.user.posts.map(post => (
          <List.Item key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </List.Item>
        ))}
      </List>
    </Container>
  )
}

export default connect(null, null)(User)