import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useContextCar } from '../../Context/Context';
const Generalinformation = () => {
    const[open, setOpen]= useState (false)
    const Abre =()=>{
        setOpen(!open)
    }
    return (
        <div data-aos="zoom-in-down" className='bg-[#071620] z-50  text-white mb-8 rounded-xl '>
            <div className='ml-8 mr-8  mt-8 '>
                <div className="flex justify-center items-center cursor-pointer" onClick={Abre}>
                    <div className="text-center flex-grow">
                        <h3 className="text-2xl">Información General</h3>
                    </div>
                    <div>
                        <IoIosArrowUp size={25} className={`${open ? "rotate-180" : ""}`}/>
                    </div>
                </div>


                <div className='border border-t-1 border-gray-600 mt-3'></div>
                <div className='mt-8 '>
                    {open ? 
                    <form className='max-w-full'>

                        <div className=''>
                            <div className="grid  mb-6 lg:grid-cols-1">
                                <div className='bg-[#12232E] hover:bg-gray-600 cursor-pointer hover:transition-all transition-all text-center block w-full p-2.5'>
                                    Tipo de cuerpo
                                </div>
                                <div className='bg-transparent text-center hover:bg-gray-600 cursor-pointer hover:transition-all transition-all block w-full p-2'>
                                    <div className='grid grid-cols-3 '>
                                        <div>
                                            Camioneta
                                        </div>
                                        <div>
                                            SUV
                                        </div>
                                        <div>
                                            SUV
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5 hover:bg-gray-600 cursor-pointer hover:transition-all transition-all'>
                                    Color exterior
                                </div>
                                <div className='bg-transparent text-center block w-full p-2 hover:bg-gray-600 cursor-pointer hover:transition-all transition-all'>
                                    <div className='grid gap-6  grid-cols-3'>
                                        <div>
                                            Negra
                                        </div>
                                        <div>
                                            Azul
                                        </div>
                                        <div>
                                            Azul
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                    : ""}
                </div>
            </div>
        </div>
    )
}

export default Generalinformation