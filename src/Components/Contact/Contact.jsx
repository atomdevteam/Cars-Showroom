import React from 'react'
import contactbackground from '../../assets/Contact/contactbackground.png'
import CellPhone from '../../assets/Contact/CellPhone.png'
import Email from '../../assets/Contact/Email.png'
import Address from '../../assets/Contact/Address.png'
const Contact = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${contactbackground})` }}>
            <div className='  text-white mb-8'>
                <div className='ml-8 mr-8 mb-12 mt-8'>
                    <div className='text-left'>
                        <h3 className=' text-2xl'>Ponerse en contacto con nosotros</h3>
                    </div>
                    <div className='mt-8 '>
                        <form className='max-w-full'>
                            <div className='mb-4 grid gap-6  lg:grid-cols-2 w-full'>
                                <div className=''>
                                    <div className='mb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                        <input type="text" className="bg-[#12232E] text-sm block w-full p-2.5" placeholder='Nombre completo' required />
                                    </div>

                                    <div className='mb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                        <input type="email" className="bg-[#12232E] text-sm block w-full p-2.5" placeholder='Nombre completo' required />
                                    </div>

                                    <div className='mb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Télefono</label>
                                        <input type="text" className="bg-[#12232E] text-sm block w-full p-2.5" placeholder='000-000-0000' required />
                                    </div>

                                    <div className='mb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comentarios</label>
                                        <textarea type="text" className="bg-[#12232E] text-sm block w-full p-8" placeholder='Deja un mensaje aquí. ' required />
                                    </div>
                                    <div className='bg-[#007CC7] inline-block text-auto text-center py-2 w-full'>
                                        <button>Enviar</button>
                                    </div>
                                </div>

                                <div className='bg-[#12232E] flex flex-col items-center justify-center mt-7'>
                                    <div className='flex flex-col items-center justify-center mt-4'>
                                        <div className='flex flex-row items-center'>
                                            <div className='h-4 w-4 mr-2'>
                                                <img src={CellPhone} />
                                            </div>
                                            <div>Teléfono</div>
                                        </div>
                                        <div className='text-[#4DA8DA]'>
                                            240-865-3730
                                        </div>

                                    </div>

                                    <div className='border border-gray-600  my-8  w-1/2'></div>

                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='flex flex-row items-center'>
                                            <div className='h-4 w-4 mr-2'>
                                                <img src={Email} />
                                            </div>
                                            <div>Email</div>
                                        </div>

                                        <div className='text-[#4DA8DA]'>
                                            info@autohunt.com
                                        </div>



                                    </div>

                                    <div className='border border-gray-600  my-8 w-1/2'></div>

                                    <div className='flex flex-col items-center justify-center mb-4'>
                                        <div className='flex flex-row items-center'>
                                            <div className='h-4 w-4 mr-2'>
                                                <img src={Address} />
                                            </div>
                                            <div className=''>Dirección</div>
                                        </div>

                                        <div className='text-center text-[#4DA8DA]'>
                                            #12, Av. Antonio Guzman, San Francisco  de <br/> Macorís, 31000, Republica Dominica.
                                        </div>

                                    </div>


                                </div>

                            </div>


                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Contact