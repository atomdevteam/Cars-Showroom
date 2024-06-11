import React from "react"
import Navbar from "../NavBar/NavBar"
import Hero from '../../Components/Hero/Hero'
import Recomendado from "../../Components/Recomendado/Recomendado"
import Testimonio from '../../Components/Testimono/Testimonio'
import Contacto from '../../Components/Contacto/Contacto'
const MainScreen = () => {

    return (
        <div className="bg-black">
            <Navbar background={'dark:bg-[#12232E]'} />
            <Hero />
            <Recomendado/>
        
            <Testimonio />
            <Contacto />

        </div>
    )
}

export default MainScreen