import React from 'react'
import CarLogo from '../../assets/Footer/CarLogo.png'
import Facebook from '../../assets/Footer/Facebook.png'
import Instagram from '../../assets/Footer/instagram.png'
import Youtube from '../../assets/Footer/youtube.png'
import { editTituloContact, editUbicacionContact, editGmailContact, editPhoneContact, editTitulotwoContact } from "../../Functions/HomeAdmin/HomeAdmin";
const Footer = () => {
 
    return (
        <footer className="bg-[#12232E] text-white p-4 text-center">
            <div className="bg-[#12232E] container mx-auto">
                <div className='flex justify-center bg-[#12232E]'>
                    <img className='bg-[#12232E]' src={CarLogo} />
                </div>
                <div className='border border-gray-600 my-8'></div>
                <div className='bg-[#12232E] grid lg:grid-cols-3  justify-center   w-full'>
                    <div className='bg-[#12232E] grid lg:grid-cols-1 items-center w-full'>
                        <a href='#/AboutUS' className='mb-4 bg-[#12232E] cursor-pointer' >
                            SOBRE NOSOTROS
                        </a>
                    
                        <div className='mb-4 bg-[#12232E]'>
                            CONTACTO
                        </div>
                    </div>

                    <div className='bg-[#12232E] grid lg:grid-cols-1 items-center w-full'>
                        <div className='mb-4 bg-[#12232E]'>
                            {editGmailContact}
                        </div>
                        <div className='mb-4 bg-[#12232E] '>
                            {editPhoneContact}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-1 w-full items-center'>
                        <div className='flex  items-center justify-center'>
                            <p className="line-clamp-3 w-[10rem]">#12 Av. Antonio G.,
                               {editUbicacionContact}</p>
                        </div>



                        <div className='mt-4 '>
                            <div className='flex flex-row items-center justify-center bg-[#12232E] '>
                                <div className='h-6 w-6 mr-2 bg-[#12232E]'>
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


                <div className='border border-gray-600 my-8 bg-[#12232E]'></div>
                <p className='bg-[#12232E]'>&copy; 2021 Atom Dev Team. All Rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer