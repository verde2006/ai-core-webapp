import React, { Component } from "react"
import { Navbar, Section, TileGrid } from "mvp-webapp"
// import Section from "./Section"
// import "./store.css"
import code from "../../images/code.png"
import profile from "../../images/profile.png"
import feedback from "../../images/feedback.jpg"

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        window.analytics.page('home')
    }

    render() {
        var sections = [
            {
                to: "/app/profile",
                title: "Profile",
                icon: profile
            },
            {
                to: "/app/timeline",
                title: "Code",
                icon: code
            },
            {
                to: "/app/give_code",
                title: "Feedback",
                icon: feedback
            },
            {
                to: "/app/challenge",
                title: "This week's challenge",
                icon: code
            },
        ]
        return (
            <>
                <Navbar />
                <div className="panel-title">Home</div>
                <TileGrid tiles={sections} />
            </>
        )
    }
}