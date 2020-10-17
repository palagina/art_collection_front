import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Table } from "semantic-ui-react"

const Users = props => {
  return (
    <Table striped celled>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>No of posts</Table.Cell>
        </Table.Row>
        {props.users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </Table.Cell>
            <Table.Cell>{user.posts.length}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, null)(Users)