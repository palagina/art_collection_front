import React from "react"
import { connect } from "react-redux"
import { logout, setUser } from "../reducers/loginReducer"
import { withRouter } from "react-router-dom"
import { Button } from 'semantic-ui-react'

const LogoutNoHistory = props => {

  const userLogout = async (event) => {
    event.preventDefault()
    try {
      const user = await props.logout()
      window.localStorage.removeItem("loggedBlogAppUser", JSON.stringify(user))
      props.setUser(null)
      props.history.push("/login")
    } catch (error) {
      props.error(error, 30)
    }
  }

  return (
    <Button onClick={userLogout} color="violet">Log out</Button>
  )
}

const Logout = withRouter(LogoutNoHistory)

export default connect(null, { logout, setUser })(Logout)