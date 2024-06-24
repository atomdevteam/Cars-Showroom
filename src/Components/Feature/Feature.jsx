import React from 'react'
import CheckBox from '../Checkbox/CheckBox'
import { useState } from 'react'
import flechatop from "../../assets/img/flechatop.png"
const Feature = () => {
    const [open, setOpen]=useState(false)
    const Abre=()=>{
        setOpen(!open)
    }
    return (

        <div  className='bg-[#071620] rounded-lg  text-white  m-10'>
            <div className='ml-8 mr-8 mb-12 mt-8'>
                <div className='text-left flex justify-between items-center cursor-pointer' onClick={Abre}>
                    <h3 className='  text-2xl'>Features</h3>
                    {/* <img className= {`w-6 h-6 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver" /> */}
                </div>
                <div className='mt-8 '>
                  
                    <form className='max-w-full'>
                       

                        <div className='mb-8 grid gap-6  lg:grid-cols-4 w-full'>

                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Direccion'/>
                                <label htmlFor="Direccion" className='hover:cursor-pointer'>Direccion Asistida</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='calefacción'/>
                                <label htmlFor="calefacción" className='hover:cursor-pointer'>Asientos con calefacción</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Sensor'/>
                                <label htmlFor="Sensor" className='hover:cursor-pointer'>Sensor de estacionamiento trasero</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='USB'/>
                                <label htmlFor="USB" className='hover:cursor-pointer'>USB Port</label>
                            </div>

                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='AC'/>
                                <label htmlFor="AC" className='hover:cursor-pointer'>AC</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Wifi'/>
                                <label htmlFor="Wifi" className='hover:cursor-pointer'>Wifi</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Barra'/>
                                <label htmlFor="Barra" className='hover:cursor-pointer'>Barra de techo</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='sonido'/>
                                <label htmlFor="sonido" className='hover:cursor-pointer'>Sistema de sonido</label>
                            </div>
 
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Alarma'/>
                                <label htmlFor="Alarma" className='hover:cursor-pointer'>Alarma</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='crucero'/>
                                <label htmlFor="crucero" className='hover:cursor-pointer'>Control de crucero</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Ventanas'/>
                                <label htmlFor="Ventanas" className='hover:cursor-pointer'>Ventanas eléctricas</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='memoria'/>
                                <label htmlFor="memoria" className='hover:cursor-pointer'>Asiento con memoria</label>
                            </div>

                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Bluetooth'/>
                                <label htmlFor="Bluetooth" className='hover:cursor-pointer'>Bluetooth</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='delantero'/>
                                <label htmlFor="delantero" className='hover:cursor-pointer'>Sensor de estacionamiento delantero</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='corredizo'/>
                                <label htmlFor="corredizo" className='hover:cursor-pointer'>Techo corredizo</label>
                            </div>
                            <div className=' items-center py-2' >
                                <input className='w-4 h-4 mr-1' type="checkbox" id='Otro'/>
                                <label htmlFor="Otro" className='hover:cursor-pointer'>Otro</label>
                            </div>


                        </div>

                        <div className='mb-4 '>

                            <textarea type="text" className="bg-[#12232E] rounded-lg text-sm block w-full p-8" placeholder='Escribe otra característica aquí. ' required />
                        </div>





                    </form>
                 
                </div>
            </div>
        </div>
    );
};

export default Feature;
