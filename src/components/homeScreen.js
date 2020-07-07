import React from "react"
import {Jumbotron, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function HomeScreen(){ 
    return(
        <div>
        <Jumbotron>
            <h1>Welcome to My App!</h1>
            <Link to="/login"> <Button variant="primary">LogIn/SignUp</Button></Link>
          </Jumbotron>
        </div>
    )   
}
