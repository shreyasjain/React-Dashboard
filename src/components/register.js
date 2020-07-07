import React from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'

export default function Register() {
    return (
        <div className="container">
            <Jumbotron>
                <h1>Register</h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="reg-name" type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="reg-id" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="reg-password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicRepeatPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="reg-repeat-password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree the terms and conditions." />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Sign Up
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}
  
