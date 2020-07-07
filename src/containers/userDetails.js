import React, { useState, useEffect } from "react"
import { Jumbotron, Container } from "react-bootstrap"
import axios from "axios"

export default function UserDetails({ match }) {

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + match.params.id)
            .then(response => setUser(response.data))
    })

    return (
        <div className="container">
            <Jumbotron fluid>
                <Container>
                    <h1>{user.name}</h1>
                    <p>E-Mail: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    {/* <p>HomeTown: {user.address.city}</p> */}
                    <p>Website: {user.website}</p>
                </Container>
            </Jumbotron>
        </div>
    )
}