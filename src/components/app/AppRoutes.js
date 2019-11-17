import React from "react"
import { Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import { Navbar } from "mvp-webapp"
import { connect } from "react-redux"

const AppRoutes = (props) => {
    return (
        <>
            <Navbar btn='Menu' action={props.openMenu}/>
            <Route path='/app' exact component={Home}/>
            <Route path="/app/profile" component={Profile} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => dispatch({
            type: 'TOGGLE_MENU'
        })
    }
}

export default connect(null, mapDispatchToProps)(AppRoutes)