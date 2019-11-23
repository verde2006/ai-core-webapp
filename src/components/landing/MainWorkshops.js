import React from "react"
import { css } from "@emotion/core"
import { Button } from "mvp-webapp"
/** @jsx jsx */ import { jsx } from '@emotion/core'

export default (props) => {
    console.log('y')
    return (
    <div className="large" css={css`textAlign: left`} >
            <div css={css`font-size: var(--large)`}>
                Workshops
            </div>
            <div>
                Every Saturday, we host free workshops to train people in both the <strong>theory and code</strong> of topics in artificial intelligence.
            </div>
            <div css={css`font-size: 35px; margin: 20px`}> 
                This week: our Deep Learning course begins!
            </div>
            {/* <Button text='Sign up here' onClick={()=>{window.open('https://www.eventbrite.co.uk/e/neural-networks-1-at-imperial-college-london-tickets-81476587667')}}/> */}
            {/* <br/> */}
            <Button text='See all upcoming workshops' onClick={()=>{window.open('https://www.eventbrite.co.uk/o/the-ai-core-18715367897')}}/>
    </div>
)}