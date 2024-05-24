import React from 'react'
import Teslalogo from "../../assets/img/Teslalogo.png"
import Peugeotlogo from "../../assets/img/Peugeotlogo.png"
import Volvologo from "../../assets/img/Volvologo.png"
import Hyundailogo from "../../assets/img/Hyundailogo.png"
import Fiatlogo from "../../assets/img/Fiatlogo.png"
import Audilogo from "../../assets/img/Audilogo.png"
function Compañias() {
  return (
    <div className='w-full py-6 items-center'>
        <div className='md:flex justify-between items-center  w-full text-center '> 
            <img data-aos="zoom-in-left" className='m-auto mb-4 md:w-[100px]' src={Teslalogo} alt="Tesla" />
            <img data-aos="zoom-in-right" className='m-auto md:w-[100px]' src={Audilogo} alt="Audi" />
            <img data-aos="zoom-in-left" className='m-auto mt-8 md:w-[100px]' src={Fiatlogo} alt="Fiat" />
            <img data-aos="zoom-in-right" className='m-auto mt-8 md:w-[100px]' src={Hyundailogo} alt="Hyundai" />
            <img data-aos="zoom-in-left" className='m-auto md:w-[100px]' src={Peugeotlogo} alt="Peugeot" />
            <img data-aos="zoom-in-right" className='m-auto md:w-[100px]' src={Volvologo} alt="Volvo" />
        </div>
        
    </div>
  )
}

export default Compañias