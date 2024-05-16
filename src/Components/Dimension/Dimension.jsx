import React from 'react'

const Dimension = () => {
    return (
            <div className='bg-[#071620]  text-white mb-8'>
                <div className='ml-8 mr-8  mt-8'>
                    <div className='text-left '>
                        <h3 className=' underline text-2xl'>Dimensión</h3>
                    </div>
                    <div className='mt-8 '>
                        <form className='max-w-full'>

                            <div className=''>
                                <div className="grid gap-6 mb-6 lg:grid-cols-4">
                                    <div className='mb-8'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Longitud </label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Anch0</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Altura</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                mm
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volumen de carga</label>
                                        <div className="flex">

                                            <input type="text"  className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                L
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

export default Dimension