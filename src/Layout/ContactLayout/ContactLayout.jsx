import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Location from '../../Components/Contact/Location'
import Navbar from '../NavBar/NavBar'

const ContactLayout = () => {
  return (
    <>
      <Navbar background={'dark:bg-[#12232E]'}/>
      <div className='bg-[#0B0C10] max-h-full '>


        <div className='flex flex-col mx-4 lg:ml-[6rem] lg:mr-[6rem] '>
          <Contact />
          <Location />
        </div>
      </div>  </>
  )
}

export default ContactLayout