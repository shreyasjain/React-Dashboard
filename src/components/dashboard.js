import React from 'react'
import {Link,Redirect,BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './dashboard.css'
import UserList from './user-list'
import BlogList from './blog-list'
import LogOut from "./Logout"
import {useSelector} from "react-redux"

export default function DashBoard(){

    const loggedIn = useSelector(state => state.loggedIn)

        if(loggedIn===false){
            return <Redirect to="/login"/>
        }
        return (
            <div className="full-container">
            <Router>
            <div className="sidebar">
                <h2>Menu</h2>
                <Link to="/userList" className="sidebar-anchors">User-List</Link>
                <br/>
                <Link to="/blogList" className="sidebar-anchors">Blog-List</Link>
                <br/>
                <Link to="/logout" className="sidebar-anchors">LogOut</Link>
            </div>
            <Switch>
                <Route path="/userlist">
                    <UserList/>
                </Route>
                <Route path="/bloglist">
                    <BlogList/>
                </Route>
                <Route path="/logout">
                    <LogOut/>
                </Route>
            </Switch>
            </Router>
            </div>
        )
    
}

