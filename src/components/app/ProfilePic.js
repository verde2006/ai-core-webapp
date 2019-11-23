import React, {Component} from "react"
import { connect } from "react-redux"
import { css } from "@emotion/core"
import default_dp from "../../images/profile.png"
/** @jsx jsx */ import { jsx } from '@emotion/core'

const style = css`
    .display-pic {
        box-shadow: var(--shadow);
        overflow: hidden;
        max-width: 100%;
    }

    .dp-input {
        cursor: pointer;
    }

    .dp-input :hover {
        opacity: 0.5;
    }

    background-color: var(--color2);
    border: 10px solid var(--color2);
    border-radius: 50vw;
    height: 50vw;
    width: 50vw;
    max-height: 300px;
    max-width: 300px;
    margin: 30px auto;
    overflow: hidden;
`

class PP extends Component {

    render() {
        return (
            <>
            <div >
                <div css={style}>
                    <label for="dp-input" className="dp-input">
                        <input onChange={this.uploadDP} id="dp-input" type="file" style={{display: 'none'}} />
                        <img src={this.props.dp_url ? this.props.dp_url : default_dp} className="display-pic" alt=""/>
                    </label>
                </div>
                {/* <Bio bio={this.props.user.bio}/> */}
                {/* <Stats user={this.props.user}/> */}
                {/* <Style styles={this.props.user}
                //  endpoint='stylist-my-info'
                onChange={(styles) => {
                    this.props.setStylistInfo({styles});
                    makePostRequest('stylist-my-info', {styles}, 
                        () => {console.log('dets updated')}
                    )
                }}
                 /> */}
                {/* <FeatureRequest /> */}
            </div>
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
        // setStylistInfo: (update) => {
        //     makePostRequest('stylist-my-info', update,
        //         () => {
        //             console.log('user updated')
        //         }
        //     )
        //     dispatch({
        //         type: "SET_USER",
        //         update: update
        //     })
        // }
    }
}

export default PP = connect(mapStateToProps, mapDispatchToProps)(PP)