
import { useState } from "react"
import Imghero from "../../../assets/img/Imghero.jpg"
function HeaderSection({ background }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className={` border-gray-200  bg-transparent ${background}`}>
            <div className="relative z-40 overflow-hidden ">
                <div className="flex flex-wrap z-40 items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="https://flowbite.com" className="flex -mr-14 items-center space-x-3 rtl:space-x-reverse">
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

                <div id="mega-menu" className="items-center m-auto justify-between hidden w-full md:flex md:w-auto md:order-1">
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
            <div className='md:py-40 md:px-12 overflow-auto bg-transparent text-white px-10 py-10'>
            <img src={Imghero} alt="" className="w-[100%] -z-10 blur-sm -top-28 lg:-top-40 xl:-top-[600px] contrast-100 brightness-50 absolute opacity-90 top-0 left-0  "/>
                <h1 className='md:text-[3rem] text-[1.9rem] bg-transparent z-50 text-white'>Autos Nuevos</h1>
                <h3 className='md:text-[2rem] bg-transparent z-40 text-white'>Homepage - Autos Nuevos</h3>
            </div>

            </div>
            
        </nav>
    )
}

export default HeaderSection