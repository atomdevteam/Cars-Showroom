import React, { useState, useEffect } from 'react'
import CarDetails from '../../Components/CarDetails/CarDetails'
import EngineDetails from '../../Components/EngineDetails/EngineDetails'
import Dimension from '../../Components/Dimension/Dimension'
import Feature from '../../Components/Feature/Feature'
import Location from '../../Components/Location/Location'
import Price from '../../Components/Price/Price'
import Audiovisual from '../../Components/Audiovisual/Audiovisual'
import Vehiclehistory from '../../Components/Vehiclehistory/Vehiclehistory'
import Navbar from '../NavBar/NavBar'
import Heroimgthree from '../../assets/img/Heroimgthree.jpg'
import aos from "aos"
import SaleButton from '../../Components/SaleButton/SaleButton'
import UpImagine from '../../Components/UpImagine/UpImagine'

const CarSaleLayout = () => {
   
    return (

        <>
           
            <div className='flex bg-black flex-col px-6 '>
                <Navbar />
                < CarDetails />
                <EngineDetails />
                <Dimension />
                <Feature />
                <UpImagine/>
             
                <Price />
                {/* <Audiovisual /> */}
                {/* <Vehiclehistory /> */}
                <SaleButton />
            </div>
        </>

    )
}

export default CarSaleLayout


