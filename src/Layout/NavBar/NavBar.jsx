import React, { useState } from 'react';
const Navbar = ({background}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <nav className={`bg-[#12232E]  border-gray-200 ${background}`}>
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co/xXWCwHF/logo.png" className="h-12" alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cars  Showroom</span>
                </a>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <a href="#/LogIn" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden md:inline">Sign in</a>
                    {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a> */}
                    <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li>
                            <a href="#/" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="#/NewCar" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Carros nuevos</a>
                        </li>
                        <li>
                            <a href="#/UserCar" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Carros usados</a>
                        </li>
                        <li>
                            <a href="#/CarSale" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">vender</a>
                        </li>
                    
                        <li>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Más <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div id="mega-menu-dropdown" className="absolute z-10 grid  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                        <li>
                                                <a href="#/BuyCar" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Compara coches
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#/Noticias" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Noticias
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#/CarInspection" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Revisión de coches
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#/AboutUS" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Nosotros</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            )}

                        </li>

                    </ul>


                </div>

            </div>
        </nav>

    );
};

export default Navbar;