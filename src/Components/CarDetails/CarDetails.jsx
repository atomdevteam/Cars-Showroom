import React, { useState } from 'react'

const CarDetails = () => {
    const [capacity, setCapacity] = useState(1);

    const decreaseCapacity = () => {
        if (capacity > 1) {
            setCapacity(capacity - 1);
        }
    };

    const increaseCapacity = () => {
        setCapacity(capacity + 1);
    };
    return (
        <div className='bg-[#071620]  text-white mb-8'>
            <div className='ml-8 mr-8 mb-12 mt-8'>
                <div className='text-left'>
                    <h3 className=' underline text-2xl'>Detalles del colche</h3>
                </div>
                <div className='mt-8 '>
                    <form className='max-w-full'>
                        <div className='mb-4 grid gap-6  lg:grid-cols-2 w-full'>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título</label>
                                <input type="text" id="title" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="condicion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Condición </label>
                                <div className='flex flex-row p-2.5 '>
                                    <div className='flex flex-row items-center'>
                                        <input type='radio' name='condicion' id='nuevo' className='h-5 w-5 bg-[#071620] rounded-full  border border-blue-gray-200 relative   border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        <label htmlFor='nuevo' className='mr-2 ml-2'>Nuevo</label>
                                    </div>
                                    <div className='ml-8 flex flex-row items-center'>
                                        <input type='radio' name='condicion' id='usado' className='h-5 w-5 bg-[#071620] rounded-full  border border-blue-gray-200 relative   border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        <label htmlFor='usado' className='mr-2 ml-2'>Usado</label>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className='mb-4'>
                            <div className="grid gap-6 mb-6 lg:grid-cols-3">
                                <div>
                                    <label htmlFor="Typeofload" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de cuerpo</label>
                                    <select id="Typeofload" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                        <option value="">Selecciona</option>
                                        <option value="sedan">Sedán</option>
                                        <option value="coupe">Coupé</option>
                                        <option value="suv">SUV</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marca</label>
                                    <select id="Brand" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                        <option value="">Selecciona</option>
                                        <option value="toyota">Toyota</option>
                                        <option value="honda">Honda</option>
                                        <option value="ford">Ford</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modelo</label>
                                    <select id="Model" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                        <option value="">Selecciona</option>
                                        <option value="corolla">Corolla</option>
                                        <option value="civic">Civic</option>
                                        <option value="mustang">Mustang</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <div className="grid gap-6 mb-6 lg:grid-cols-3">
                                <div>
                                    <label htmlFor="Year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Año</label>
                                    <select id="Year" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                        <option value="">Seleccionar</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>

                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Capacidad de pasajeros</label>
                                    <div className="flex">
                                        <button type="button" onClick={decreaseCapacity} className="bg-[#004A77] text-white hover:text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={capacity}
                                            onChange={(e) => setCapacity(parseInt(e.target.value))}
                                            min={1}
                                            max={100}
                                            className="bg-[#12232E] text-sm text-center block w-full p-2.5"
                                            required
                                        />
                                        <button type="button" onClick={increaseCapacity} className="bg-[#004A77] text-white hover:text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-r border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="ExteriorColor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color exterior</label>
                                    <select id="ExteriorColor" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                        <option value="">Seleccionar</option>
                                        <option value="Blanco">Blanco</option>
                                        <option value="Negro">Negro</option>
                                        <option value="Gris">Gris</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripción </label>
                            <textarea type="text" id="Description" className="bg-[#12232E] text-sm block w-full p-8" required />
                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default CarDetails