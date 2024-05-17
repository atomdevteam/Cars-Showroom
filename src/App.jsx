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
import DetailsAutos from './Layout/DetailsAutos/DetailsAuto'
import NewLayout from './Layout/News/NewsLayout'
import ProductLorem from './Layout/ProductLorem/ProductLorem'
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
          <Route path='/Noticias' element={<NewLayout />} />
          <Route path='/DetailsAutos' element={<DetailsAutos />} />
          <Route path='/ProductLorem' element={<ProductLorem />} />
        </Routes>
      </Router>
      <Footer />
    </>

  )
}

export default App
