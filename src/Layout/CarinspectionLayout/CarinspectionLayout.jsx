import React from 'react'
import NavBar from '../NavBar/NavBar'
import Search from '../../Components/Search/Search'
import Ourreviews from '../../Components/Ourreviews/Ourreviews'
const CarinspectionLayout = () => {
    return (
        <>
            <NavBar background={'dark:bg-[#12232E]'} />
            <div className='bg-[#0B0C10] max-h-full '>
                <div className='h-[10rem] bg-[#0B0C10] text-white'>
                    <div className='ml-8 lg:ml-[4rem] flex flex-col'>
                        <h1 className='mt-8 text-4xl'>
                            Revisión del auto
                        </h1>
                        <div className='mt-4'>
                            Homepage - Artículos - Revisión del auto
                        </div>
                    </div>
                </div>

                <div className='flex flex-col ml-8 lg:ml-[4rem] lg:mr-[4rem] '>
                    <div className='mb-8 flex items-center justify-center'>
                        <Search />
                    </div>

               

                </div>
            </div>
        </>
    )
}

export default CarinspectionLayout