import React from "react"
import { IoIosArrowUp } from "react-icons/io"
import { FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"
const HistoryCar = () => {
    const[open, setOpen]=useState(false)
    const Abre =()=>{
        setOpen(!open)
    }
    return (
        <div data-aos="zoom-in-down" className='bg-[#071620]  text-white mb-8 rounded-xl cursor-pointer'>
            <div className='ml-8 mr-8  mt-8'>
                <div className="flex justify-center items-center" onClick={Abre}> 
                    <div className="text-center flex-grow">
                        <h3 className="text-2xl">Historial del vehículo</h3>
                    </div>
                    <div>
                        <IoIosArrowUp size={25} className={`${open ? "rotate-180" : ""}`} />
                    </div>
                </div>


                <div className='border border-t-1 border-gray-600 mt-3'></div>
             
                <div className='mt-8 '>
                    <div className='max-w-full'>
                        {open ?
                        <div className=''>
                            <div className="grid  mb-6 lg:grid-cols-2">
                                <div className="bg-transparent text-center block w-full">
                                    <a href="" className="flex flex-row items-center text-center underline text-sm text-[#007CC7] mb-4">
                                        Historial del vehículo  <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                </div>
                                <div className="bg-transparent text-center block w-full">
                                    <a href="" className="flex flex-row items-center text-center underline text-sm text-[#007CC7] mb-4">
                                        Historial del vehículo  <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        :""}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryCar