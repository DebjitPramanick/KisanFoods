import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import "./App.css"
<<<<<<< HEAD
import Profile from './Pages/Profile'
import SideDrawer from './Pages/SideDrawer'
import Statistics from './Pages/Statistics'

const App = () => {
    return (
        <>
        <BrowserRouter>
        {/* <Statistics /> */}
            <Switch>
                <Route exact path="/" component={Statistics} />
                <Route path="/profile" component={Profile} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
        </>
=======
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Home from './Pages/Home/Home'
const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/register" exact component={Register}></Route>

                    <Route path="/dashboard" exact></Route>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        </div>
>>>>>>> bdafb823d8dc5dc7a0eef02df45e4cec56fb5e0e
    )
}

export default App
