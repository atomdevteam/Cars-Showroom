import React from 'react'
import { useState } from 'react'
import flechatop from "../../assets/img/flechatop.png"
const Dimension = () => {
    const [open, setOpen]=useState(false)
    const Abre=()=>{
        setOpen(!open)
    }
    return (
            <div data-aos="zoom-in-up" className='bg-[#071620] rounded-lg  text-white mb-8'>
                <div className='ml-8 mr-8  mt-8'>
                    <div className='text-left flex justify-between cursor-pointer items-center' onClick={Abre}>
                        <h3 className=' underline text-2xl'>Dimensión</h3>
                        <img className= {`w-6 h-6 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                    </div>
                    <div className='mt-8 '>
                        {open?
                        <form className='max-w-full'>

                            <div className=''>
                                <div className="grid gap-6 mb-6 lg:grid-cols-4">
                                    <div className='mb-8'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Longitud </label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5 rounded-lg hover:bg-slate-500 transition-all" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ancho</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5 rounded-lg hover:bg-slate-500 transition-all" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Altura</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5 rounded-lg hover:bg-slate-500 transition-all" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volumen de carga</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5 rounded-lg hover:bg-slate-500 transition-all" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                L
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </form>
                        :""}
                    </div>
                </div>
            </div>
       
    )
}

export default Dimension