import React from 'react'
import AvatarPerfil from '../../assets/TeslaModel/AvatarPerfil.png'
import CellPhone from '../../assets/TeslaModel/CellPhone.png'
import Letter from '../../assets/TeslaModel/Letter.png'
import Comments from '../../assets/TeslaModel/Comment.png'
const CommentsTesla = () => {
    return (
        <div className='my-8'>
            <div className='border border-gray-600 my-4'></div>
            <div className='text-white'>
                <div className='bg-[#4DA8DA] inline-block text-auto px-2 py-1'>
                    June, 01 2021
                </div>

                <div className='my-4 mx-4 bg-[#071620] w-full flex flex-col lg:flex-row '>
                    <div className='flex flex-row items-center w-full  p-2'>
                        <div className=''>
                            <img
                                alt="user 2"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                            />
                        </div>
                        <div className='flex flex-col p-2'>
                            <div className=''>Carla Bastista</div>
                            <div className=' text-sm'>Experta en autos</div>
                        </div>

                    </div>
                    <div className='border border-gray-600 my-4'></div>
                    <div className='flex flex-row items-center  w-full p-4'>
                        <div className=''>
                            <img className="h-8 w-8 rounded-full" src={CellPhone} alt="" />
                        </div>
                        <div className='flex flex-col ml-2'>
                            <div className=''>809-865-3730</div>

                        </div>

                    </div>
                    <div className='border border-gray-600  my-4'></div>
                    <div className='flex flex-row items-center  w-full p-4'>
                        <div className=''>
                            <img className="h-8 w-8 rounded-full" src={Letter} alt="" />
                        </div>
                        <div className='flex flex-col ml-2'>
                            <div className=''>carla.b@mail.com</div>

                        </div>

                    </div>
                </div>

                <div className='flex flex-row items-center '>
                    <div>
                        <img src={Comments} className='h-6 w-6' />
                    </div>
                    <div className='p-2 text-sm'>
                        1 Comment
                    </div>
                </div>

                <div className='flex flex-row  my-8 w-full'>
                    <div className='flex flex-col lg:flex-row items-start w-full  p-2'>
                        <div className='w-2/4'>
                            <img
                                alt="user 1"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <div className=''>Ryan Carder</div>
                            <div className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comentario</label>
                        <textarea type="text" className="bg-[#12232E] text-sm block w-full p-8" placeholder='Deja un mensaje aquí.' required />
                    </div>
                    <div className='bg-[#007CC7] inline-block text-auto px-4 py-2'>
                        <button>Agregar comentario</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CommentsTesla