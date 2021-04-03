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
import Logo from "./Assets/logo.png"
const App = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [name, setName] = useState('')
    const [nullUser, setNullUser] = useState(false)

    useEffect(() => {
        if (user) setName(user.name.split(" ")[0])
        else setNullUser(true)
    }, [user])

    const handleLogout = () => {
        localStorage.removeItem('user')
        setNullUser(true)
    }

    return (
        <div>
            <Router>
                <div className="home-nav">
                    <div className="container">
                        <div className="brand">
                            <img src={Logo} style={{ width: '40px' }} alt=""></img>
                            <p>Kisan Foods</p>
                        </div>
                        <ul>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li>
                                {!nullUser ? (
                                    <div className="user-sec">
                                        <div className="username">
                                            Hello {name}!
                  </div>

                                        <button className="logout-btn"
                                            onClick={handleLogout}
                                        >Logout</button>
                                    </div>
                                ) : (
                                    <div className="auth-btns">
                                        <Link to="/login">Login</Link>
                                        <p>or</p>
                                        <Link to="/register">Register</Link>
                                    </div>
                                )}
                            </li>
                        </ul>

                    </div>

                </div>
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
