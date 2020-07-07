import isLoggedInReducer from "./isLoggedReducer"
import usersReducer from "./usersReducer"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    isLogged: isLoggedInReducer,
    users: usersReducer
})

export default allReducers