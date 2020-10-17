import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logout from "./Logout"
import { Menu } from "semantic-ui-react"

const NavBar = props => {
  return (
    <div>
      <Menu inverted color="teal">
        <Menu.Item link>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item link>
            {props.user ? (
              <em>
                {props.user} logged in <Logout />
              </em>
            ) : (
              <Link to="/login">login</Link>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default connect(null, null)(NavBar)