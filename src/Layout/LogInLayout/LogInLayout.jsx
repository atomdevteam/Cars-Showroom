import React from "react"
import Navbar from "../NavBar/NavBar"
import LogIn from "../../Components/LogIn/LogIn"
const LogInLayout = () => {

    return (
        <div>
            <Navbar background={'dark:bg-[#12232E]'}/>
            <LogIn />
        </div>
    )
}

export default LogInLayout