import React, { Component } from "react"
import Navbar from "mvp-webapp"
import uuid from "uuid"
import { connect } from "react-redux"
import default_dp from "../../images/profile.png"
import { makePostRequest } from "../../api_calls"
import { Storage } from "aws-amplify"
import Bio from "./Bio"
import { css } from "@emotion/core"
import ProfilePic from "./ProfilePic"
import Options from "./Options"

class Profile extends Component{
    render() {
    return (
        <>
        <ProfilePic />
        <Bio bio={this.props.user.bio}/>
        <Options 
            options={this.props.user.interests}
            allOptions={['Computer vision', 'NLP', 'RL', 'Startups', 'Consulting', 'Hardware', 'Design', 'Sales', 'Writing']}
            title='Your interests'
            onChange={(interests) => {
                console.log('updating with:', interests)
                this.props.setUserInfo({interests});
            }}
        />
        <Options 
            options={this.props.user.skills}
            allOptions={['computer vision', 'NLP', 'RL']}
            title='Your skills'
            onChange={(skills) => {
                console.log('updating with:', skills)
                this.props.setUserInfo({skills});
            }}
        />
        {/* <Interests /> */}
        {/* <Stats user={this.props.user}/>
        <FeatureRequest /> */}
        </>
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