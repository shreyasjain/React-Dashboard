import React, {useState } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'
import {
    Link,
    Redirect
} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import logInClick from "../actions/loggedIn"
import fetchUsers from "../actions/getUsers"

export default function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const isLoggedIn = useSelector(state => state.isLogged)
    dispatch(fetchUsers())
    const users = useSelector(state=>state.users)
    console.log(users)

    function submitForm() {
        const reqUser = users.filter(user => user["email"] === username)
        // if (reqUser.length > 0 && reqUser[0]["username"] === password) {
        if (username==='a' && 'a'=== password) {
        dispatch(logInClick())
        } else {
            alert("Incorrect username/password")
        }

    }
    if (isLoggedIn === true) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="container">
            <Jumbotron>
                <h1>LogIn</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="username" type="email" placeholder="Enter email" value={username} onChange={event => setUsername(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                    </Form.Group>
                    <Button style={{ "marginRight": "10px" }} variant="primary" type="submit" onClick={submitForm}>
                        Login
                    </Button>
                    <Link to="/register">or, create a new account</Link>
                </Form>
            </Jumbotron>
        </div>
    )

}
