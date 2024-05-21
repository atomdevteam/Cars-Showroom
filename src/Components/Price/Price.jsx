import React, {useState, useEffect} from 'react'

const Price = ({PriceDatos}) => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (price !== 0) {
            PriceDatos.Precio = price;
        }
    }, [price]);
    
    return (
        <div className='bg-[#071620]  text-white mb-12'>
            <div className='ml-8 mr-8  mt-8'>
                <div className='text-left '>
                    <h3 className=' underline text-2xl'>Precio</h3>
                </div>
                <div className='mt-8 '>
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
                </div>
            </div>
        </div>
    )
}

export default Price