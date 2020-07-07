import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux"
import allReducers from "./reducers"
import { Provider } from "react-redux"
import fetchUsers from "./actions/getUsers"
// import thunk from "redux-thunk"
// import redux from 'redux'

// const applyMiddleWare = redux.applyMiddleware

const store = createStore(allReducers  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.subscribe(()=>{console.log(store.getState)})
// store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
