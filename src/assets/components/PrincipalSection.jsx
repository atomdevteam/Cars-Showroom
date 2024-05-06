import React from 'react'
import { useState } from 'react'
import flechatop from "../img/flechatop.png"
function PrincipalSection() {
    const [open, setOpen] = useState(false)
    const [opentwo, setOpenTwo] = useState(false)
    const [openthree, setOpenThree] = useState(false)

    const change= ()=>{
        setOpen(!open)
    }
    const changetwo= ()=>{
        setOpenTwo(!opentwo)
    }
    const changethree= ()=>{
        setOpenThree(!openthree)
    }
  return (
    <div data-aos="fade-up-right" className='md:m-16 h-[90rem] md:h-[60rem] xl:m-48'>
        <h1 className='md:text-5xl mb-16 text-4xl m-16'>Lorem</h1>
        <section className='md:flex md:justify-between gap-10'>
            <div data-aos="fade-down-right" className='md:px-5 md:py-5 lg:px-5 lg:py-5 m-auto max-w-40 md:m-5'>
                <ul className='bg-gray-800 md:px-5 md:py-5 py-5 px-5 h-40 flex flex-col justify-between'> 
                    <li className='bg-transparent md:mb-3 border-b border-blue-500 text-blue-500'>Carro</li>
                    <li className='bg-transparent md:mb-3'>Comprar</li>
                    <li className='bg-transparent md:mb-3'>Vender</li>
                    <li className='bg-transparent md:mb-3'>Privacidad</li>
                </ul>
            </div>
            <div data-aos="flip-left" className='m-10 md:m-5 md:w-full '>
                <div className='bg-gray-900 cursor-pointer lg:max-w-full rounded-md'>
                    <div className='bg-gray-900 items-center md:flex md:justify-between md:px-4 md:py-4 border-b flex justify-between px-4 py-4' onClick={change}>
                        <h1 className='bg-transparent'>¿Cómo Comparar Coches?</h1>
                        <img className={`bg-transparent max-w-4 h-4 ${open? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                    </div>
                    {open ?
                    <div className='bg-gray-900 md:px-4 w-full md:py-4 px-4 py-4'>
                        <p className='bg-transparent text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt beatae expedita provident sint dolorum exercitationem,
                            dolores et numquam itaque tenetur. Pariatur saepe neque veniam, reiciendis laboriosam est sed porro.
                        </p>
                    </div>
                    : "" }
                </div>
                <div data-aos="flip-right" className='bg-gray-900 cursor-pointer rounded-md mt-14'>
                    <div className='bg-gray-900 items-center md:flex md:justify-between md:px-4 md:py-4 border-b flex justify-between px-4 py-4' onClick={changetwo}>
                        <h1 className='bg-transparent'>¿Dónde encontrar reseñas de autos?</h1>
                        <img className={`bg-transparent max-w-4 h-4 ${opentwo? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                    </div>
                    {opentwo ?
                    <div className='bg-gray-900 md:px-4 md:py-4 px-4 py-4'>
                        <p className='bg-transparent text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt beatae expedita provident sint dolorum exercitationem,
                            dolores et numquam itaque tenetur. Pariatur saepe neque veniam, reiciendis laboriosam est sed porro.
                        </p>
                    </div>
                    : ""}
                </div>
                <div data-aos="flip-up" className='bg-gray-900 cursor-pointer rounded-md mt-14'>
                    <div className='bg-gray-900 items-center md:flex md:justify-between md:px-4 md:py-4 border-b flex justify-between px-4 py-4' onClick={changethree}>
                        <h1 className='bg-transparent'>¿Qué causa el error web?</h1>
                        <img className={`bg-transparent max-w-4 h-4 ${openthree? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                    </div>
                    {openthree ?
                    <div className='bg-gray-900 md:px-4 md:py-4 px-4 py-4'>
                        <p className='bg-transparent text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt beatae expedita provident sint dolorum exercitationem,
                            dolores et numquam itaque tenetur. Pariatur saepe neque veniam, reiciendis laboriosam est sed porro.
                        </p>
                    </div>
                    : ""}
                </div>
               
            </div>
        </section>
    </div>
  )
}

export default PrincipalSection