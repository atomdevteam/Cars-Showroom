import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import CarSale from './Layout/CarSale/CarSaleLayout'
function App() {


  return (
    <>
      <Router>
        <Routes> 
          <Route path='/CarSale' element={<CarSale />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
