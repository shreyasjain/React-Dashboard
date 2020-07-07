import React from 'react'
import Login from './components/Login'
import Register from "./components/register"
import Dashboard from "./components/dashboard"
import UserList from "./components/user-list"
import BlogList from "./components/blog-list"
import Logout from "./components/Logout"
import HomeScreen from './components/homeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import UserDetails from "./containers/userDetails"
import BlogDetails from "./containers/blogDetails"

export default function Routes() {
    return (
      <div className="">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/userList" exact component={UserList}></Route>
            <Route path="/blogList" exact component={BlogList}></Route>
            <Route path="/userList/:id" component={UserDetails}></Route>
            <Route path="/blogList/:id" component={BlogDetails}></Route>
          </Switch>
        </Router>
      </div>
    )
}
