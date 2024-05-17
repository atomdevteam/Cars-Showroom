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
const MainScreen = () => {

    return (
        <div className="bg-black">
            <Navbar background={'dark:bg-[#12232E]'} />
            <Hero />
            <Recomendado />
            <ComprarAutos />
            <Noticias />
            <Nosotros />
            <Servicios />
            <Testimonio />
            <Contacto />
            {/* <Footer /> */}
        </div>
    )
}

export default MainScreen