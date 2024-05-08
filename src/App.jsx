import { useState } from 'react'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/NavBar/NavBar'
import ProductDetails from './Components/ProductDetails/ProductDetalle/ProductoDetalle'

function App() {


  return (
    <>
    <div className=''>
      <Navbar/>

      <ProductDetails/>

    </div>

    <Footer/>
    </>
  )
}

export default App
