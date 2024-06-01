import React from 'react'
import Navbar from '../NavBar/NavBar'
import FormularioReserva from '../../Components/FormularioReserva/FormularioReserva'

const  ReservarLayout = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <FormularioReserva />
    </div>
  )
}

export default ReservarLayout