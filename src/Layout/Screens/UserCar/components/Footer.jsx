import React from 'react'
import logo from "../../../../assets/img/logo.png"
import facebook from "../../../../assets/img/facebook.png"
import Instagram from "../../../../assets/img/Instagram.png"
import youtube from "../../../../assets/img/youtube.png"
import logotwo from "../../../../assets/img/logotwo.png"
function Footer() {
  return (
    <div className=' max-w-full bg-gray-700'>
        <div className=' bg-transparent'>
            <img className=' items-center m-auto lg:py-10 bg-transparent' src={logotwo} alt="Logo" />
        </div>
        <hr />
        <section className=' lg:flex justify-center lg:gap-40 lg:py-10 bg-transparent md:grid md:grid-cols-2 md:px-10 md:py-10 md:gap-2 grid grid-cols-2 px-10 py-10' >
            <div className=' bg-transparent'>
                    <p className='bg-transparent'>SOBRE NOSOTROS</p>
                    <p className='bg-transparent'>FAQ</p>
                    <p className='bg-transparent'>CONTACTO</p>
            </div>
            <div className=' bg-transparent'>
                <p className='bg-transparent'>#12 Av.Antonio G. <br /> San Frac., Duarte, <br /> 31000, <br /> Rep. Dominicana.</p>
                <div className=' lg:flex lg:justify-between bg-transparent md:flex md:gap-3 flex gap-3'>
                    <a className='bg-transparent' href="#"><img className='bg-transparent' src={facebook} alt="Facebook" /></a>
                    <a className='bg-transparent' href="#"><img className='bg-transparent' src={Instagram} alt="Instagram" /></a>
                    <a className='bg-transparent' href="#"><img className='bg-transparent' src={youtube} alt="Youtube" /></a>
                </div>
            </div>
            <div className=' bg-transparent '>
                    <p className='bg-transparent' >SERVICIO AL CLIENTE</p>
                    <p className='bg-transparent'>info@car.com</p>
                    <p className='bg-transparent'>588-865-3730</p>
            </div>
        </section>
        <hr />
        <p className=' text-center py-10 bg-transparent'>2021 Atom Dev Team. All Rights Reserved</p>
    </div>
  )
}

export default Footer