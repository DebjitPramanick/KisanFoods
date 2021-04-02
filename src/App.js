import React from 'react'
import "./App.css"
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
    )
}

export default App
