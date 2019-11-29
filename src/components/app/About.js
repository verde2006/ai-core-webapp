import React, { Component } from "react"
import { connect } from "react-redux"
import { Form } from "mvp-webapp"
import { makePostRequest } from "../../api_calls"

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onSave = (e) => {
    }

    render() {
        var about = this.props.about
        console.log('ABOUT:', about)
        return (
            <Form 
                // redirect='/app/profile'
                stay={true}
                slides={[{
                    title: 'About',
                    onSubmit: (about) => {
                        makePostRequest('app/user/update-info', {about})
                        this.props.update({about})
                    },
                    questions: [
                        {
                            title: 'Name',
                            type: 'text',
                            id: 'name',
                            default: about.name
                        },
                        {
                            title: 'Age',
                            type: 'text',
                            id: 'age',
                            default: about.age
                        },
                        {
                            title: 'Course',
                            type: 'text',
                            id: 'course',
                            default: about.course
                        },
                        {
                            title: 'Ethnicity',
                            type: 'text',
                            id: 'ethnicity',
                            default: about.ethnicity
                        },
                        {
                            title: 'Gender',
                            type: 'text',
                            id: 'gender',
                            default: about.gender
                        },
                        {
                            title: 'Year of study',
                            type: 'text',
                            id: 'year_of_study',
                            default: about.year_of_study
                        },
                    ]
                }]}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        about: state.user.about
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (update) => {
            dispatch({
                type: 'SET_USER',
                update
            })
        }
    }
}

export default About = connect(mapStateToProps, mapDispatchToProps)(About)