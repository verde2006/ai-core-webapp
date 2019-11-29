import React, { Component } from "react"
import Navbar from "mvp-webapp"
import uuid from "uuid"
import { connect } from "react-redux"
import default_dp from "../../images/profile.png"
import { makePostRequest } from "../../api_calls"
import { Storage } from "aws-amplify"
import Bio from "./Bio"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import ProfilePic from "./ProfilePic"
import Options from "./Options"
import About from "./About"
import Skills from "./Skills"

class Profile extends Component{
    render() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'colum', justifyContent: 'left', flexFlow: 'column wra'}}>
        <div css={css`margin: 20px`}>
            <ProfilePic />
            <Bio bio={this.props.user.bio}/>
        </div>
        <About />
        <Options 
            options={this.props.user.interests}
            allOptions={['Computer vision', 'NLP', 'RL', 'Startups', 'Consulting', 'Hardware', 'Design', 'Sales', 'Writing']}
            title='Your interests'
            onChange={(interests) => {
                console.log('updating with:', interests)
                this.props.setUserInfo({interests});
            }}
        />
        <Skills />
        {/* <Options 
            options={this.props.user.skills}
            allOptions={['computer vision', 'NLP', 'RL']}
            title='Your skills'
            onChange={(skills) => {
                console.log('updating with:', skills)
                this.props.setUserInfo({skills});
            }}
        /> */}
        {/* <Interests /> */}
        {/* <Stats user={this.props.user}/>
        <FeatureRequest /> */}
        </div>
        )
    }   
}

const mapStateToProps = (state) => {
    // console.log(state.user)
    return {
        dp_url: state.user.display_pic,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (update) => {
            makePostRequest('app/user/update-info', update,
                () => {
                    console.log('user updated')
                }
            )
            console.log('update:', update)
            dispatch({
                type: "SET_USER",
                update
            })
        }
    }
}

export default Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)