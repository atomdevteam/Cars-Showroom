import React from "react"
import { IoIosArrowUp } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbPlayerPlay } from "react-icons/tb";
import Car1 from "../../assets/Car/Car1.jpeg"
import Car2 from "../../assets/Car/Car2.jpeg"
import Car3 from "../../assets/Car/Car3.jpeg"
import Car4 from "../../assets/Car/Car4.jpeg"
const ListAudioVisual = () => {

    return (
        <div className='bg-[#071620]  text-white mb-8'>
            <div className='ml-8 mr-8  mt-8'>
                <div className="flex justify-center items-center">
                    <div className="text-center flex-grow">
                        <h3 className="text-2xl">Imágenes y Videos </h3>
                    </div>
                    <div>
                        <IoIosArrowUp size={25} />
                    </div>
                </div>


                <div className='border border-t-1 border-gray-600 mt-3'></div>
                <div className='mt-8 '>
                    <div className='max-w-full'>

                        <div className=''>
                            {/* <div className="grid mb-4 lg:grid-cols-2 items-center">
                                <div className="bg-[#12232E]  block w-3/4">
                                    <div className="grid  m-6 lg:grid-cols-2">
                                        <img className="h-50 w-50 mr-4" src={Car1} />
                                        <img className="h-50 w-50 m-4" src={Car2} />
                                        <img className="h-50 w-50 mr-4" src={Car3} />
                                        <img className="h-50 w-50 m-4" src={Car4} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Ver más
                                    </div>
                                </div>

                                <div className="bg-[#12232E] ml-4 block w-3/4">
                                    <div className="grid  m-6 lg:grid-cols-2">
                                        <img className="h-50 w-50 mr-4" src={Car1} />
                                        <img className="h-50 w-50 m-4" src={Car2} />
                                        <img className="h-50 w-50 mr-4" src={Car3} />
                                        <img className="h-50 w-50 m-4" src={Car4} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Ver más
                                    </div>
                                </div>
                                <div className="bg-[#12232E] ml-4 block w-3/4">
                                    <div className="grid  m-6 lg:grid-cols-1">
                                        <img className="h-50 w-50 mr-4" src={Car1} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Enlace del video
                                    </div>
                                </div>
                                <div className="bg-[#12232E] ml-4 block w-3/4">
                                    <div className="grid  m-6 lg:grid-cols-1">
                                        <img className="h-50 w-50 mr-4" src={Car1} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Enlace del video
                                    </div>
                                </div>
                            </div> */}
                            <div className="grid gap-4 lg:grid-cols-2 items-center">
                                <div className="bg-[#12232E] w-full">
                                    <div className="grid grid-cols-2 gap-4 m-6">
                                        <img className="h-50 w-50" src={Car1} />
                                        <img className="h-50 w-50" src={Car2} />
                                        <img className="h-50 w-50" src={Car3} />
                                        <img className="h-50 w-50" src={Car4} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Ver más
                                    </div>
                                </div>

                                <div className="bg-[#12232E] w-full">
                                    <div className="grid grid-cols-2 gap-4 m-6">
                                        <img className="h-50 w-50" src={Car1} />
                                        <img className="h-50 w-50" src={Car2} />
                                        <img className="h-50 w-50" src={Car3} />
                                        <img className="h-50 w-50" src={Car4} />
                                    </div>
                                    <div className="text-center text-sm text-[#007CC7] mb-4">
                                        Ver más
                                    </div>
                                </div>

                                <div className="bg-[#12232E] w-full flex items-center flex-col">
                                    <div className="grid grid-cols-1 m-6 relative">
                                        <img className="h-full w-full" src={Car1} />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                            <TbPlayerPlay size={35} />
                                        </div>
                                    </div>

                                    <a href="" className="flex flex-row items-center text-center underline text-sm text-[#007CC7] mb-4">
                                        Enlace del video <FaExternalLinkAlt className="ml-2"/>
                                    </a>
                                </div>

                                <div className="bg-[#12232E] w-full flex items-center flex-col">
                                    <div className="grid grid-cols-1 m-6 relative">
                                        <img className="h-full w-full" src={Car1} />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004A77] flex items-center justify-center h-16 w-16 rounded-full">
                                            <TbPlayerPlay size={35} />
                                        </div>
                                    </div>
                                    <a href="" className="flex flex-row items-center text-center underline text-sm text-[#007CC7] mb-4">
                                        Enlace del video <FaExternalLinkAlt className="ml-2"/>
                                    </a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAudioVisual