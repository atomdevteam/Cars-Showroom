import { useState } from 'react'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/NavBar/NavBar'
import AboutUs from './Components/AboutUs/AboutUs'

function App() {


  return (
    <>
      <Navbar />
      <div className=''>
        <AboutUs/>

      </div>

      <Footer />

    </>
  )
}

export default App
