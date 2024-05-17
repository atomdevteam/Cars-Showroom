import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import CarSale from './Layout/CarSale/CarSaleLayout'
import BuyCar from './Layout/BuyCarLayout/BuyCarLayout'
import ProductTeslaModel from './Layout/ProductTeslaLayout/ProductTeslaLayout'
import ContactUS from './Layout/ContactLayout/ContactLayout'
import CarInspection from './Layout/CarinspectionLayout/CarinspectionLayout'
import UserCar from './Layout/UsedCars/UsedCars'
import NewCar from './Layout/NewCars/NewCars'
import MainScreen from './Layout/MainScreen/MainScreen'
import SearchResultOne from './Layout/SearchResultOne/SearchResultOne'
import Footer from './Layout/Footer/Footer'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/CarSale' element={<CarSale />} />
          <Route path='/BuyCar' element={<BuyCar />} />
          <Route path='/ProductTeslaModel' element={<ProductTeslaModel />} />
          <Route path='/ContactUS' element={<ContactUS />} />
          <Route path='/CarInspection' element={<CarInspection />} />
          <Route path='/UserCar' element={<UserCar />} />
          <Route path='/NewCar' element={<NewCar />} />
          <Route path='/SearchResultOne' element={<SearchResultOne />} />
        </Routes>
      </Router>
      <Footer />
    </>

  )
}

export default App
