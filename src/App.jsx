import { useState, useEffect } from 'react'
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
import FrequentQuestions from './Layout/FrequentQuestions/FrequentQuestions'
import SingIn from './Layout/SignInLayout/SignInLayout'
import LogInLayout from './Layout/LogInLayout/LogInLayout'
import ProductFord from './Layout/ProductFord/ProductFord'
import AboutUSLayout from './Layout/AboutUSLayout/AboutUSLayout'
import Footer from './Layout/Footer/Footer'
import { useContextCar } from './Context/Context'
import SignInLayout from './Layout/SignInLayout/SignInLayout'
import FormularioReserva from './Components/FormularioReserva/FormularioReserva'

function App() {
  const { user, WhichRole } = useContextCar()

  // const [isOpenEditImg, setisOpenEditImg] = useState(false)

  const commonRoutes = [
    { path: '/', element: <MainScreen /> },
    { path: '/CarSale', element: <CarSale /> },
    { path: '/BuyCar', element: <BuyCar /> },
    { path: '/ProductTeslaModel', element: <ProductTeslaModel /> },
    { path: '/ContactUS', element: <ContactUS /> },
    { path: '/CarInspection', element: <CarInspection /> },
    { path: '/UserCar', element: <UserCar /> },
    { path: '/NewCar', element: <NewCar /> },
    { path: '/SearchResultOne', element: <SearchResultOne /> },
    { path: '/DetailsAutos', element: <DetailsAutos /> },
    { path: '/Noticias', element: <NewLayout /> },
    { path: '/ProductLorem', element: <ProductLorem /> },
    { path: '/FrequentQuestions', element: <FrequentQuestions /> },
    { path: '/ProductFord', element: <ProductFord /> },
    { path: '/AboutUS', element: <AboutUSLayout /> },
    { path: '/FormularioReserva', element: <FormularioReserva /> }

  ];

  const AdminRoutes = [
    { path: '/', element: <MainScreen /> },
    { path: '/CarSale', element: <CarSale /> },
    { path: '/BuyCar', element: <BuyCar /> },
    { path: '/ProductTeslaModel', element: <ProductTeslaModel /> },
    { path: '/ContactUS', element: <ContactUS /> },
    { path: '/CarInspection', element: <CarInspection /> },
    { path: '/UserCar', element: <UserCar /> },
    { path: '/NewCar', element: <NewCar /> },
    { path: '/SearchResultOne', element: <SearchResultOne /> },
    { path: '/DetailsAutos', element: <DetailsAutos /> },
    { path: '/Noticias', element: <NewLayout /> },
    { path: '/ProductLorem', element: <ProductLorem /> },
    { path: '/FrequentQuestions', element: <FrequentQuestions /> },
    { path: '/ProductFord', element: <ProductFord /> },
    { path: '/AboutUS', element: <AboutUSLayout /> },
    { path: '/FormularioReserva', element: <FormularioReserva /> },
    { path: '/LognIn', element: <LogInLayout /> },
    { path: '/SignIn', element: <SignInLayout /> }

  ];


  const routes = [...commonRoutes, ...AdminRoutes.map(route => ({ ...route, path: `/admin${route.path}`}))];

  console.log(routes)


  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </>

  )
}

export default App
