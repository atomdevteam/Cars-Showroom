import React, { useState } from 'react'

const Vehiclehistory = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };
    return (
        <div className='bg-[#071620]  text-white mb-12'>
            <div className='ml-8 mr-8  mt-8'>
                <div className='text-left '>
                    <h3 className=' underline text-2xl'>Historial del vehículo </h3>
                </div>
                <div className='mt-8 '>
                    <form className='max-w-full'>

                        <div className=''>
                            <div className="grid gap-6 mb-6 lg:grid-cols-1">
                                <div className='mb-8'>
                                    <div className="flex items-center bg-[#12232E]">
                                        <label htmlFor="fileInput" className="block mb-2 text-sm font-medium text-white bg-[#004A77] border border-gray-300 rounded-md p-2.5 cursor-pointer">
                                            Elija el archivo
                                            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} required />

                                        </label>
                                        <div className='ml-4'>
                                             {fileName ? fileName : "Ningún archivo elegido "}
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

export default Vehiclehistory