import React from "react"
import { connect } from "react-redux"
import { createPost, updatePost } from "../reducers/postReducer"
import postService from "../services/posts"
import { newPost_notify, updatePost_notify } from "../reducers/notificationReducer"
import { error } from "../reducers/errorReducer"
import { Form, Button, Header, Container, Input } from "semantic-ui-react"

const AddNew = props => {
  const { title, author, url } = props

  const handleData = async event => {
    event.preventDefault()
    console.log(event.target)
    const postObject = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0
    }
    event.target.title.value = ""
    event.target.author.value = ""
    event.target.url.value = ""
    const postMatch = await checkExisting(postObject.title)
    postMatch === undefined
      ? addPost(postObject)
      : updatePost(postMatch, postObject)

  }

  const checkExisting = async newTitle => {
    const posts = await postService.getAll()
    const titleMatch = await posts.find(post =>
      post !== undefined ? post.title === newTitle : undefined
    )
    return titleMatch
  }

  const addPost = async postObject => {
    try {
      await props.createPost(postObject)
      props.newPost_notify(postObject.title, 50)
    } catch (error) {
      props.error(error.response.data.error, 50)
    }
  }

  const updatePost = async (postMatch, postObject) => {
    if (
      window.confirm(
        `${postMatch.title} already exists. Do you want to replace it?`
      )
    ) {
      try {
        await props.updatePost(postMatch.id, postObject)
        props.updatePost_notify(postObject.title, 50)
      } catch (error) {
        props.error(error.response.data.error, 50)
      }
    }
  }

  return (
    <Container>
      <Header size="medium">Create new post</Header>
      <Form onSubmit={handleData} id="addForm">
        <Form.Field>
          <Input name="title" placeholder='Enter title' {...title} />
        </Form.Field>
        <Form.Field>
          <Input className="author" placeholder='Enter author' {...author} />
        </Form.Field>
        <Form.Field>
          <Input name="url" placeholder='Enter URL' {...url} />
        </Form.Field>
        <Button type="submit" color="violet">Add</Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = {
  createPost, updatePost, newPost_notify, updatePost_notify, error,
}

export default connect(
  null,
  mapDispatchToProps
)(AddNew)