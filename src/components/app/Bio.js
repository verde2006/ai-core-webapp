import React, { Component } from "react"
import edit from "../../images/edit.svg"
import save from "../../images/save.png"
import { makePostRequest } from "../../api_calls";
/** @jsx jsx */ import { jsx } from '@emotion/core'
import { css } from "@emotion/core"
import { panel } from "mvp-webapp"

const style = css`
    background: linear-gradient(var(--color2), var(--color2g));
    ${panel}

    > img {
        position: absolute;
        height: 25px;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }

    .title {
        font-size: 24px;
        font-weight: 1000;
        float: left;
    }

    textarea {
        background-color: transparent;
        width: 90%;
        height: 100px;
        border: 2px solid black;
        border-radius: var(--radius);
    }    
`

class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            bio: ''
        }
    }

    componentDidUpdate = () => {
        console.log(this.props.bio)
        console.log(this.state.bio)
        if (this.props.bio && this.state.bio != this.props.bio) {      // if style props passed and state is not equal
            this.setState({bio: this.props.bio})                          // equate the bio
        }
    }

    onBioChange = (e) => {
        this.setState({bio: e.target.value})
    }

    onBioSave = () => {
        this.setState({editing: false})
        makePostRequest('my-info', {bio: this.state.bio},
            () => {console.log('bio saved')}
        )
    }

    render() {
        return (
            <div css={style}>
                <div className="title">
                    Bio
                </div>
                {
                    this.state.editing ?
                    <>
                        <img onClick={this.onBioSave} src={save} />
                        <textarea className="text-response" value={this.state.bio} onChange={this.onBioChange}>
                        </textarea>
                    </>
                    :
                    <>
                    <img onClick={() => {this.setState({editing: true})}} src={edit} />
                    <div style={{position: 'relative'}}>
                        {
                            this.state.bio != '' ?
                            this.state.bio
                            :
                            'I love ML so much'
                        }
                    </div>
                    </>
                }
            </div>
        )
    }
}

export default Bio