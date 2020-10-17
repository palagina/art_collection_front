import React from "react"
import { connect } from "react-redux"
import { addComment } from "../reducers/commentsReducer"
import {
  Form,
  Button,
  Container,
  Header,
  List,
  Comment,
} from "semantic-ui-react"

const Comments = (props) => {
  const { comments, postId, userId } = props

  const addComment = async (event) => {
    event.preventDefault()
    var today = new Date()
    var timestamp = today.getDate() +"-"+(today.getMonth() + 1) +"-" +today.getFullYear() +" at " +today.getHours() +":" +today.getMinutes()
    const commentObject = {
      postId: postId,
      userId: userId,
      text: event.target.comment.value,
      timestamp: timestamp,
    }
    event.target.comment.value = ""
    try {
      await props.addComment(commentObject)
    } catch (error) {
      props.error(error.response.data.error, 30)
    }
  }

  const randomAvatar = () => {
    const avatarList = [
      'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
      'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
      'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
      'https://react.semantic-ui.com/images/avatar/small/steve.jpg'
    ]
    const random = Math.floor(Math.random() * Math.floor(5))
    const src = avatarList[random]
    return src
  }

  return (
    <Container style={{ paddingTop: "30px" }}>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>

        <Form reply onSubmit={addComment}>
          <Form.TextArea
            name="comment"
            placeholder="Write your comment:"
            {...comments.text}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            color="violet"
          />
        </Form>

        <List>
          {props.comments
            .filter((comment) => postId === comment.postId)
            .map((comment) => (
              <List.Item key={comment.id}>
                <Comment>
                  <Comment.Avatar src= {randomAvatar()} />
                  <Comment.Content>
                    <Comment.Author as="a">Anonyme</Comment.Author>
                    <Comment.Metadata>
                      <div>{comment.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                  </Comment.Content>
                </Comment>
              </List.Item>
            ))}
        </List>
      </Comment.Group>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  }
}

const mapDispatchToProps = {
  addComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
