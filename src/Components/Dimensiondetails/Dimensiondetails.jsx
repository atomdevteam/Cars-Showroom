import React from "react"
import { IoIosArrowUp } from "react-icons/io";
const Dimensiondetails = () => {
    return (
        <div className='bg-[#071620]  text-white mb-8'>
            <div className='ml-8 mr-8  mt-8'>
                <div className="flex justify-center items-center">
                    <div className="text-center flex-grow">
                        <h3 className="text-2xl">Detalles de dimensión </h3>
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
                                    Longitud
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid  lg:grid-cols-3'>
                                        <div>
                                            6350 mm
                                        </div>
                                        <div>
                                            4991 mm
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Ancho
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid gap-6  lg:grid-cols-3'>
                                        <div>
                                            2689 mm
                                        </div>
                                        <div>
                                            1966 mm
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Alto
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid gap-6  lg:grid-cols-3'>
                                        <div>
                                            2014 mm
                                        </div>
                                        <div>
                                            1793 mm
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                    Volumen de carga
                                </div>
                                <div className='bg-transparent text-center block w-full p-2'>
                                    <div className='grid gap-6  lg:grid-cols-3'>
                                        <div>
                                            1475 L
                                        </div>
                                        <div>
                                            1325 L
                                        </div>
                                        <div>

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

export default Dimensiondetails