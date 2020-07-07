import React, { useState, useEffect } from "react"
import { Jumbotron, Container } from "react-bootstrap"
import axios from "axios"

export default function BlogDetails({ match }) {

    const [blog, setBlog] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + match.params.id)
            .then(response => setBlog(response.data.company))
    })
    
    return (
        <div className="container">
            <Jumbotron fluid>
                <Container>
                    <h1>{blog.name}</h1>
                    <p>CatchPhrase: {blog.catchPhrase}</p>
                    <p>BS: {blog.bs}</p>
                </Container>
            </Jumbotron>
        </div>
    )
}