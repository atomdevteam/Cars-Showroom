import React from 'react'
import CarDetails from '../../Components/CarDetails/CarDetails'
import EngineDetails from '../../Components/EngineDetails/EngineDetails'
import Dimension from '../../Components/Dimension/Dimension'
import Feature from '../../Components/Feature/Feature'
import Location from '../../Components/Location/Location'
import Price from '../../Components/Price/Price'
import Audiovisual from '../../Components/Audiovisual/Audiovisual'
import Vehiclehistory from '../../Components/Vehiclehistory/Vehiclehistory'
import Navbar from '../NavBar/NavBar'

const CarSaleLayout = () => {
    return (
        <>
            <Navbar background={'dark:bg-[#0B0C10]'}/>
            <div className='bg-[#0B0C10] max-h-full '>
                <div className='h-[10rem] bg-[#12232E] text-white mb-16'>
                    <div className='ml-10 lg:ml-[8rem] flex flex-col'>
                        <h1 className='mt-8 text-4xl'>
                            Vende tu Auto
                        </h1>
                        <div className='mt-4'>
                            Homepage-vender
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-4 lg:ml-[6rem] lg:mr-[6rem] '>
                    <CarDetails />
                    <EngineDetails />
                    <Dimension />
                    <Feature />
                    <Location />
                    <Price />
                    <Audiovisual />
                    <Vehiclehistory />
                </div>
            </div>
        </>

    )
}

export default CarSaleLayout