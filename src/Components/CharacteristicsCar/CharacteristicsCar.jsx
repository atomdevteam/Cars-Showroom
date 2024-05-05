import React from "react"
import { IoIosArrowUp } from "react-icons/io"
const CharacteristicsCar = () => {

    return(
        <div className='bg-[#071620]  text-white mb-8'>
        <div className='ml-8 mr-8  mt-8'>
            <div className="flex justify-center items-center">
                <div className="text-center flex-grow">
                    <h3 className="text-2xl">Características </h3>
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
                                Control de crucero
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid  lg:grid-cols-3'>
                                    <div>
                                       Opcional
                                    </div>
                                    <div>
                                    Estándar 
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                            Asiento de calefacción
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                       No
                                    </div>
                                    <div>
                                        Si
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                            Sensor de aparcamiento delantero 
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                        No
                                    </div>
                                    <div>
                                        Si
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                Bluetooth
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                        Si
                                    </div>
                                    <div>
                                        Si
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                Techo corredizo
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                        Si
                                    </div>
                                    <div>
                                        Si
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                Upholstery
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                        Vinilo
                                    </div>
                                    <div>
                                        Leather
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#12232E] text-center block w-full p-2.5'>
                                Otro
                            </div>
                            <div className='bg-transparent text-center block w-full p-2'>
                                <div className='grid gap-6  lg:grid-cols-3'>
                                    <div>
                                        Aire acondicionado. Asientos traseros
                                        abatible, Arranque sin llave, Sistema de sonido, Wifi, Puerto USB.
                                    </div>
                                    <div>
                                    Dirección Asistida, Alarma, Wifi, Puerto USB
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

export default CharacteristicsCar