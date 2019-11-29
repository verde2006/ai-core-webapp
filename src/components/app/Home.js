import React, { Component } from "react"
import { Navbar, Section, TileGrid } from "mvp-webapp"
// import Section from "./Section"
// import "./store.css"
import profile from "../../images/profile.png"
import code from "../../images/code.png"
import company from "../../images/company.png"
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
                onClick: ()=>{window.open("https://github.com/AI-Core")},
                title: "Code",
                icon: code
            },
            {
                to: '/app/companies',
                title: "Rate companies",
                icon: company
            },
            {
                onClick: ()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSdZSxvkAE19vjDN4jpp0VvUBPGr_wdtayGAcRNfFGH7e7jQDQ/viewform?usp=sf_link")},
                title: "Workshop feedback",
                icon: feedback
            },
        {/* <HelpUsGrow/> opens modal which prompts them to share my latest linkedin post with link to it */}
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