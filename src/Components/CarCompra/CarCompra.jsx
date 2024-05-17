import React from "react"
import Car6 from '../../assets/Car/Car6.jpeg'
import Car7 from '../../assets/Car/Car7.jpg'
import Calender from '../../assets/ImgCar/Calender.png'
import { FaCar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const CarCompra = () => {

    return (
        <div className='  text-white mb-8'>
            <div className='ml-8 mr-8  mt-8'>
                <div className='mt-8 '>
                    <div className='max-w-full'>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">

                            <div className="rounded-lg border border-gray-800 p-8 min-h-[400px]">
                                <img src={Car6} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                                <div className="px-1 py-4">
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
                                <div className="flex flex-row items-center mt-2">
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <CiStar className="mr-2" size={30} />
                                    (12 Reviews)
                                </div>

                            </div>
                            <div className="rounded-lg border border-gray-800 p-6 min-h-[400px]">
                                <img src={Car7} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                                <div className=" py-4">
                                    <button className="text-[#007CC7] border border-[#007CC7] mb-2 px-3">New</button>
                                    <div className="font-bold text-xl mb-2">Honda Pilot Touring 7-Passenger</div>
                                    <div className="text-[#007CC7] font-bold text-xl mt-4">$43,735 - $44,560</div>
                                    <div className="flex flex-row items-center justify-between text-xs mt-4">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center mb-4">
                                                <FaRegCalendarAlt className="mr-2 text-[#007CC7]" size={20} /> 2021
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <BsFillFuelPumpDieselFill className="mr-2 text-[#007CC7]" size={20} /> Gasolina
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center mb-4">
                                                <TbSteeringWheel className="mr-2 text-[#007CC7]" size={20} /> Todas las ruedas motrices
                                            </div>

                                            <div className="flex flex-row items-center">
                                                <BsFillPeopleFill className="mr-2 text-[#007CC7]" size={20} /> 7
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <div className='border border-t-1 border-gray-600 mt-3'></div>
                                <div className="flex flex-row items-center mt-2">
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <FaStar className="mr-2" size={25} />
                                    <CiStar className="mr-2" size={30} />
                                    (12 Reviews)
                                </div>

                            </div>

                          

                            <div className="rounded-lg border border-gray-800 p-6  flex items-center justify-center flex-col text-gray-400 min-h-[400px]">

                                <div className="">
                                    <FaCar size={100} />
                                </div>
                                <div className="text-xl">
                                    Añadir coche para comparar
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCompra