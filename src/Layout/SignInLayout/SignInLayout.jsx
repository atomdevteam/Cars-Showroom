import React from "react"
import Navbar from "../NavBar/NavBar"
import SingIn from '../../Component/SingIn'
const SignInLayout = () => {

    return (
        <div>
            <Navbar background={'dark:bg-[#12232E]'}/>
            <SingIn />
        </div>
    )
}

export default SignInLayout