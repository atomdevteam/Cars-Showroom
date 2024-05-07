import { useState } from 'react'
import SignIn from './Component/SingIn'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/NavBar/NavBar'

function App() {


  return (
    <>
      <div className=''>
        <Navbar/>
        <SignIn />
      </div>
      <Footer/>


    </>
  )
}

export default App
