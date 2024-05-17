import React from 'react'
import TeslaCar from '../../assets/TeslaModel/TeslaCar.avif'
import TeslaCar2 from '../../assets/TeslaModel/TeslaCar2.avif'
import Start from "../../assets/TeslaModel/Start.png"
import Startv from "../../assets/TeslaModel/StartV.png"
import Comments from '../../assets/TeslaModel/Comment.png'
import Suffix from '../../assets/TeslaModel/Suffix.png'
import TeslaModel3 from '../../assets/TeslaModel/TeslaModel3.png'
import { TbPlayerPlay } from "react-icons/tb";

import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import FordF from '../../assets/TeslaModel/FordF.png'
import Honda from '../../assets/TeslaModel/Honda.png'
const Ourreviews = () => {
    return (
        <div className='  text-white mb-8'>
            <div className=' mr-8  mt-12'>
                <div className="">
                    <div className="">
                        <h3 className="text-2xl">Revisión relacionada </h3>
                    </div>

                </div>
                <div className='mt-8 '>
                    <div className='max-w-full'>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">

                            <div className="rounded-lg border border-gray-800 max-w-full">
                                <div className="grid grid-cols-1 relative">
                                    <img className="w-full h-48 rounded-md object-cover" src={Suffix} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                        <TbPlayerPlay size={35} />
                                    </div>
                                </div>
                                <div className="px-1 py-9 bg-[#12232E]">
                                    <div className="text-[#007CC7] font-bold text-xl  mb-2 px-3">Etiam Eget</div>
                                    <div className='mb-2 px-3'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eget praesent gravida sed rutrum suspendisse eu.
                                    </div>
                                    <div className='flex flex-row items-center ml-2 my-6'>
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Startv} className='mr-1 w-6 h-6' />
                                    </div>

                                    <div className='grid grid-cols-2 lg:grid-cols-3 items-center justify-between w-full ml-4 lg:ml-0'>
                                        <div className='flex flex-row items-center'>
                                            <img
                                                alt="user 2"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                                            />  <div className='text-sm text-[#004A77] ml-2 mr-2'>By Carla Bastista</div>
                                        </div>
                                        <div className='flex flex-row '>

                                            <div className='flex flex-row items-center text-[#004A77]'>
                                                <img src={Comments} className='h-4 w-4' />
                                                <div className='ml-2'>1 comment</div>
                                            </div>

                                        </div>
                                        <div className='bg-[#4DA8DA] w-[6.5rem] py-2 pl-1 mt-4 lg:mt-0'>
                                            June, 01 2021
                                        </div>


                                    </div>


                                </div>
                            </div>

                            <div className="rounded-lg border border-gray-800 max-w-full">
                                <div className="grid grid-cols-1 relative">
                                    <img className="w-full h-48 rounded-md object-cover" src={TeslaModel3} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                        <TbPlayerPlay size={35} />
                                    </div>
                                </div>
                                <div className="px-1 py-9 bg-[#12232E]">
                                    <div className="text-[#007CC7] font-bold text-xl  mb-2 px-3">Tesla Model 3</div>
                                    <div className='mb-2 px-3'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eget praesent gravida sed rutrum suspendisse eu.
                                    </div>
                                    <div className='flex flex-row items-center ml-2 my-6'>
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Startv} className='mr-1 w-6 h-6' />
                                    </div>

                                    <div className='grid grid-cols-2 lg:grid-cols-3 items-center justify-between w-full ml-4 lg:ml-0'>
                                        <div className='flex flex-row items-center'>
                                            <img
                                                alt="user 2"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                                            />  <div className='text-sm text-[#004A77] ml-2 mr-2'>By Carla Bastista</div>
                                        </div>
                                        <div className='flex flex-row '>

                                            <div className='flex flex-row items-center text-[#004A77]'>
                                                <img src={Comments} className='h-4 w-4' />
                                                <div className='ml-2'>1 comment</div>
                                            </div>

                                        </div>
                                        <div className='bg-[#4DA8DA] w-[6.5rem] py-2 pl-1 mt-4 lg:mt-0'>
                                            June, 01 2021
                                        </div>


                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div className="my-8">
                    <div className="">
                        <h3 className="text-2xl">Opiniones de los usuarios</h3>
                    </div>

                </div>
                <div className='mt-8 '>
                    <div className='max-w-full'>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">

                            <div className="bg-[#12232E] ">
                                <div className="grid grid-cols-1 relative">
                                    <img className="w-full h-48  object-cover" src={FordF} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                        <TbPlayerPlay size={35} />
                                    </div>
                                </div>

                                <div className="px-1 py-4 ml-4">
                                    <button className="text-[#007CC7] border border-[#007CC7] mb-2 px-3">New</button>
                                    <div className="font-bold text-xl mb-2">Ford F-250 Super Duty</div>
                                    <div className="text-[#007CC7] font-bold text-xl mt-4">$82,098 - $92,050</div>

                                    <div className="flex flex-row items-center justify-between text-xs mt-4">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center mb-4">
                                                <FaRegCalendarAlt className="mr-2 text-[#007CC7]" size={20} /> 2021
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <BsFillFuelPumpDieselFill className="mr-2 text-[#007CC7]" size={20} /> Diesel
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start justify-between mb-4">
                                            <div className="flex flex-row items-center mb-4">
                                                <TbSteeringWheel className="mr-2 text-[#007CC7]" size={20} /> Tracción en las cuatro ruedas
                                            </div>

                                            <div className="flex flex-row items-center">
                                                <BsFillPeopleFill className="mr-2 text-[#007CC7]" size={20} /> 5
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <div className='border border-t-1 border-gray-600 mt-3'></div>
                                <div className="flex flex-row items-center mt-2 ml-4 mb-4">
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <CiStar className="mr-2" size={30} />
                                    (12 Reviews)
                                </div>

                            </div>

                            <div className="bg-[#12232E] ">
                                <div className="grid grid-cols-1 relative">
                                    <img className="w-full h-48  object-cover" src={Honda} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                        <TbPlayerPlay size={35} />
                                    </div>
                                </div>
                                <div className="px-1 py-4 ml-4">
                                    <button className="text-[#007CC7] border border-[#007CC7] mb-2 px-3">New</button>
                                    <div className="font-bold text-xl mb-2">Ford F-250 Super Duty</div>
                                    <div className="text-[#007CC7] font-bold text-xl mt-4">$82,098 - $92,050</div>
                                    <div className="flex flex-row items-center justify-between text-xs mt-4">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center mb-4">
                                                <FaRegCalendarAlt className="mr-2 text-[#007CC7]" size={20} /> 2021
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <BsFillFuelPumpDieselFill className="mr-2 text-[#007CC7]" size={20} /> Diesel
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start justify-between mb-4">
                                            <div className="flex flex-row items-center mb-4">
                                                <TbSteeringWheel className="mr-2 text-[#007CC7]" size={20} /> Tracción en las cuatro ruedas
                                            </div>

                                            <div className="flex flex-row items-center">
                                                <BsFillPeopleFill className="mr-2 text-[#007CC7]" size={20} /> 5
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-t-1 border-gray-600 mt-3'></div>
                                <div className="flex flex-row items-center mt-2 ml-4 mb-4">
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <CiStar className="mr-2" size={30} />
                                    (12 Reviews)
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourreviews