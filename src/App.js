import React, { Component } from "react";
import "./App.css";
import Amplify from 'aws-amplify';
import { BrowserRouter as Router, Switch, Route, Match } from "react-router-dom"
import LandingIndex from "./components/landing/Index"
import NotFound from "./components/general/NotFound";
import { combineReducers, createStore } from "redux"
import { ProtectedRoute } from "./CustomRoutes"
import { Provider } from "react-redux"
import { Helmet } from 'react-helmet'
import { Modal } from "mvp-webapp"
import Login from "./components/landing/Login"
import logo from "./images/logo.png"
import Home from "./components/app/Home"
import Profile from "./components/app/Profile"
import AppRoutes from "./components/app/AppRoutes";
import SignUp from "./components/landing/SignUp"

//Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: 'eu-west-2:855cf335-a3b7-4b7f-b47d-dc9fd044bd9b',
        
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        //identityPoolRegion: 'eu-west-2',
 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-2_XRYfK4o2B',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '12rljt0gbcrc780r5tdeoctdvk',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true
    },
    Storage: {
        AWSS3: {
            bucket: 'core-data', //REQUIRED -  Amazon S3 bucket
            region: 'eu-west-1', //OPTIONAL -  Amazon service region
        }
    }
});

const slideUp = (state={open: false, content: null}, action) => {
    switch (action.type) {
        case "OPEN_SLIDEUP":
            console.log('opening slideup')
            return {
                open: true,
                content: action.content
            }
        case "CLOSE_SLIDEUP":
            console.log('closing slideup')
            return {
                open: false,
                content: null
            }
        default:
            return state
    }
}

const modal = (state={open: false, content: null}, action) => {
    switch (action.type) {
        case "OPEN_MODAL": 
            console.log('opening modal')
            return {
                open: true,
                content: action.content
            }
        case "CLOSE_MODAL":
            console.log('closing modal')
            return {
                open: false,
                content: null
            }
        default:
            return state
    }
}

const sideNav = (state = {open: false}, action) => {
    switch (action.type) {
        case "TOGGLE_SIDENAV" :
            console.log('toggling sidenav')
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}
const notify = (state={show: false}, action) => {
    switch (action.type) {
        case "NOTIFY":
            console.log('notifying')
            return {
                show: true,
                content: action.content
            }
        case "HIDE_NOTIFY":
            return {
                show: false,
                content: null
            }
        default:
            return state
    }
}

const app = (state={}, action) => {
    return {
        name: 'AI CORE',
        logo
    }
}

const reducer = combineReducers({
    modal,
    slideUp,
    sideNav,
    notify,
    app
})

export const store = createStore(reducer)

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log('rendering app')
        return (
            <Provider store={store}>
                <Router >                   
                    <div className="App">
                        <Helmet>
                            <title>{store.getState().app.name}</title>
                        </Helmet>
                        <Switch>
                            <ProtectedRoute path="/app" component={AppRoutes}/>
                                {/* component={AppContent} 
                                render={()=>(
                                    <>
                                        <Route path="/app" component={Home} />
                                    </>
                                )} */}
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/" component={LandingIndex} />
                            <Route component={NotFound} path=""/> 
                        </Switch>
                        <Modal />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;//withAuthenticator(App);