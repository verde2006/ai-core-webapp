import React from "react"
import { LandingPage } from "mvp-webapp"
import hero from "../../images/heros/4.jpg"
import us from "../../images/heros/us.png"
import { css } from "@emotion/core"
/** @jsx jsx */ import { jsx } from '@emotion/core'
import ocado from "../../images/misc/ocado.png"
import icl from "../../images/unis/imperial.jpg"
import yc from "../../images/misc/yc.jpg"
import dli from "../../images/misc/dli.jpg"
import level_of_study from "../../images/misc/1.png"
import discipline from "../../images/misc/2.png"

const heros = [us, us]

const dets = css`
    display: flex;
    flex-direction: column; 
    font-size: 20px; 
    justify-content: space-around;
    min-height: 300px;
    align-items: center;

    .point {
        display: flex;
        align-items: center;
        img {
            height: 50px;
            margin-left: 20px;

        } 
    }
`

var About = (props) => {
    return (
        <LandingPage 
            nav={{
                    links: ['events', 'partnerships', 'about'],
                    to: '/login',
                    actionText: 'Login'
            }}
            heros={heros}
            fold={{
                heading: 'About us',
                subtitle: 'We are extremely proud of the quality, size and diversity of our network.',
                // subtitle: 'In the future, AI will be the core of many companies. Until then, talent is at the core. We are a network that attracts and trains that talent, so that they can build the AI cores of the future.',
                hero,
                belowAction: 'Scroll down to see statistics about the network and details about the founders'
            }}
            sections={[
                <div className="large" css={css`textAlign: left; color: blac;`} >
                    <div css={css`font-size: var(--large)`}>
                        The network 
                    </div>
                    <div css={css`justify-content: center; display: flex; flex-direction: column; align-items: center;`}>
                        We are looking to partner with forward thinking companies that can provide great opportunities to the world's top student AI talent.
                        <br/>
                        <br/>
                    </div>
                    <div css={css`display: flex; justify-content: center; flex-wrap: wrap; > img {height: 400px;} align-items: center`}>
                        <div css={css`display: flex; flex-direction: column; justify-content: space-around; font-size: 30px; font-weight: 1000; height: 200px;`}>
                            <div>
                                4896 members
                            </div>
                            <div>
                                200+ attendees per event 
                            </div>
                        </div>
                        <img src={level_of_study} alt="" />
                        <img src={discipline} alt="" />
                    </div>
                </div>,
                <div className="large" css={css`textAlign: left; color: blac;`} >
                    <div css={css`font-size: var(--large)`}>
                        The founders 
                    </div>
                    <div css={css`justify-content: center; display: flex; flex-direction: column; align-items: center;`}>
                        We wanted to get involved with machine learning at university. There was nothing set up to help us. 
                        We taught ourselves and then started teaching others.
                        <br/>
                        <br/>
                        Soon we were almost the largest society at Imperial.
                        Our events naturally attracted hundreds of students from other top universities and even professionals.
                        At this point we decided that we could cater for and mobilise all student talent, regardless of university.
                        <br/>
                        <br/>
                        So we launched The AI Core.
                    </div>
                    <div css={css`display: flex; justify-content: space-between; flex-wrap: wrap;`}>
                        <div css={dets}>
                            <div css={css`font-size: 40px; font-weight: 1000;`}>
                                Haron Shams
                            </div>
                            <div className="point">
                                Design Engineering @ ICL
                                <img src={icl} alt=''/>
                            </div>
                            <div className="point">
                                Ocado 10X Lab
                                <img src={ocado} alt=''/>
                            </div>
                        </div>
                        <div css={dets}>
                            <div css={css`font-size: 40px; font-weight: 1000;`}>
                                Harry Berg 
                            </div>
                            <div className="point">
                                Mechanical Engineering @ ICL
                                <img src={icl} alt=''/>
                            </div>
                            <div className="point">
                                Y Combinator S19
                                <img src={yc} alt=''/>
                            </div>
                            <div className="point">
                                Instructor for Nvidia's Deep Learning Institute
                                <img src={dli} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>,
            ]}
        />
    )
}

export default About