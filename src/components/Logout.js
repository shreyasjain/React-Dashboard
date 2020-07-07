import React from 'react'
import { Jumbotron, Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import logoutClick from "../actions/loggedIn"

export default function Logout(){
    const dispatch = useDispatch() 
    // localStorage.removeItem("token")
    dispatch(logoutClick())   
    return (
        <div className="container">
            <Jumbotron>
            <h1>You have been successfully Logged Out!!!</h1>
            <Link to="/login"> <Button variant="primary">LogIn Again</Button></Link>
            </Jumbotron>
        </div>
    )
}
