import React, { useState} from 'react'
import { Table } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function BlogList() {

  const loggedIn = useSelector(state=>state.loggedIn)

  let [count] = useState(1)

  const users = useSelector(state=>state.users)

  if (loggedIn === false) {
    return <Redirect to="/login" />
  }
  return (
    <div style={{ "width": "-webkit-fill-available" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Blog Name</th>
            <th>Description</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{count++}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
              <td><Link to={`/blogList/${user.id}`}><button>Details</button></Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
