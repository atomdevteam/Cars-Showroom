import React, {useState, useEffect, useMemo} from 'react'

const EngineDetails = ({updateEngineDetails}) => {
    const [TipoCombustimble, setTipoCombustimble] = useState('')
    const [Kilometraje, setKilometraje] = useState('')
    const [Transmision, setTransmision] = useState('')
    const [DriverTrain, setDriverTrain] = useState('')
    const [CapacidadMotor, setCapacidadMotor] = useState('')
    const [Power, setPower] = useState('')

    const EngineDetailsdatos = useMemo(() => ({
        TipoCombustimble,
        Kilometraje,
        Transmision,
        DriverTrain,
        CapacidadMotor,
        Power,
    }), [TipoCombustimble, Kilometraje, Transmision, DriverTrain, CapacidadMotor, Power]);

    useEffect(() => {
        updateEngineDetails(EngineDetailsdatos)
    }, [EngineDetailsdatos]);

    return (
       
            <div className='bg-[#071620]  text-white mb-8'>
                <div className='ml-8 mr-8 mb-12 mt-8'>
                    <div className='text-left'>
                        <h3 className=' underline text-2xl'>Detalles del motor</h3>
                    </div>
                    <div className='mt-8 '>
                        <form className='max-w-full'>


                            <div className='mb-4'>
                                <div className="grid gap-6 mb-6 lg:grid-cols-3">
                                    <div>
                                        <label htmlFor="Typeofload" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipos de combustible </label>
                                        <select onChange={(e) => setTipoCombustimble(e.target.value)} id="Typeofload" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                            <option value="">Selecciona</option>
                                            <option value="Gasolina">Gasolina</option>
                                            <option value="Diésel">Diésel</option>
                                            <option value="Biodiésel">Biodiésel</option>
                                            <option value="Gas natural">Gas natural</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilometraje</label>
                                        <div className="flex">

                                            <input onChange={(e) => setKilometraje(e.target.value)} type="text" id="title" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                km
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Transmisión</label>
                                        <select onChange={(e) => setTransmision(e.target.value)}  className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                            <option value="">Selecciona</option>
                                            <option value="Transmisión Manual">Transmisión Manual</option>
                                            <option value="Transmisión Automática">Transmisión Automática</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className='mb-4'>
                                <div className="grid gap-6 mb-6 lg:grid-cols-3">
                                    <div className='mb-8'>
                                        <label htmlFor="Year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">DriverTrain</label>
                                        <select onChange={(e) => setDriverTrain(e.target.value)}  id="Year" className="bg-[#12232E] text-sm block w-full p-2.5" required>
                                            <option value="">Seleccionar</option>
                                            <option value="Transmisión Manual">Transmisión Manual</option>
                                            <option value="Transmisión Automática">Transmisión Automática</option>

                                        </select>
                                    </div>


                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Capacidad del motor</label>
                                        <div className="flex">

                                            <input onChange={(e) => setCapacidadMotor(e.target.value)}  type="text" id="title" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                cc
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Power</label>
                                        <div className="flex">

                                            <input onChange={(e) => setPower(e.target.value)} type="text" id="title" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                                            <div type="button" className="bg-[#004A77] text-white   px-4 py-2 rounded-r  focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                                                hp
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

export default EngineDetails