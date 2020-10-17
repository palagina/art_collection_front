import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { prettyDOM } from "@testing-library/dom"
import SimplePost from "../components/SimplePost"
import Post from "../components/Post"

//renders title, author and likes
test("renders content", () => {
  const post = {
    title: "Test title",
    author: "Test author",
    likes: 0
  }
  const component = render(<SimplePost post={post} />)
  expect(component.container).toHaveTextContent("Test title")
  expect(component.container).toHaveTextContent("Test author")
  expect(component.container).toHaveTextContent("0")
})

//like button calls event handler once
test("clicking likes button twice calls event handler twice", () => {
  const post = {
    title: "Test title",
    author: "Test author",
    likes: 0
  }
  const mockHandler = jest.fn()
  const { getByText } = render(
    <SimplePost post={post} onClick={mockHandler} />
  )
  const button = getByText("like")
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockHandler.mock.calls.length).toBe(2)
})

//Togglable post info
describe("Togglable post info", () => {
  let component
  const post = {
    title: "Test title",
    author: "Test author",
    likes: 0,
    user: "123"
  }
  beforeEach(() => {
    component = render(
      <Post post={post}/>
    )
  })
  test("renders post", () => {
    component.container.querySelector(".postDiv")
  })

  test("at start post info is not displayed", () => {
    const div = component.container.querySelector(".postInfo")
    expect(div).toHaveStyle("display: none")
  })

  test("after clicking the button, post info is displayed", () => {
    const button = component.getByText("Test title")
    fireEvent.click(button)
    const postInfo = component.container.querySelector(".postInfo")
    expect(postInfo).not.toHaveStyle("display: none")
  })
})