import React from "react"
import { Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

export default () => {
    return (
        <>
            <Route path='/app' component={Home}/>
            <Route path="/app/profile" component={Profile} />
        </>
    )
}