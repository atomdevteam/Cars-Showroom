import React, { useEffect, useState } from 'react'
import { useContextCar } from '../../Context/Context'
import Calender from '../../assets/img/Calender.png'
import volante from "../../assets/img/volante.png"
import Combustible from "../../assets/img/Combustible.png"
import usuarios from "../../assets/img/usuarios.png"
import estrella from "../../assets/img/estrella.png"
import Tesla from "../../assets/img/Tesla.png"
import emptystar from "../../assets/img/emptystar.png"
const Modal = ({ isOpen, setIsOpen, setListComparar, ListComparar }) => {

    const { ListCar, Formatnumber } = useContextCar()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    const handleAddAutos = (e, Car) => {
        e.preventDefault()
        if (ListComparar.length >= 3) {
            alert('Solo puede agregar dos autos');
        } else {
     
            setListComparar([...ListComparar, Car]);
        }
    }


    return (
        <>
            {isOpen &&
                <div className='fixed  inset-0 flex items-center justify-center z-50 mx-8 sm:mx-0 min-h-screen w-full text-white'>
                    <div className="relative bg-black rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4" >
                        <div className="px-6 py-4">
                            <h3 className="text-lg leading-6 font-medium ">Selecione dos auto para comparar</h3>
                        </div>

                        <div className="prose max-w-screen-md p-6 overflow-y-auto" style={{ maxHeight: '70vh', backgroundColor: 'black', borderRadius: '0.375rem', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div className=" xl:max-w-[50rem] mt-10 m-10">


                                {
                                    ListCar.map((dato, index) => (
                                        <div key={index} className='cursor-pointer  border border-solid px-3 py-1 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                                            <div className=' overflow-hidden'>
                                                <img src={dato.Sale.Multimedia.Imagen} className=' w-full h-full lg:w-full lg:h-full xl:w-full xl:h-full xl:bg-gray-200 hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' alt="Jeep Wrangler Unlimited Islander" />
                                            </div>
                                            <div className=' lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                                                {/* Condicion */}
                                                <div className='flex justify-between mb-2'>
                                                    <button className="border border-blue-500 text-blue-500 px-5" >{dato.Sale.DetalleCoche.Condicion}</button>
                                                    <button onClick={(e) => handleAddAutos(e,dato)} className="bg-blue-700 px-5" >Agregar</button>
                                                </div>


                                                {/* Titulo */}
                                                <h2 className="text-[2rem] md:text-[1.2rem]" >{dato.Sale.DetalleCoche.Titulo}</h2>
                                                {/* Precio */}
                                                <span className="text-blue-500 text-[1.5rem]">${Formatnumber(dato.Sale.Precio.Precio)}</span>
                                                {/* Ubicacion */}
                                                <h4>{dato.Sale.Direccion.Ubicacion}</h4>
                                                <div className=" lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                                        <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                                        {/*Year */}
                                                        <h5>{dato.Sale.DetalleCoche.Year}</h5>
                                                    </div>
                                                    <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                                        <img className="w-5 h-5" src={volante} alt="Volante" />
                                                        {/* DriverTrain */}
                                                        <h5 className="bg-transparent">{dato.Sale.DetalleMotor.DriverTrain}</h5>
                                                    </div>
                                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                                        <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                                        <h5>{dato.Sale.DetalleMotor.TipoCombustimble}</h5>
                                                    </div>
                                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                                        <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                                        {/* Capacidad de pasajero */}
                                                        <h5>{dato.Sale.DetalleCoche.Capacidad}</h5>
                                                    </div>
                                                </div>

                                                <hr />
                                                <section className=' lg:flex md:flex flex'>
                                                    <img src={estrella} alt="Estrellas" />
                                                    <img src={estrella} alt="Estrellas" />
                                                    <img src={estrella} alt="Estrellas" />
                                                    <img src={estrella} alt="Estrellas" />
                                                    <img src={emptystar} alt="Estrellas" />
                                                    <h4>(12 Reviews)</h4>
                                                </section>
                                            </div>
                                        </div>
                                    ))
                                }




                            </div>
                        </div>
                        <div className="bg-black px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">Accept</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Modal