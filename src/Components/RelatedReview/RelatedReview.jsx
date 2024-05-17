import React from 'react'
import TeslaCar from '../../assets/TeslaModel/TeslaCar.avif'
import TeslaCar2 from '../../assets/TeslaModel/TeslaCar2.avif'
import Start from "../../assets/TeslaModel/Start.png"
import Startv from "../../assets/TeslaModel/StartV.png"
import Comments from '../../assets/TeslaModel/Comment.png'
const RelatedReview = () => {
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
                                <img src={TeslaCar} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                                <div className="px-1 py-4 bg-[#12232E]">
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

                                    <div className='flex flex-row items-center w-full  p-2'>
                                        <div className=''>
                                            <img
                                                alt="user 2"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                                            />
                                        </div>
                                        <div className='flex flex-row p-2'>
                                            <div className='text-sm text-[#004A77] mr-4'>By Carla Bastista</div>
                                            <div className='flex flex-row items-center text-[#004A77]'>
                                                <img src={Comments} className='h-4 w-4' />
                                                <div className='ml-2'>1</div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='bg-[#4DA8DA] mt-4 ml-2 inline-block text-auto px-2 py-1'>
                                        June, 01 2021
                                    </div>

                                </div>
                            </div>

                            <div className="rounded-lg border border-gray-800 max-w-full">
                                <img src={TeslaCar2} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                                <div className="px-1 py-4 bg-[#12232E]">
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

                                    <div className='flex flex-row items-center w-full  p-2'>
                                        <div className=''>
                                            <img
                                                alt="user 2"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                                            />
                                        </div>
                                        <div className='flex flex-row p-2'>
                                            <div className='text-sm text-[#004A77] mr-4'>By Carla Bastista</div>
                                            <div className='flex flex-row items-center text-[#004A77]'>
                                                <img src={Comments} className='h-4 w-4' />
                                                <div className='ml-2'>1</div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='bg-[#4DA8DA] mt-4 ml-2 inline-block text-auto px-2 py-1'>
                                        June, 01 2021
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedReview