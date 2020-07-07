import React, { useState} from 'react'
import { Table } from 'react-bootstrap'
import { Redirect, Link } from "react-router-dom"
import {useSelector} from "react-redux"

export default function UserList(){
  
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
              <th>S.No.</th>
              <th>Full Name</th>
              <th>UserName</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
              <tr>
              <td>{count++}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td><Link to={`/userList/${user.id}`}><button>Details</button></Link></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
}