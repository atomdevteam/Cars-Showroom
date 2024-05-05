import React from 'react'

const Audiovisual = () => {
    return (
        <div className='bg-[#071620]  text-white mb-12'>
            <div className='ml-8 mr-8  mt-8'>
                <div className='text-left '>
                    <h3 className=' underline text-2xl'>Imágenes y video</h3>
                </div>
                <div className='mt-8 '>
                    <form className='max-w-full'>

                        <div className=''>
                            <div className="grid gap-6 mb-6 lg:grid-cols-1">
                          
                                <div className='mb-4'>
                                    <label className='text-sm'>Sube tu Imagen/Video</label>
                                    <div className=" bg-black rounded-lg border border-gray-500 h-[12rem] w-[12rem]  bg-clip-content  border-dashed">
                                        <div className='flex items-center justify-center'>
                                            <div className='flex items-center justify-center w-full  h-48 rounded-lg' >
                                                <label htmlFor={`file-upload-1`} className="px-3 py-2 text-right text-xs leading-4">
                                                    <div className="bg-black text-white px-4 py-2 rounded-full   text-center cursor-pointer">
                                                        <input id={`file-upload-1`} type="file" className="hidden" />
                                                        <span className='text-4xl text-white'>
                                                            +
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 grid gap-6  lg:grid-cols-1 w-full'>
                                    <div className='mb-8'>
                                        <label className="block mb-2 text-sm font-medium text-white ">Enlace para el video </label>
                                        <input type="text" className="bg-[#12232E]  text-sm block w-full p-2.5 " required />
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

export default Audiovisual