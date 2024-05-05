import React from "react"
import { IoIosArrowUp } from "react-icons/io";
const EnginedetailsInfo = () => {
    return (
        <div className='bg-[#071620]  text-white mb-8'>
            <div className='ml-8 mr-8  mt-8'>
                <div className="flex justify-center items-center">
                    <div className="text-center flex-grow">
                        <h3 className="text-2xl">Detalles del motor</h3>
                    </div>
                    <div>
                        <IoIosArrowUp size={25} />
                    </div>
                </div>


                <div className='border border-t-1 border-gray-600 mt-3'></div>
                <div className='mt-8 '>
                    <form className='max-w-full'>

                        <div className=''>
                            <div className="grid  mb-6 lg:grid-cols-1">
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Kilometraje
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid  lg:grid-cols-3'>
                                        <div>
                                            778 km
                                        </div>
                                        <div>
                                            722 km
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Transmisión
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid gap-6  lg:grid-cols-3'>
                                        <div>
                                        Automático 
                                        </div>
                                        <div>
                                        Automático 
                                        </div>
                                        <div>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Capacidad del motor
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid gap-6  lg:grid-cols-3'>
                                        <div>
                                            6700 cc
                                        </div>
                                        <div>
                                            3471 cc
                                        </div>
                                        <div>
                                            Azul
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EnginedetailsInfo