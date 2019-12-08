import React, { Component } from "react"
import { Navbar, Section, TileGrid, panel } from "mvp-webapp"
// import Section from "./Section"
// import "./store.css"
import profile from "../../images/profile.png"
import code from "../../images/code.png"
import company from "../../images/company.png"
import feedback from "../../images/feedback.jpg"
import up from "../../images/misc/upArrow.png"
import { connect } from "react-redux"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import twitter from "../../images/misc/twitter.png"
import whatsapp from "../../images/misc/whatsapp.png"
import linkedin from "../../images/misc/linkedin.png"

class Home extends Component {
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
                to: "/app/training",
                // onClick: ()=>{window.open("https://github.com/AI-Core")},
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
                title: "Feedback and suggestions",
                icon: feedback
            },
            // {
            //     onClick: () => {this.props.openModal(
            //         <div css={css`${panel} img {height: 50px; padding: 20px; cursor: pointer;}`}>
            //             <div className="title">
            //                 Help us grow
            //             </div>
            //             <div>
            //                 The more we grow, the more we can leverage companies. 
            //                 This helps us to provide the training and content for free, fund projects and other stuff for the community.
            //                 <br/>
            //                 <br/>
            //                 If you others deserve to hear about it, and we deserve it, we've made it super easy for you to share with your friends and network!
            //                 <br/>
            //                 <br/>
            //                 Just click an icon below and add a quote to tell people why they should get involved.
            //             </div>
            //             <div>
            //                 <img src={linkedin} alt="LinkedIn" onClick={()=>{window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://www.eventbrite.co.uk/o/the-ai-core-18715367897&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn')}}/>
            //                 <img src={whatsapp} alt="Whatsapp" onClick={()=>{window.open("whatsapp://send?text=The text to share!")}}/>
            //                 <img src={twitter} alt="Twitter" onClick={()=>{window.open('https://twitter.com/intent/tweet?text=These%20workshops%20are%20epic!%20%40theaicore%20pbs.twimg.com/media/EKkmsxqWkAAIano?format=jpg&name=360x360')}} />
            //             </div>
            //         </div>
            //     )},
            //     title: "Help us grow",
            //     icon: up
            // }
        // {/* <HelpUsGrow/> opens modal which prompts them to share my latest linkedin post with link to it */}
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

const mapDispatchToProps = (dispatch) => {return{
    openModal: (content) => {
        dispatch({
            type: "OPEN_MODAL",
            content
        })
    }
}}

export default Home = connect(null, mapDispatchToProps)(Home)