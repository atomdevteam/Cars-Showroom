import React from 'react'
import CarLogo from '../../assets/Logo/CarLogo.png'
import Facebook from '../../assets/Footer/Facebook.png'
import Instagram from '../../assets/Footer/instagram.png'
import Youtube from '../../assets/Footer/youtube.png'
const Footer = () => {
    return (
        <footer className="bg-[#12232E] text-white p-4 text-center">
            <div className="container mx-auto">
                <div className='flex justify-center'>
                    <img src={CarLogo} />
                </div>
                <div className='border border-gray-600 my-8'></div>
                <div className='grid lg:grid-cols-3  justify-center   w-full'>
                    <div className='grid lg:grid-cols-1 items-center w-full'>
                        <div className='mb-4'>
                            SOBRE NOSOTROS
                        </div>
                        <div className='mb-4'>
                            FAQ
                        </div>
                        <div className='mb-4'>
                            CONTACTO
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-1 items-center w-full'>
                        <div className='mb-4'>
                            SERVICIO AL CLIENTE
                        </div>
                        <div className='mb-4'>
                            info@car.com
                        </div>
                        <div className='mb-4'>
                            588-865-3730
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-1 w-full items-center'>
                        <div className='flex  items-center justify-center'>
                                 <p className="line-clamp-3 w-[10rem]">#12 Av. Antonio G.,
                            San Frac., Duarte,
                            31000,
                            Rep. Domicana</p>
                        </div>
                   


                        <div className='mt-4'>
                            <div className='flex flex-row items-center justify-center '>
                                <div className='h-6 w-6 mr-2'>
                                    <img src={Facebook} />
                                </div>
                                <div className='h-6 w-6 mr-2'>
                                    <img src={Instagram} />
                                </div>
                                <div className='h-6 w-6 mr-2'>
                                    <img src={Youtube} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='border border-gray-600 my-8'></div>
                <p>&copy; 2021 Atom Dev Team. All Rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer