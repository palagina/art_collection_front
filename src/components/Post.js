import React from "react"
import { connect } from "react-redux"
import { updateLikes, deletePost } from "../reducers/postReducer"
import { like_notification, delete_notification  } from "../reducers/notificationReducer"
import { error } from "../reducers/errorReducer"
import { withRouter } from "react-router-dom"
import Comments from "./Comments"
import { Header, Container, Icon, Button, Label } from "semantic-ui-react"

const PostNoHistory = (props) => {
  const { post, user } = props

  const giveLike = () => {
    try {
      props.updateLikes(post)
      props.like_notification(post.title, 20)
    } catch (error) {
      props.error(error.response.data.error, 30)
    }
  }

  const deletePost = () => {
    try {
      props.history.push("/")
      props.deletePost(post)
      props.delete_notification(post.title, 20)
    } catch (error) {
      console.log(error)
    }
  }

  if (props.post === undefined) {
    return null
  }

  return (
    <Container>
      <Header size="large">{post.name}</Header>
      <Header as='h3'>Author: {post.author}</Header>
      <Header as='h2'><a href={post.url} rel="noopener noreferrer" target="_blank">
        {" "}
        Read here and tell us what you think in the comments!
      </a></Header>
      <Header as='h3'>Created by: {post.user.username} </Header>
      <Button as="div" labelPosition="right" style={{ marginTop: "20px" }}>
        <Button color="violet" onClick={giveLike}>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic color="violet" pointing="left">
          {post.likes}
        </Label>
      </Button>
      <Container>
        {user !== null ? (
          <DelButton post={post} deletePost={deletePost} />
        ) : null}
      </Container>
      <Comments postId={post.id} />
    </Container>
  )
}

const DelButton = (props) => {
  return (
    <Button style={{ marginTop: "10px" }} value={props.post.id} onClick={props.deletePost} color="red">
      Remove
    </Button>
  )
}

const Post = withRouter(PostNoHistory)

const mapDispatchToProps = {
  updateLikes, deletePost, like_notification, delete_notification, error,
}

export default connect(
  null,
  mapDispatchToProps
)(Post)

