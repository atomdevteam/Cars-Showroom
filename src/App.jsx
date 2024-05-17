import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import CarSale from './Layout/CarSale/CarSaleLayout'
import BuyCar from './Layout/BuyCarLayout/BuyCarLayout'
import Footer from './Layout/Footer/Footer'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/CarSale' element={<CarSale />} />
          <Route path='/BuyCar' element={<BuyCar />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
