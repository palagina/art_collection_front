import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Container } from "semantic-ui-react"

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? "none" : "" }
  const showWhenVisible = { display: visible ? "" : "none" }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Container style={{ paddingTop: "20px" }}>
      <Container style={hideWhenVisible}>
        <Button color="violet" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </Container>
      <Container style={showWhenVisible} className="togglableContent">
        {props.children}
        <Button color="red" onClick={toggleVisibility} style={{ marginTop: "10px" }}>Cancel</Button>
      </Container>
    </Container>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable