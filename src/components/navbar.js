import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "./dashboard"
import UserList from "./user-list"
import BlogList from "./blog-list"

function NavBar() {
    return (
        <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/userList">User-List</Nav.Link>
                            <Nav.Link href="/blogList">Blog-List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/userList">
                        <UserList />
                    </Route>
                    <Route path="/blogList">
                        <BlogList />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default NavBar