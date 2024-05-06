import React from 'react'
import Ourreviews from '../Ourreviews/Ourreviews'

const Search = () => {
    return (
        <div className='w-[60rem] text-white mx-8'>
            <div className='flex flex-row items-center'>

                <input type="search"  className="bg-[#12232E] text-sm block w-full p-2.5" placeholder='Buscar cohe' required />
                <button className='ml-8 bg-[#007CC7] text-sm block  p-2.5'>Buscar</button>
            </div>
            <Ourreviews />
        </div>
    )
}

export default Search