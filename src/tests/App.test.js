import React from "react"
import { render,  waitForElement } from "@testing-library/react"
jest.mock("../services/posts.js")
jest.mock("../services/login.js")
import { prettyDOM } from "@testing-library/dom"
import App from "../App"


describe("<App />", () => {
  test("shows no posts if not logged in", async () => {
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(() => component.container.querySelector(".loginForm"))
    const posts = component.container.querySelectorAll(".postDiv")
    expect(posts.length).toBe(0)
  })
})

describe("<App />", () => {
  const user = {
    username: "user",
    password: "password",
    token: "1231231214",
    name: "Tester"
  }
  test("renders all posts it gets from backend", async () => {
    localStorage.setItem("loggedBlogAppUser", JSON.stringify(user))
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(() => component.container.querySelector(".postDiv"))
    const posts = component.container.querySelectorAll(".postDiv")
    expect(posts.length).toBe(3)
    expect(component.container).toHaveTextContent("HTML is easy")
    expect(component.container).toHaveTextContent("Browser can execute only javascript")
    expect(component.container).toHaveTextContent("The most important methods of HTTP are GET and POST")
  })
})