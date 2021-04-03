import React, { useState, useEffect } from 'react'
import "./App.css"
import Statistics from './Pages/Stats/Statistics'
import Profile from './Pages/Profile/Profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Home from './Pages/Home/Home'
import UserProfile from './Pages/Profile/UserProfile'
import Payment from './Pages/Payment/Payment'

const App = () => {

    return (
        <div>
            <Router>
                
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/userprofile" exact component={UserProfile}></Route>
                    <Route path="/" exact component={Home}></Route>

                    <Route exact path="/dashboard" component={Statistics} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/payment" component={Payment} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
