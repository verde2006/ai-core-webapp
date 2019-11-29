import React, {Component} from "react"
import { connect } from "react-redux"
import { css } from "@emotion/core"
import default_dp from "../../images/profile.png"
/** @jsx jsx */ import { jsx } from '@emotion/core'
import uuid from "uuid"
import { Storage } from "aws-amplify"

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

    uploadDP = (e) => {
        console.log('updating DP')
        console.log(e.target.id)
                console.log('uploading')
        return new Promise(
            (resolve, reject) => {
                var type
                var url
                var fp
                var file = e.target.files[0]
                type = file.type.split('/')[1]
                fp = `users/${uuid.v4()}.${type}`
                var mimeType 
                if (type == 'png') {
                    mimeType = 'image/png'
                }
                else if (type == 'jpg' || type == 'jpeg') {
                    mimeType = 'image/jpeg'
                }
                else {
                    alert('image type invalid (use .PNG, .JPG or .JPEG images)\nYou used type ' + type)
                    return null
                }
                console.log('puttin')
                Storage.put(fp, file, {contentType: mimeType})
                .then(
                    () => {
                        url =`https://s3-eu-west-1.amazonaws.com/theaicore-data/public/${fp}`
                        this.props.set_dp({display_pic: url})
                    }
                )
                .catch((err) => {alert('ERROR:', err)})
                //.catch(reject(Error('The following file failed to upload:', files[i])))
                }
        )
    }

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
        set_dp: (update) => {
            dispatch({
                type: "SET_USER",
                update
            })
        }
    }
}

export default PP = connect(mapStateToProps, mapDispatchToProps)(PP)