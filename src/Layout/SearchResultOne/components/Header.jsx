import React from 'react'
import {useState} from "react"
function Header({background}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={`bg-[#12232E] border-gray-200 ${background}`}>
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
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
                    <a href="#" className="block py-2 px-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>

                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Autos</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contáctanos</a>
                </li>
            </ul>
        </div>

    </div>
    <div className='md:py-28 md:px-12 bg-transparent text-white px-10 py-10'>
          <h1 className='md:text-[3rem] text-[1.9rem] bg-transparent'>Resultados de Búsqueda</h1>
          <h3 className='md:text-[2rem] bg-transparent'>Homepage - Resultados de Búsqueda</h3>
    </div>
</nav>
  )
}

export default Header