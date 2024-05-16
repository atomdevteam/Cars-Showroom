import React from 'react'
import Navbar from '../../NavBar/NavBar'
import Hero from '../../../Components/Hero/Hero'
import Recomendado from '../../../Components/Recomendado/Recomendado'
import ComprarAutos from '../../../Components/ComparaAutos/CompararAutos'

const MainScreen = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Recomendado />
            <ComprarAutos />
            <Noticias />
            <Nosotros />
            <Servicios />
            <Testimonio />
            <Contacto />
            <Footer />
        </div>
    )
}

export default MainScreen