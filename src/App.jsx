import { useState } from 'react'

import Navbar from './Layout/NavBar/NavBar'
import Recomendado from './Components/Recomendado/Recomendado'
import Hero from './Components/Hero/Hero'
import ComprarAutos from './Components/ComparaAutos/CompararAutos'
import Noticias from './Components/Noticias/Noticias'
import Nosotros from './Components/Nosotros/Nosotros'
import Servicios from './Components/Servicios/Servicios'
import Testimonio from './Components/Testimono/Testimonio'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Layout/Footer/Footer'

// import Nosotros from './components/Cars/Nosotros'
// import Servicios from './components/Cars/Servicio'
// import Testimonio from './components/Cars/Testimonio'
// import Contacto from './components/Cars/Contacto'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Recomendado/>
    <ComprarAutos/>
    <Noticias/>
    <Nosotros/>
    <Servicios/>
    <Testimonio/>
    <Contacto/>
    <Footer/>

    </>
  )
}

export default App
