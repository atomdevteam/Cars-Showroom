import { useState } from 'react'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/NavBar/NavBar'
import News from './Components/News/New'

function App() {


  return (
    <>
    <div className=''>
      <Navbar/>

      <News/>
    </div>

    <Footer/>
    </>
  )
}

export default App
