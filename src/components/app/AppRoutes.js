import React from "react"
import { Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import { Navbar } from "mvp-webapp"
import { connect } from "react-redux"
import Companies from "./Companies"
import Training, { TrainingRoutes } from "./Training"

const AppRoutes = (props) => {
    return (
        <>
            <Navbar btn='Menu' action={props.openMenu} home='/app'/>
            <Route path='/app' exact component={Home}/>
            <Route path="/app/training" component={TrainingRoutes} />
            <Route path="/app/training" exact component={Training} />
            <Route path="/app/profile" component={Profile} />
            <Route path="/app/companies" component={Companies} />
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