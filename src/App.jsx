import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import CarSale from './Layout/CarSale/CarSaleLayout'
import BuyCar from './Layout/BuyCarLayout/BuyCarLayout'
import ProductTeslaModel from './Layout/ProductTeslaLayout/ProductTeslaLayout'
import ContactUS from './Layout/ContactLayout/ContactLayout'
import Footer from './Layout/Footer/Footer'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/CarSale' element={<CarSale />} />
          <Route path='/BuyCar' element={<BuyCar />} />
          <Route path='/ProductTeslaModel' element={<ProductTeslaModel />} />
          <Route path='/' element={<ContactUS />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
