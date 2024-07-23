import React from 'react';
import { useEffect } from 'react';
import { useContextCar } from '../../Context/Context';

import { IoMdClose } from "react-icons/io";
const ReservationModal = ({ showModal, handleClose, reserva }) => {

    const { Formatnumber } = useContextCar();

    if (!showModal) return null;


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

        <div className='fixed inset-0 flex items-center justify-center z-50  text-white backdrop-blur-sm '>


            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>


            <div className="bg-gray-900 rounded-lg p-6 z-10 max-md:p-4 max-sm:p-2 max-md:rounded-md max-sm:rounded-sm  ">


                <div className='flex text-2xl mt-5 max-md:text-2xl font-extrabold text-white max-md:flex-wrap max-md:max-w-full justify-between '>
                    <h2 className="flex-auto">Detalles de la Reserva
                    </h2> <IoMdClose className='cursor-pointer mx-10 hover:bg-red-600 hover:rounded-full  ' onClick={handleClose} />
                </div>

                <div className="flex gap-3 mt-2">
                    <div className="text-lg font-bold text-white max-md:text-xl">Fecha:</div>
                    <div className="text-lg text-white text-opacity-50 max-md:text-xl"> {reserva?.informationUser.ReservationDate}</div>
                </div>


                <div className="mt-5 w-full bg-white border-white border-solid border-[3px] min-h-[4px] max-md:mt-10 max-md:max-w-full" />

                <div className='flex mt-4 gap-8'>


                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">


                        <div className="flex flex-col grow whitespace-nowrap ">
                            <div className="flex gap-3">
                                <div className="text-lg font-bold text-white max-md:text-xl">Nombre:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationUser.nameUser}</div>
                            </div>
                            <div className="flex gap-3 mt-1">
                                <div className="text-lg font-bold text-white max-md:text-xl">Teléfono:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationUser.phoneUser}</div>
                            </div>
                            <div className="flex gap-3.5 mt-1">
                                <div className="text-lg font-bold text-white max-md:text-xl">Email:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationUser.emailUser}</div>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full gap-6 ">

                        <div className="flex flex-col grow whitespace-nowrap ">
                            <div className="flex gap-3">
                                <div className="text-lg font-bold text-white max-md:text-xl">Auto:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationVehicle.Titulo}</div>
                            </div>


                            <div className="flex gap-3.5 mt-1">
                                <div className="text-lg font-bold text-white max-md:text-xl">Año:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationVehicle.year}</div>
                            </div>

                            <div className="flex gap-3">
                                <div className="text-lg font-bold text-white max-md:text-xl">Color:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationVehicle.color}</div>
                            </div>

                            <div className="flex gap-3 mt-1">
                                <div className="text-lg font-bold text-white max-md:text-xl">Precio:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationVehicle.precio}</div>
                            </div>

                            <div className="flex gap-3 mt-1">
                                <div className="text-lg font-bold text-white max-md:text-xl">Condición:</div>
                                <div className="text-lg text-white text-opacity-50 max-md:text-xl">{reserva?.informationVehicle.condicion}</div>
                            </div>


                        </div>


                    </div>



                </div>

            </div>
        </div>
    );
};

export default ReservationModal;
