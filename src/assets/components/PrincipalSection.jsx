import React from 'react'
import usertwo from "../img/usertwo.png"
import Calender from "../img/Calender.png"
import Honda from "../img/Honda.png"
import Tesla from "../img/Tesla.png"
import star from "../img/star.png"
import estrella from "../img/estrella.png"
import emptystar from "../img/emptystar.png"
import flechatop from "../img/flechatop.png"
import userthree from "../img/userthree.png"
import bigford from "../img/bigford.png"
function PrincipalSection() {


  return (
    <div className='md:m-10 m-3 '>
        <div data-aos="zoom-out-down" className='max-w-full overflow-hidden rounded-lg'>
            <img className='w-full hover:scale-125 transition-all cursor-pointer rounded-lg' src={bigford} alt="Ford" />
        </div>
        <section className='md:m-28 lg:m-48 xl:m-60 m-3'>
            <h1 data-aos="fade-down" className='lg:text-5xl md:text-3xl text-[1.5rem] mt-4 text-blue-500'>$82,098 - $92,050</h1>
            <div data-aos="fade-down-right" className='md:flex flex w-full bg-gray-900 md:px-5 px-1 py-1 md:py-5 gap-1 md:gap-10 items-center mt-16 rounded-md'>
                <div  data-aos="flip-left" className='bg-transparent'>
                    <img className='bg-transparent w-13 h-13' src={star} alt="Estrella" />
                    <p className='bg-transparent text-center text-blue-500'>12 Reviews</p>
                </div>
                <div className=' w-full bg-transparent'>
                    <div data-aos="flip-right" className='md:flex flex justify-between items-center md:justify-between w-full bg-transparent border-b'>
                        <div className='bg-transparent lg:text-4xl'>Comodidad</div>
                        <div className='md:flex bg-transparent flex'>
                            <img className='md:w-10 md:h-10 bg-transparent'   src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={emptystar} alt="Estrella" />
                        </div>
                    </div>
                    <div data-aos="flip-right" className='md:flex flex justify-between items-center md:justify-between w-full bg-transparent border-b mt-5'>
                        <div className='bg-transparent lg:text-4xl'>Dieseño</div>
                        <div className='md:flex bg-transparent flex'>
                            <img className='md:w-10 md:h-10 bg-transparent'src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                        </div>
                    </div>
                    <div data-aos="flip-right" className='md:flex flex justify-between items-center md:justify-between w-full bg-transparent border-b mt-5'>
                        <div className='bg-transparent lg:text-4xl'>Actuación</div>
                        <div className='md:flex bg-transparent flex'>
                            <img className='md:w-10 md:h-10 bg-transparent'src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                        </div>
                    </div>
                    <div data-aos="flip-right" className='md:flex flex justify-between items-center md:justify-between w-full bg-transparent border-b mt-5'>
                        <div className='bg-transparent lg:text-4xl'>Precio</div>
                        <div className='md:flex bg-transparent flex'>
                            <img className='md:w-10 md:h-10 bg-transparent'src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={emptystar} alt="Estrella" />
                        </div>
                    </div>
                    <div data-aos="flip-right" className='md:flex flex justify-between items-center md:justify-between w-full bg-transparent border-b mt-5'>
                        <div className='bg-transparent lg:text-4xl'>Fiabilidad</div>
                        <div className='md:flex bg-transparent flex'>
                            <img className='md:w-10 md:h-10 bg-transparent'src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={estrella} alt="Estrella" />
                            <img className='md:w-10 md:h-10 bg-transparent' src={emptystar} alt="Estrella" />
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
        <section className='md:m-28 lg:m-48 xl:m-60 mt-10 m-3'>
            <div  data-aos="flip-up" className='md:flex md:justify-between cursor-pointer flex justify-between bg-gray-900 md:px-10 md:py-7 px-2 py-1'>
                <p className='lg:text-3xl bg-transparent'>Ordenar Por</p>
                <img className='md:w-10 md:h-10 rotate-180 bg-transparent' src={flechatop} alt="Ver" />
            </div>
            <div className='mt-14'>
                <div className='md:flex gap-2 md:gap-10 flex border-b'>
                    <img data-aos="zoom-in" className='md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] lg:w-[7rem] lg:h-[7rem]' src={usertwo} alt="Usuario" />
                    <div data-aos="zoom-in-up">
                        <p>June 03 2021</p>
                        <h3>Ryan Carder</h3>
                        <p className='lg:text-1xl md:text-[0.8rem] text-[0.6rem] xl:text-2xl text-justify mb-7'>
                            Orci faucibus sit porttitor amet neque. Luctus ut maecenas urna pretium tristique aliquam,
                            ante. Ut scelerisque mauris consequat, ornare orci enim. Dolor velit, in nisl fermentum vel, tempor vitae neque, libero. Ac quam aliquam vel lectus. Quam dignissim vehicula gravida aliquam aliquam gravida tempus posuere. Volutpat facilisi nunc, quis enim urna est. Suspendisse amet, in blandit nec id mattis in consequat.
                            Mattis enim aliquet pellentesque vel, vitae id. Est et fermentum at tempus eget nibh ultrices.
                        </p>
                        <a className='text-blue-500' href="#">Read More</a>
                        <div className='md:flex mt-3 flex'>
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                        </div>
                    </div>
                </div>
                <div className='md:flex gap-2 md:gap-10 flex mt-5'>
                    <img data-aos="zoom-in" className='md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] lg:w-[7rem] lg:h-[7rem]' src={userthree} alt="Usuario" />
                    <div data-aos="zoom-in-up">
                        <p>June 02 2021</p>
                        <h3>Kaiya Lubin</h3>
                        <p className='lg:text-1xl md:text-[0.8rem] text-[0.6rem] xl:text-2xl text-justify mb-7'>
                            Orci faucibus sit porttitor amet neque. Luctus ut maecenas urna pretium tristique aliquam,
                            ante. Ut scelerisque mauris consequat, ornare orci enim. Dolor velit, in nisl fermentum vel, tempor vitae neque, libero. Ac quam aliquam vel lectus. Quam dignissim vehicula gravida aliquam aliquam gravida tempus posuere. Volutpat facilisi nunc, quis enim urna est. Suspendisse amet, in blandit nec id mattis in consequat.
                            Mattis enim aliquet pellentesque vel, vitae id. Est et fermentum at tempus eget nibh ultrices.
                        </p>
                        <a className='text-blue-500' href="#">Read More</a>
                        <div className='md:flex mt-3 flex'>
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                            <img src={estrella} alt="Estrella" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <form className='md:m-28 lg:m-48 xl:m-60 m-3 mt-16' action="#" >
            <h1 data-aos="zoom-out-up" className='xl:text-3xl'>Tu Reseña</h1>
            <textarea data-aos="zoom-out" className='bg-gray-900 w-full mt-3 md:mt-10 px-6 py-10 rounded-sm' name="Message" id="#Message" cols="30" rows="10" placeholder='Deja un mensaje aquí...'></textarea>
            <div className='xl:text-3xl'>
                <h1 data-aos="zoom-out-down" >Tu Clasificación</h1>
                <div className='md:flex cursor-pointer flex mt-2'>
                    <img data-aos="zoom-out-left" className='xl:w-[5rem] xl:h-[5rem]' src={emptystar} alt="Estrella" />
                    <img data-aos="zoom-out-left" className='xl:w-[5rem] xl:h-[5rem]' src={emptystar} alt="Estrella" />
                    <img data-aos="zoom-out-left" className='xl:w-[5rem] xl:h-[5rem]' src={emptystar} alt="Estrella" />
                    <img data-aos="zoom-out-left" className='xl:w-[5rem] xl:h-[5rem]' src={emptystar} alt="Estrella" />
                    <img data-aos="zoom-out-left" className='xl:w-[5rem] xl:h-[5rem]' src={emptystar} alt="Estrella" />
                </div>
            </div>
            <button data-aos="fade-up" className='bg-blue-500 mt-10 px-5 py-5 hover:bg-slate-400 hover:text-blue-500 transition-all'>Agregar una opinión</button>
        </form>
        <section className='md:m-28 lg:m-48 xl:m-60 m-3 mt-16'>
            <h1 data-aos="fade-zoom-in" className='md:text-6xl text-[1.5rem]'>Revisión Relacionada</h1>
            <div className='md:flex md:justify-between gap-10 mt-10'>
                <div data-aos="flip-left" className='md:w-full'>
                    <div className='overflow-hidden rounded-sm'>
                        <img className='w-full hover:scale-105 transition-all rounded-sm cursor-pointer' src={Honda} alt="Honda" />
                    </div>
                    <div className='py-5 px-5 lg:px-2 lg:py-5 xl:px-7 xl:py-14'>
                        <h1 className='xl:text-4xl'>Honda Pilot Touring 7-Passenger</h1>
                        <h1 className='xl:text-2xl mt-5 text-blue-500'>$43,735 - $44,560</h1>
                        <div className='md:grid md:grid-cols-2 items-center grid grid-cols-2  lg:text-[0.8rem] text-[0.7rem] xl:text-[1.3rem] mt-5 mb-5'>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>2021</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>Todas las ruedas motrices</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>Gasolina</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>7</p>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex flex'>
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={emptystar} alt="Estrella" />
                            <h3>(12 Reviews)</h3>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className='md:w-full'>
                    <div className='overflow-hidden'>
                        <img className='w-full hover:scale-105 transition-all cursor-pointer' src={Tesla} alt="Tesla" />
                    </div>
                    <div className='py-5 px-5 lg:px-2 lg:py-5 xl:px-7 xl:py-14'>
                        <h1 className='xl:text-4xl'>Tesla Model 3 Standard Range Plus</h1>
                        <h1 className='xl:text-2xl mt-5 text-blue-500'>$56,690 - $57,750</h1>
                        <div className='md:grid md:grid-cols-2 items-center grid grid-cols-2  lg:text-[0.8rem] text-[0.7rem] xl:text-[1.3rem] mt-5 mb-5'>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>2020</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>Tracción trasera</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>Electric</p>
                            </div>
                            <div className='md:flex items-center gap-2 flex'>
                                <img className='md:w-5 md:h-5' src={Calender} alt="" />
                                <p>5</p>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex flex'>
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={estrella} alt="Estrella" />
                            <img className='w-5 h-5' src={emptystar} alt="Estrella" />
                            <h3>(12 Reviews)</h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default PrincipalSection