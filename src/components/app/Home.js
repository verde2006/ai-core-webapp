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
                onClick: ()=>{window.open("https://github.com/life-efficient/Academy-of-AI")},
                title: "Code",
                icon: code
            },
            {
                onClick: ()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSc5rHDwlboLfNMjgQDz6MhcNLJEiPu31zWOWK5gd9P54gfJuw/viewform?usp=sf_link")},
                title: "Feedback & suggestions",
                icon: feedback
            },
            // {
            //     to: "/app/challenge",
            //     title: "This week's challenge",
            //     icon: code
            // },
        ]
        return (
            <>
                <TileGrid tiles={sections} />
            </>
        )
    }
}