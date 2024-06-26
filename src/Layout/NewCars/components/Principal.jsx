import React from 'react'
import unacolum from "../../../assets/img/unacolum.png"
import doscolum from "../../../assets/img/doscolum.png"
import { useEffect, useState } from "react";
import Calender from "../../../assets/img/Calender.png"
import volante from "../../../assets/img/volante.png"
import Combustible from "../../../assets/img/Combustible.png"
import usuarios from "../../../assets/img/usuarios.png"
import estrella from "../../../assets/img/estrella.png"
import emptystar from "../../../assets/img/emptystar.png"
import Lupa from "../../../assets/img/Lupa.png"
import flechatop from "../../../assets/img/flechatop.png"
import Tesla from "../../../assets/img/Tesla.png"
import Ford from "../../../assets/img/Ford.png"
import Honda from "../../../assets/img/Honda.png"
import Chevrolet from "../../../assets/img/Chevrolet.png"
import coupe from "../../../assets/img/coupe.png"
import Kia from "../../../assets/img/Kia.png"
import aos from "aos"
import { useNavigate } from 'react-router-dom';
import { useContextCar } from '../../../Context/Context';
import FilterSection from '../../../Components/Filtro/FilterSection ';
function Principal() {
    const [open, setOpen]= useState(false);
    const [opentwo, setOpenTwo]= useState(false);
    const Change =()=>{
        setOpen(!open)
    }
    const ChangeTwo =()=>{
        setOpenTwo(!opentwo)
    }

    return (
        <div className='  xl:flex xl:max-w-full xl:justify-between md:flex justify-between xl:m-0 xl:py-20 xl:px-20 max-w-full bg-black m-0 text-white gap-7 md:py-5 md:px-5 py-5 px-5'>
         <section data-aos="flip-up" className=" xl:w-[28rem]  ">
            <section className=' xl:py-5 xl:px-6 rounded-lg bg-[#071620] md:py-5 md:px-6 md:text-2xl px-5 py-10 '>
                <div className=' bg-transparent xl:text-[2rem] border-b md:text-2xl text-2xl'>Filtrar</div>
                 <div className=' xl:flex xl:w-full xl:gap-5 rounded-lg hover:bg-slate-500 items-center xl:mt-4 xl:h-9 xl:px-7 flex px-5 py-3 gap-5 text-2xl xl:py-1 lg:px-2 md:flex md:px-3 md:gap-2 md:py-1 md:items-center bg-[#152836] mt-4 '>
                    <img className="bg-transparent md:w-5 md:h-5 w-5 h-5" src={Lupa} alt="Buscar" /> 
                    <input className=" bg-transparent xl:text-2xl" type="text" placeholder='Buscar' />
                </div>
                <div className=' bg-[#071620] mt-5 '> 
                    <div className=' bg-[#152836] '>
                        <div className=' bg-[#152836] flex justify-between border-b items-center cursor-pointer px-5' onClick={ChangeTwo}>
                            <h2 className="bg-transparent py-3 text-[18px] " >Años</h2>
                            <img className={`bg-transparent w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" />
                        </div>
                        {opentwo?
                        <div className="bg-[#152836] flex gap-4 flex-col text-[18px] mt-3 px-5 py-3">   
                            <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" for="checkbox2016"><input className="items-center mr-2" type="checkbox" id='checkbox2016' />2016</label>
                            <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2017"><input className="items-center mr-2" type="checkbox" id='checkbox2017' />2017</label>
                            <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2018"><input className="items-center mr-2" type="checkbox" id='checkbox2018' />2018</label>
                            <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2019"><input className="items-center mr-2" type="checkbox" id='checkbox2019' />2019</label>
                            <a className="bg-transparent text-blue-500" href="#">Ver Más</a>
                        </div>
                        : ""}
                    </div>
                    <div className= {` bg-[#152836] text-2xl items-center py-5 `}>
                        <div className=' bg-[#152836] flex justify-between items-center border-b mt-5 px-5 cursor-pointer' onClick={Change}>
                            <h2 className="bg-transparent text-[18px]" >Marca</h2>
                            <img className={`bg-transparent w-5 h-5 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" />
                        </div>
                        {open? 
                        <div className= "bg-transparent ">
                            <div className=' bg-transparent px-5 '>
                                <input className="bg-transparent border w-full hover:bg-slate-600 transition-all rounded-xl mt-3 px-3 py-2 text-[18px]" type="text" placeholder='Buscar'/>
                            </div>
                            
                            <div className= {` flex gap-4 flex-col mt-3 bg-transparent text-[18px] px-5 py-3`}>   
                                <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" for="checkbox2016"><input className="items-center mr-2" type="checkbox" id='checkbox2016' />Audi</label>
                                <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2017"><input className="items-center mr-2" type="checkbox" id='checkbox2017' />BMW</label>
                                <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2018"><input className="items-center mr-2" type="checkbox" id='checkbox2018' />Chevrolet</label>
                                <label className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2019"><input className="items-center mr-2" type="checkbox" id='checkbox2019' />Ford</label>
                                <a className="bg-transparent text-blue-500" href="#">Ver Más</a>
                            </div>
                        </div> : ""}

                    </div>
                    <section className=' bg-[#152836] grid grid-cols-2 items-center m-auto md:grid md:grid-cols-1 gap-4'>
                        <div className=' bg-[#152836] md:text-2xl text-[1.3rem] md:mt-5 mt-5'>
                            <div className=' bg-[#152836] flex justify-between border-b items-center md:px-5 px-2 cursor-pointer'>
                                <h2 className="bg-transparent py-3 text-[18px]">Modelo</h2>
                                <img className=" bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className=' bg-[#152836] md:text-2xl cursor-pointer text-[1.3rem] md:mt-5 mt-5'>
                            <div className=' bg-[#152836] flex justify-between border-b items-center md:px-5 px-2  '>
                                <h2 className="bg-transparent py-3 text-[18px]">Estado</h2>
                                <img className="flechas bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className=' bg-[#152836] md:text-2xl cursor-pointer text-[1.3rem] mt-5'>
                            <div className=' bg-transparent flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-transparent py-3 text-[18px]">Transmisión</h2>
                                <img className=" bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className=' bg-[#152836] md:text-2xl cursor-pointer text-[1rem] mt-5'>
                            <div className=' bg-transparent flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-transparent py-3 text-[18px]">Tipo de Combustible</h2>
                                <img className=" bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className=' bg-[#152836] md:text-2xl mt-10 md:mt-5 cursor-pointer text-[1.3rem]'>
                            <div className=' bg-transparent flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-transparent py-3 text-[18px]">Drivetrain</h2>
                                <img className=" bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className=' bg-[#152836] md:text-2xl md:mt-5 mt-10 cursor-pointer text-[1rem]'>
                            <div className=' bg-transparent flex justify-between border-b items-center md:px-5 px-2  '>
                                <h2 className="bg-transparent py-3 text-[18px]">Capacidad de Pasajeros</h2>
                                <img className=" bg-transparent w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>

                    </section>
                    <div className=' mt-10 bg-transparent'>
                        <p className="bg-transparent text-[18px]">Rango de Precio</p>
                        <span className="bg-transparent text-blue-500 text-[18px] ">$.0 - $3,000,000.00</span>
                        <div className=' relative flex justify-between bg-transparent cursor-pointer'>
                            <div className=' w-14 h-14 z-10 rounded-full bg-blue-500'></div>
                            <div className=' absolute bg-gray-700 items-center top-0 bottom-0 h-4 m-auto w-full text-center'></div>
                            <div className=' w-14 h-14 z-10 rounded-full right-0 bg-blue-500'></div>
                        </div>
                        <button className=' border border-blue-500 mt-4 w-full rounded-sm py-3 text-blue-500 hover:bg-gray-100 transition-all' >Restablecer Filtro</button>
                    </div>
                </div>

                
            </section>
           

        </section>
        <section className=' xl:max-w-[70rem] mt-10 m-5  w-full' >
            <div className=" md:block ">
                <div className=' hidden md:hidden lg:flex xl:justify-between hover:bg-gray-600 rounded-lg transition-all xl:items-center xl:h-16 items-center xl:bg-gray-800 xl:w-full px-5 gap-4 text-2xl py-3 xl:gap-6 md:flex md:gap-4 md:px-4 md:py-3 md:text-2xl md:items-center bg-gray-700'>
                    <img className="xl:w-4 w-7 h-7 bg-gray-700 xl:h-4 xl:ml-4 xl:bg-transparent md:w-4 md:h-4 md:bg-transparent" src={Lupa} alt="" />
                    <input className="xl:text-3xl w-full bg-gray-700 xl:w-full   xl:bg-transparent xl:focus:outline-none md:bg-transparent" type="text" placeholder='Buscar' />
                </div>
                <div className=' xl:mx-auto xl:mt-8 xl:mb-8 mt-5 mb-5 '>
                    <div className=' flex justify-between w-full xl:flex xl:justify-between items-center gap-2 lg:justify-between xl:items-center xl:gap-6 md:w-full xl:relative md:flex md:justify-between md:relative md:gap-1 md:items-center md:mt-3 md:mb-3'>
                        <div>
                            <h2 className=" xl:top-0 xl:left-0 mr-10 xl:mt-2 xl:mb-2 xl:ml-2 xl:mr-2 xl:text-3xl text-[29px] xl:text-center md:left-0 md:text-[2rem] md:mr-1">6 Resultados</h2>
                        </div>
                        <div className="flex items-center hidden lg:flex gap-2">
                            <select className="xl:w-64 rounded-lg cursor-pointer md:px-2 xl:bg-gray-800 w-40 xl:border-none md:w-[8rem] bg-gray-700 md:py-1" name="Orden" id="Orden">
                                <option value="Ordenar Por">Ordenar Por</option>
                            </select>
                            <img className="cursor-pointer w-6 h-6" src={unacolum} alt="Ver" />
                            <img className="cursor-pointer w-6 h-6" src={doscolum} alt="Ver" />
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="lg:grid lg:grid-cols-2 m-10 ml-0">
                <div data-aos="fade-down-right" className=' mr-2  border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' w-full h-full lg:w-full hover:brightness-100 hover:contrast-125 lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={Tesla} alt="Tesla Car" />
                    </div>
                    <button className=' absolute -rotate-[40deg] top-5 -left-10 border bg-blue-500 py-1 w-40'>Destacado</button>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >Tesla Model 3 Standard Range Plus</h2>
                        <span className="text-blue-500 text-[1.5rem]">$56,690</span>
                        <h4>SFM, DO</h4>
                        <div className=" lg:text-[1rem] lg:grid xl:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-6">
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2020</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br /> Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Eléctrico</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>5</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>

                <div data-aos="fade-up-left" className='mr-2    border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' image w-full h-full hover:brightness-100 hover:contrast-125 lg:w-full lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={Ford} alt="Ford F-250 Super Duty" />
                    </div>
                    <button className=' absolute -rotate-[40deg] top-5 -left-10 border bg-blue-500 py-1 w-40'>Destacado</button>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >Ford F-250 Super Duty</h2>
                        <div className="flex items-center gap-3">
                            <span className="text-blue-500 text-[1.5rem]">$82,098</span>
                            <p className="line-through">$83,500</p>
                        </div>
                        <h4>SFM, DO</h4>
                        <div className="  lg:grid xl:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                            <div className='infos lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2021</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br /> Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Diesel</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>5</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>

                <div data-aos="flip-up" className=' mr-2   border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' w-full h-full lg:w-full hover:brightness-100 hover:contrast-125 lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={Honda} alt="Honda Pilot Touring 7-Passenger" />
                    </div>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >Honda Pilot Touring 7-Passenger</h2>
                        <span className="text-blue-500 text-[1.5rem]">$43,735</span>
                        <h4>SFM, DO</h4>
                        <div className="  lg:grid xl:flex md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-6">
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2021</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br />Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Gasolina</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>7</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>


                


                <div data-aos="flip-down" className='mr-2    border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' w-full h-full hover:brightness-100 hover:contrast-125 lg:w-full lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={Chevrolet} alt="Chevrolet Equinox LS" />
                    </div>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >Chevrolet Equinox LS</h2>
                        <span className="text-blue-500 text-[1.5rem]">$17,978</span>
                        <h4>SFM, DO</h4>
                        <div className="  lg:grid xl:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-6">
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2017</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br /> Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Gasolina</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>5</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>


                <div data-aos="zoom-in-down" className=' mr-2   border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' w-full h-full hover:brightness-100 hover:contrast-125 lg:w-full lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={Kia} alt="Kia Sorento S" />
                    </div>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >Kia Sorento S</h2>
                        <span className="text-blue-500 text-[1.5rem]">$29,791</span>
                        <h4>SFM, DO</h4>
                        <div className=" lg:grid xl:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-6">
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2021</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br /> Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Gasolina</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>7</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>

                <div data-aos="zoom-in-down" className=' mr-2   border border-solid  border-gray-700 lg:max-w-9xl xl: lg:flex lg:flex-col  relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                    <div className=' overflow-hidden xl:w-full'>
                        <img className=' w-full h-full hover:brightness-100 hover:contrast-125 lg:w-full lg:h-full xl:bg-gray-200 xl:w-full hover:scale-105 transition-all ease-linear cursor-pointer md:w-full' src={coupe} alt="MINI Clubman Cooper S" />
                    </div>
                    <div className=' xl:w-full md:mt-3 mt-5 xl:mt-0 lg:m-1 px-2 py-2'>
                        <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                        <h2 className="text-[2rem] md:text-[1.2rem]" >MINI Clubman Cooper S</h2>
                        <span className="text-blue-500 text-[1.5rem]">$35,850</span>
                        <h4>SFM, DO</h4>
                        <div className="  lg:grid xl:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-6">
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                <h5>2022</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                <img className="w-5 h-5" src={volante} alt="Volante" />
                                <h5 className="bg-transparent">Tracción <br /> Trasera</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                <h5>Gasolina</h5>
                            </div>
                            <div className=' lg:flex gap-1 md:flex items-center flex'>
                                <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                <h5>5</h5>
                            </div>
                        </div>

                        <hr/>
                        <section className=' lg:flex md:flex flex w-5 h-5 w-full'>
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={estrella} alt="Estrellas" />
                            <img src={emptystar} alt="Estrellas" />
                            <h4 className='text-[15px]'>(12 Reviews)</h4>
                        </section>
                    </div>
                </div>

                

                

            </div>
            
            <div className=' lg:flex justify-center gap-5 md:flex flex items-center'>
                <a href="#"><img className=' -rotate-90 border border-blue-500 px-2 md:w-[2rem] md:h-[2rem]' src={flechatop} alt="Anterior" /></a>
                <a href="#"><button className=' border bg-blue-500 border-blue-500 w-[4rem] h-[3rem] py-3'>1</button></a>
                <a href="#"><button className=' border border-blue-500 w-[4rem] py-3'>2</button></a>
                <a href="#"><img className=' rotate-90 border border-blue-500 px-2 md:w-[2rem] md:h-[2rem]' src={flechatop} alt="Siguiente" /></a>
            </div>
        </section>

    </div>
    )
}

export default Principal