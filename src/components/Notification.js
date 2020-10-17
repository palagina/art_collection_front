import React from "react"
import { connect } from "react-redux"
import { Container, Message } from "semantic-ui-react"

const Notification = (props) => {

  const { notification, error } = props

  if (error !== "") {
    return (
      <Container style={{ paddingTop: "20px" }}>
        {(error && <Message error> {error} </Message>)}
      </Container>
    )
  } else {
    return (
      <Container style={{ paddingTop: "20px" }}>
        {(notification && <Message success> {notification} </Message>)}
      </Container>
    )}
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    error: state.error,
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications

