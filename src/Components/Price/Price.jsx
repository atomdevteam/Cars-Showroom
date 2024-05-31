import React from 'react'

const Price = () => {
    return (
        <div data-aos="zoom-in-up" className='bg-[#071620] rounded-lg  text-white mb-12'>
            <div className='ml-8 mr-8  mt-8'>
                <div className='text-left flex items-center cursor-pointer justify-between ' onClick={Abre}>
                    <h3 className=' underline text-2xl'>Precio</h3>
                    <img className= {`w-6 h-6 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                </div>
                <div className='mt-8 '>
                    {open?
                    <form className='max-w-full'>

                        <div className=''>
                            <div className="grid gap-6 mb-6 lg:grid-cols-1">
                                <div className='mb-8'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precio final </label>
                                    <div className="flex">
                                        <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-l  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                            $
                                        </div>
                                        <input onChange={(e) => setPrice(e.target.value)} type="number"  className="bg-[#12232E] text-sm block w-full p-2.5" required />

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

export default Price