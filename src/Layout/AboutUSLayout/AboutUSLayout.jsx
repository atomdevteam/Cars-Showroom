import React from "react"
import AboutUs from "../../Components/AboutUs/AboutUs"
import Navbar from "../NavBar/NavBar"

const AboutUSLayout = () => {

    return(
        <div className="bg-black">
            <Navbar />
            <AboutUs />
        </div>
    )
}

export default AboutUSLayout