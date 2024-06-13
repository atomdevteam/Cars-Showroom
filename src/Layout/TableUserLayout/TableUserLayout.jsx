import React from 'react'
import Navbar from '../NavBar/NavBar'
import TableUser from '../../Components/TableUser/TableUser'

const TableUserLayout = () => {
    return (
        <>
            <Navbar background={'dark:bg-[#0B0C10]'} />
            <div className='bg-[#0B0C10] max-h-full '>
                <div className='h-[10rem] bg-[#12232E] text-white mb-16'>
                    <div className='ml-10 lg:ml-[8rem] flex flex-col'>
                        <h1 className='mt-8 text-4xl'>
                            Editar roles de Usuarios
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col mx-4 lg:ml-[6rem] lg:mr-[6rem] '>

                    <TableUser />

                </div>

            </div>
        </>
      
    )
}

export default TableUserLayout