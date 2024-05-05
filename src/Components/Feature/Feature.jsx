import React from 'react'
import CheckBox from '../Checkbox/CheckBox'

const Feature = () => {
    return (

        <div className='bg-[#071620]  text-white mb-12'>
            <div className='ml-8 mr-8 mb-12 mt-8'>
                <div className='text-left'>
                    <h3 className=' underline text-2xl'>Features</h3>
                </div>
                <div className='mt-8 '>
                    <form className='max-w-full'>
                        <div className='mb-4 grid gap-6  lg:grid-cols-1 w-full'>
                            <div className='mb-8'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buscar</label>
                                <input type="search" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                            </div>
                        </div>

                        <div className='mb-8 grid gap-6  lg:grid-cols-4 w-full'>

                            <CheckBox text={"Dirección asistida"} />
                            <CheckBox text={"Asientos con calefacción "} />
                            <CheckBox text={"Sensor de estacionamiento trasero"} />
                            <CheckBox text={"USB Port"} />

                            <CheckBox text={"AC"} />
                            <CheckBox text={"Wifi"} />
                            <CheckBox text={"Barra de techo"} />
                            <CheckBox text={"Sistema de sonido"} />

                            <CheckBox text={"Alarma"} />
                            <CheckBox text={"Control de crucero"} />
                            <CheckBox text={"Ventanas eléctricas "} />
                            <CheckBox text={"Asiento con memoria"} />

                            <CheckBox text={"Bluetooth"} />
                            <CheckBox text={"Sensor de estacionamiento delantero"} />
                            <CheckBox text={"Techo corredizo"} />
                            <CheckBox text={"Otro"} />

                        </div>

                        <div className='mb-4'>

                            <textarea type="text" className="bg-[#12232E] text-sm block w-full p-8" placeholder='Escribe otra característica aquí. ' required />
                        </div>

                    </form>
                </div>
            </div>


        </div>

    )
}

export default Feature