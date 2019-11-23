import React from "react"
import MainWorkshops from "./MainWorkshops"
import { LandingSection, LandingPage, Navbar } from "mvp-webapp"

export default (props) => {
    return( 
    <>
    <Navbar btn="login" to="/login"/>
    <LandingSection inner={<MainWorkshops/>}
    />
    </>
)}