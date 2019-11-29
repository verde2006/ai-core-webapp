import React, { Component } from "react"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import { connect } from "react-redux"
import { makePostRequest } from "../../api_calls"
import { panel, Button } from "mvp-webapp"
import { importAll } from "../../utils"

const badges = importAll(require.context('../../images/badges'))

class _Skills extends Component {
    render() {
        console.log('SKILLS:', this.props.skills)
        return (
            <div css={style}>
                <div css={css`font-size: 30px; margin-bottom: 20px; font-weight: 900;`}>Your skills</div>
                <div className="" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {this.props.skills.map((s) => {return(
                        <div>
                            <img src={s.badge} alt={`${s.name} badge`} />
                            <div>
                                {s.name}
                            </div>
                        </div>
                    )})}
                </div>
                <Button text='Add skill badges' onClick={()=>{this.props.openModal(
                    <SelectSkills />
                )}}/>
            </div>
        )
    }
}

const _SelectSkills = (props) => {return (
    <>
    <div css={css`${panel} ${selectStyle}`}>
        <div css={css`font-size: 30px; margin-bottom: 20px; font-weight: 900;`}>
            Add skill badges to your profile 
        </div>
        <div className="badges">
            {skills.map((s)=>{return (
                <div css={css`opacity: ${props.skills.includes(s) ? 1 : 0.6}`}>
                    <img src={s.badge} alt={`${s.name} badge`} />
                    <div>{s.name}</div>
                </div>
            )})}
        </div>
    </div>
    </>
)}

const mapStateToProps = (state) => {return {
    skills: state.user.skills
}}
const mapDispatchToProps = (dispatch) => {return {
    openModal: (content) => {
        dispatch({
            type: "OPEN_MODAL",
            content
        })
    }
}}

export default connect(mapStateToProps, mapDispatchToProps)(_Skills)
const SelectSkills = connect(mapStateToProps, mapDispatchToProps)(_SelectSkills)

const skills = [
    {
        name: 'Neural Networks',
        badge: badges['nns.jpg']
    },
    {
        name: 'Classification',
        badge: badges['classification.jpg']
    },
    {
        name: 'Convolutional Neural Networks',
        badge: badges['cnns.jpg']
    },
    {
        name: 'Activation functions',
        badge: badges['activation.jpg']
    },
    {
        name: 'Gradient based optimisation',
        badge: badges['grad-optim.jpg']
    },
    {
        name: 'Grid Search',
        badge: badges['grid-search.jpg']
    },
    {
        name: 'Multivariate regression',
        badge: badges['multi-reg.jpg']
    },
    {
        name: 'Python',
        badge: badges['python.jpg']
    },
    {
        name: 'PyTorch',
        badge: badges['pytorch.jpg']
    },
    {
        name: 'Raspberry Pi',
        badge: badges['raspberry-pi.jpg']
    },
    {
        name: 'Regression',
        badge: badges['reg.jpg']
    },
    // {
    //     name: '',
    //     badge: badges['.jpg']
    // },
]

const style = css`
    ${panel}

    .searchbar > input{
        border-radius:50px;
        box-shadow: var(--shadow);
        font-size: 30px;
        text-align: center;
        font-family: var(--font3);
        border: none;
        max-width: 85%;

        margin-right: 10px;
    }

    .searchbar-container {
        background-color: var(--nude);
        max-width: 80vw;
        margin: auto;
        border-radius: var(--border-radius);
        position: relative;
        transition: height 0.8s;
    }

    .searchbar {
        padding: 20px;
        height: 50px;
        display: flex;
        justify-content: center;
    }

    .searchbar > button {
        padding: 1px;
        height: 50px !important;
        width: 60px !important;
        border-radius: 50px;
    }

    .btn {
        transition: all 0.5s;
        box-shadow: var(--shadow-depth) var(--shadow-depth);
        border: solid 3px rgba(1, 1, 1, 1);
        border-radius: 7px;
        // width: 20vw;
        // min-width: 200px;
        // max-width: 500px;
        margin: 5px;
        font-family: var(--title-font);
        padding: 10px;
        cursor: pointer;
        background-color: transparent;
        background-size: 100vw var(--navbar-height);
        overflow: hidden;
        color: black !important;
    }

    .btn:active .btn:hover {
        animation-name: button_press;
        animation-duration: 1s;
    }

    @keyframes button_press {
        50% {
            transform: translateX(5px) translateY(5px);
            box-shadow: 0px 0px black;
        }
        100% {
            box-shadow: 6px 6px black;
        }
    }

    .radio_btn {
        display: none;
    } 

    .add-option {
       min-width: 80px;
    }
`
const selectStyle = css`
    width: 90vw; 
    max-width: 90vw;

    .badges {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;

        > div {
            width: 100px;
            height: 100px;
            display: flex;
            padding: 30px;
            flex-direction: column;

            img {
                max-height: 80%;
                // max-width: 100%;
            }

            div {
                font-size: 15px;
            }
        }
    }
`