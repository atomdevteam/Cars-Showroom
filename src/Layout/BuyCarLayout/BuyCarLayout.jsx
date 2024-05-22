import React from 'react'
import Generalinformation from '../../Components/Generalinformation/Generalinformation'
import EnginedetailsInfo from '../../Components/EnginedetailsInfo/EnginedetailsInfo'
import CharacteristicsCar from '../../Components/CharacteristicsCar/CharacteristicsCar'
import Dimensiondetails from '../../Components/Dimensiondetails/Dimensiondetails'
import ListAudioVisual from '../../Components/ListAudioVisual/ListAudioVisual'
import HistoryCar from '../../Components/HistoryCar/HistoryCar'
import CarCompra from '../../Components/CarCompra/CarCompra'
import Navbar from '../NavBar/NavBar'
import { useContextCar } from '../../Context/Context'


const BuyCarLayout = () => {
    const {ListCar} = useContextCar()
    return (
        <>
        <Navbar background={'dark:bg-[#0B0C10]'}/>
            <div className='bg-[#0B0C10] max-h-full '>
                <div className='h-[10rem] bg-[#0B0C10] text-white mb-16'>
                    <div className='ml-10 lg:ml-[8rem] flex flex-col'>
                        <h1 className='mt-8 text-4xl'>
                            Comprar coche
                        </h1>
                        <div className='mt-4'>
                            Homepage-comprar
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-4 lg:ml-[6rem] lg:mr-[6rem] '>
                    <CarCompra />
                    <Generalinformation />
                    <EnginedetailsInfo />
                    <Dimensiondetails />
                    <CharacteristicsCar />
                    <ListAudioVisual />
                    <HistoryCar />
                </div>
            </div>
        </>
    )
}

export default BuyCarLayout