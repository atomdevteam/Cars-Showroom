import { useState } from 'react'
import Footer from './Layout/Footer/Footer'
import LogIn from './Components/LogIn'
import Navbar from './Layout/NavBar/NavBar'

function App() {


  return (
    <>
    <Navbar/>
    <div className="">
      <LogIn/>

    </div>
      <Footer/>

    </>
  )
}

export default App
