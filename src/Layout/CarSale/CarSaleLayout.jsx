import React, { useState } from 'react'
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
const CarSaleLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        
        <>
            <nav  className={` bg-transparentrelative overflow-hidden border-gray-200 `}>
            <img   src={Heroimgthree} alt="Hero Image" className=' brightness-50 -z-10 contrast-100  absolute -top-[10rem] md:-top-[4rem] xl:-top-[100px] xl:w-full xl:h-full lg:object-cover lg:-top-[0px] w-full h-full object-cover ' />
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 z-50">
                <a href="https://flowbite.com" className="flex -mr-14 items-center space-x-3 rtl:space-x-reverse z-50">
                    <img src="https://i.ibb.co/xXWCwHF/logo.png" className="h-12" alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:inline">Cars Showroom</span>
                </a>

                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div id="mega-menu" className="items-center m-auto justify-between hidden w-full md:flex md:w-auto md:order-1 z-50">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a href="#/" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="#/NewCar" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Autos</a>
                        </li>
                        <li>
                            <a href="#/UserCar" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#/CarSale" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contáctanos</a>
                        </li>
                        

                    </ul>
                </div>

            </div>
            <div className='md:py-28 md:px-12  text-left z-50 bg-transparent text-white px-1 m-16 py-20'>
                <h1 className='md:text-[3rem] text-[1.9rem] bg-transparent z-10'>Vender Coche</h1>
                <h3 className='md:text-[2rem] bg-transparent'>Homepage - Vender Coche</h3>
            </div>
        </nav>
           
            <div className='flex bg-black flex-col px-6'>
                    <  CarDetails />
                    <EngineDetails />
                    <Dimension />
                    <Feature />
                    <Location />
                    <Price />
                    <Audiovisual />
                    <Vehiclehistory />
                    <SaleButton/>
                </div>
        </>

    )
}

export default CarSaleLayout