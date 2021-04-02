import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import "./App.css"
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
    )
}

export default App
