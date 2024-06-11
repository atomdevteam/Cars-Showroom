import React from "react"
import Navbar from "../NavBar/NavBar"
import Hero from '../../Components/Hero/Hero'
import Recomendado from '../../Components/Recomendado/Recomendado'
import ComprarAutos from '../../Components/ComparaAutos/CompararAutos'
import Noticias from '../../Components/Noticias/Noticias'
import Nosotros from '../../Components/Nosotros/Nosotros'
import Servicios from '../../Components/Servicios/Servicios'
import Testimonio from '../../Components/Testimono/Testimonio'
import Contacto from '../../Components/Contacto/Contacto'
import Compañias from "../../Components/Compañias/Compañias"
const MainScreen = () => {

    return (
        <div className="bg-black">
            <Navbar background={'dark:bg-[#12232E]'} />
            <Hero />
            <Recomendado />
            <Testimonio />
            <Contacto />
        </div>
    )
}

export default MainScreen