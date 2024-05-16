import { useState } from 'react'
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import MainScreen from './Layout/Screens/MainScreen/MainScreen'
import UserCar from './Layout/Screens/UserCar/UserCar'
import NewCar from './Layout/Screens/NewCar/NewCar'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/CarrosUsados" element={<UserCar />} />
          <Route path="/CarrosNuevo" element={<NewCar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
