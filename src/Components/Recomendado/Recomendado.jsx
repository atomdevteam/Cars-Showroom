
import React, { useState, useEffect } from 'react';
import Modal from './modal';
import FormularioReserva from '../FormularioReserva/FormularioReserva';
import { useContextCar } from '../../Context/Context';
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";


const Recomendado = () => {
    const { user, WhichRole, ListCar, SerchingCar, setAvailable, isFiltro } = useContextCar()
    const [showModal, setShowModal] = useState(false);
    const [SeeCar, setSeeCar] = useState([])
    const navigate = useNavigate();

    const handleOpenModal = (car) => {
        setAvailable(car)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const cars = [
        {
            id: 1,
            name: "2023 Tesla Model 3",
            price: "US$ 35,000",
            imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg"
        },
        {
            id: 2,
            name: "2021 F-250 Super Duty",
            price: "US$ 82,098",
            imageUrl: "https://i.ibb.co/hynQ3wm/Ford.png"
        },
        {
            id: 3,
            name: "2021 Honda Pilot",
            price: "US$ 43,735",
            imageUrl: "https://i.ibb.co/dcKjhRd/Honda.png"
        },
        {
            id: 4,
            name: "2022 Tesla Model 3",
            price: "US$ 30,000",
            imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg"
        },
        {
            id: 5,
            name: "2024 Toyota Cross",
            price: "US$ 48,000",
            imageUrl: "https://i.ibb.co/7NQYFYp/toyota.webp"
        },
        {
            id: 6,
            name: "2025 Toyota C-HR",
            price: "US$ 32,000",
            imageUrl: "https://i.ibb.co/HdRMkvM/toyota2.jpg"
        },
        {
            id: 7,
            name: "2024 Chevrolet",
            price: "US$ 30,000",
            imageUrl: "https://i.ibb.co/vzmDRtc/chevrolet-2024-jeep.jpg"
        },
        {
            id: 8,
            name: "2024 Toyota Cross",
            price: "US$ 48,000",
            imageUrl: "https://i.ibb.co/PQs6FCg/fiat1.jpg"
        },
        {
            id: 9,
            name: "2025 Toyota C-HR",
            price: "US$ 32,000",
            imageUrl: "https://i.ibb.co/DLS2dWZ/Kia-Niro1.jpg"
        },
        {
            id: 10,
            name: "2022 Tesla Model 3",
            price: "US$ 30,000",
            imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg"
        },
        {
            id: 11,
            name: "2024 Toyota Cross",
            price: "US$ 48,000",
            imageUrl: "https://i.ibb.co/7NQYFYp/toyota.webp"
        },
        {
            id: 12,
            name: "2025 Toyota C-HR",
            price: "US$ 32,000",
            imageUrl: "https://i.ibb.co/fGkRFJ4/posher1.webp"
        }
    ];


    const handleAgregarAuto = () => {
        window.scrollTo(0, 0);
        navigate('/admin/CarSale')
    }

    useEffect(() => {
        if (isFiltro === true) {
            setSeeCar([...SerchingCar]);

        }

        if (isFiltro === false) {
            console.log("holaaaaaaaaaaaaaaaa")
            setSeeCar([...ListCar])
        }

    }, [isFiltro])

    useEffect(() => {
        if (isFiltro === false && ListCar.length > 0) {
            console.log("Datos no filtrado");
            console.log(ListCar);
            setSeeCar([...ListCar]);
        }
    }, [isFiltro, ListCar]);
    
    useEffect(() => {
        console.log("Datos filtrados o No");
        console.log(SeeCar);
    }, [SeeCar]);

    return (
        <div className="bg-transparent z-50 flex justify-center md:m-10 items-center xl:mt-36 max-md:px-5 bg-[#0B0C10]" >

            <div className="flex flex-col mt-3 justify-between  z-50 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full">


                <div className="flex">
                    <div className="text-2xl mt-3 font-bold text-white ">
                        Autos disponibles

                    </div>

                    {/* {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                        <div className="px-3 py-2   text-xs leading-4">
                            <button onClick={() => handleAgregarAuto()}
                                className="flex  px-3 py-1 text-2xl mx-2 border text-white rounded transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">

                                <div className='mx-2'>Agregar autos </div>
                                <FaPlus className=' mt-1.5 ' />
                            </button>
                        </div>
                    )} */}

                    {/* <button class="mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Agregar Auto
                    </button> */}

                </div>

                <div className='flex w-full mt-3 px-6 py-3 font-bold  lg:text-2xl'>

                </div>

                <div className="flex w-full mt-3 px-6 py-3 justify-end font-bold  lg:text-2xl ">

                    <div className="flex text-blue-500 items-center">
                        <a href="#" className="text-[1rem]">Ver más</a>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4707172754d78e0e475b23989d8e8c6a800962b1b776c74f53e1cf37665d2790?"
                            className="w-[18px]"
                        />
                    </div>

                </div>

                <div className="mt-6 max-md:max-w-full">
                    <div className="">

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3    ">
                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="flex items-center justify-center text-2xl border text-white rounded transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">

                                    <div className="">
                                        <button onClick={() => handleAgregarAuto()}
                                        >
                                            <FaPlus className='mx-40 mt-4 text-4xl' />
                                            <div className='text-4xl m-5 '>Agregar auto nuevo </div>

                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* 
                            flex gap-2  max-md:flex-col max-md:gap-0 -> Elimine eso
                            y le agruegue el grid
                            y de la linea 92 elimine w-[40%]

                            Mapear cada elemento del array y renderizarlos */}
                            {SeeCar.map((car, index) => (
                                <div key={index} className="flex flex-col  max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                        <button onClick={() => handleOpenModal(car)}>
                                            <img
                                                loading="lazy"
                                                srcSet={car.Sale.Multimedia.Imagen[0]}
                                                className="object-cover absolute inset-0 size-full"
                                                alt={car.Sale.DetalleCoche.Titulo}
                                            />
                                        </button>

                                        <div className="flex absolute inset-x-0 bottom-0 text-sm px-2.5 gap-20 py-5   bg-black bg-opacity-30 max-md:mt-52">
                                            <div className="flex-auto">{car.Sale.DetalleCoche.Titulo}</div>
                                            <div className="">{car.Sale.Precio.Precio}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>


                </div>
            </div>

            <Modal showModal={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Recomendado;
