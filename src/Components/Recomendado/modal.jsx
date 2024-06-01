// Modal.js
import React, { useState, useEffect } from 'react';
// import './Modal.css';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import FormularioReserva from '../FormularioReserva/FormularioReserva';

const Modal = ({ showModal, handleClose }) => {
const navigate = useNavigate();

    const handlFormulario = () => {
        navigate('/admin/FormularioReserva')
    }

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [showModal])


    return (
        <>
            {showModal &&
                <div className='fixed  inset-0 flex items-center justify-center z-50 mx-8 sm:mx-0 min-h-screen w-full text-white backdrop-blur-sm'>
                    <div className="relative bg-gray-900  rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4" >
                        <div className="flex flex-col px-7 w-full max-md:px-5 max-md:max-w-full m-4">

                            <div className="flex gap-5 text-4xl  max-md:text-2xl font-extrabold text-white max-md:flex-wrap max-md:max-w-full">
                                <div className="flex-auto">Tesla model 3</div>

                                <IoMdClose className='cursor-pointer hover:bg-red-600 hover:rounded-full' onClick={handleClose} />
                            </div>
                            <div className="flex gap-1.5 self-start mt-6 text-xl font-bold ">
                                <div className="text-white">US$: </div>
                                <div className="text-gray-500">35,000</div>
                            </div>
                        </div>



                        <div className="prose max-w-screen-md p-6 overflow-y-auto" style={{ maxHeight: '70vh',  borderRadius: '0.375rem', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div className=" xl:max-w-[50rem] mt-10 m-10">

                                <div className="mt-5 w-full bg-white border-white border-solid border-[3px] min-h-[4px] max-md:max-w-full" />
                                <div className="self-center mt-14 w-full max-w-[502px] max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow whitespace-nowrap ">
                                                <div className="flex gap-3.5">
                                                    <div className="text-2xl font-bold text-white max-md:text-xl">Color:</div>
                                                    <div className="text-2xl text-white text-opacity-50 max-md:text-xl">Rojo</div>
                                                </div>
                                                <div className="flex gap-3 mt-6">
                                                    <div className="text-2xl font-bold text-white max-md:text-xl">Año:</div>
                                                    <div className="text-2xl text-white text-opacity-50 max-md:text-xl">2021</div>
                                                </div>
                                                <div className="flex gap-3.5 mt-7">
                                                    <div className="text-2xl font-bold text-white max-md:text-xl">Combustible:</div>
                                                    <div className="text-2xl text-white text-opacity-50 max-md:text-xl">Electrico</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col max-md:mt-10">
                                                <div className="flex gap-3.5">
                                                    <div className="text-2xl font-bold text-white max-md:text-xl">Capacidad:</div>
                                                    <div className="text-2xl text-white text-opacity-50 max-md:text-xl">5 / P</div>
                                                </div>
                                                <div className="flex gap-3.5 mt-6 whitespace-nowrap ">
                                                    <div className="text-2xl font-bold text-white max-md:text-xl">Condición:</div>
                                                    <div className="text-2xl text-white text-opacity-50 max-md:text-xl">Nuevo</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 w-full bg-white border-white border-solid border-[3px] min-h-[4px] max-md:mt-10 max-md:max-w-full" />

                                <div className="flex flex-col px-8 mt-5 w-full text-white max-md:px-5 max-md:max-w-full">
                                    <div className="text-3xl max-md:max-w-full">Descripción</div>
                                    <div className="px-3 pt-4 pb-28 mt-4 text-xl rounded-lg bg-white bg-opacity-30 text-white text-opacity-90 max-md:pr-5 max-md:max-w-full ">
                                        Disfruta de una cabina silenciosa gracias al vidrio acústico de 360 grados.
                                    </div>
                                    <div className="justify-center self-center px-7 py-4 mt-6 text-3xl max-md:text-xl whitespace-nowrap rounded-lg bg-sky-600 bg-opacity-60 max-md:px-5 cursor-pointer"

                                        onClick={handlFormulario} >

                                        Reservar
                                    </div>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>

            }
        </>


    );
};

export default Modal;
