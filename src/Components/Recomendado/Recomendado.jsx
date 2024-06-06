
import React, { useState } from 'react';
import Modal from './modal';
import FormularioReserva from '../FormularioReserva/FormularioReserva';
import { useContextCar } from '../../Context/Context';
import { FaEdit } from "react-icons/fa";
const vehicles = [
    {
        imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg",
        title: "2023 Tesla Model 3",
        price: "US$ 35,000"
    },
    {
        imageUrl: "https://i.ibb.co/hynQ3wm/Ford.png",
        title: "2021 F-250 Super Duty",
        price: "US$ 82,098"
    },
    {
        imageUrl: "https://i.ibb.co/dcKjhRd/Honda.png",
        title: "2021 Honda Pilot",
        price: "US$ 43,735"
    },
    {
        imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg",
        title: "2022 Tesla Model 3",
        price: "US$ 30,000"
    },
    {
        imageUrl: "https://i.ibb.co/7NQYFYp/toyota.webp",
        title: "2024 Toyota Cross",
        price: "US$ 48,000"
    },
    {
        imageUrl: "https://i.ibb.co/HdRMkvM/toyota2.jpg",
        title: "2025 Toyota C-HR",
        price: "US$ 32,000"
    },
    {
        imageUrl: "https://i.ibb.co/vzmDRtc/chevrolet-2024-jeep.jpg",
        title: "2024 chevrolet",
        price: "US$ 30,000"
    },
    {
        imageUrl: "https://i.ibb.co/PQs6FCg/fiat1.jpg",
        title: "2024 Toyota Cross",
        price: "US$ 48,000"
    },
    {
        imageUrl: "https://i.ibb.co/DLS2dWZ/Kia-Niro1.jpg",
        title: "2025 Toyota C-HR",
        price: "US$ 32,000"
    },
    {
        imageUrl: "https://i.ibb.co/KmTjKbL/Tesla.jpg",
        title: "2022 Tesla Model 3",
        price: "US$ 30,000"
    },
    {
        imageUrl: "https://i.ibb.co/7NQYFYp/toyota.webp",
        title: "2024 Toyota Cross",
        price: "US$ 48,000"
    },
    {
        imageUrl: "https://i.ibb.co/fGkRFJ4/posher1.webp",
        title: "2025 Toyota C-HR",
        price: "US$ 32,000"
    }
];

const Recomendado = () => {
    const { user, WhichRole } = useContextCar()
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="bg-transparent z-50 flex justify-center md:m-10 items-center xl:mt-36 max-md:px-5 bg-[#0B0C10]" >

            <div className="flex flex-col mt-3  z-50 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl font-bold text-white ">
                    Autos recomendados
                </div>
                <div className="flex w-full mt-3 px-6 py-3 justify-between font-bold  lg:text-2xl  ">
                    <div className="flex  gap-2 md:gap-16 text-blue-500 fo ">
                        <button className="border-b p-2 px-4 border-blue-500">
                            Nuevo
                        </button>

                        <button className="opacity-55 p-2 px-4">
                            Usado
                        </button>
                    </div>
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
                    <div className="px-5">
                        {Array.from({ length: Math.ceil(vehicles.length / 3) }).map((_, rowIndex) => (



                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-6" key={rowIndex}>

                                {vehicles
                                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                                    .map((vehicle, index) => (
                                        <VehicleCard key={index} {...vehicle} handleOpenModal={handleOpenModal} />
                                    ))}
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <Modal showModal={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Recomendado;


function VehicleCard({ imageUrl, title, price, handleOpenModal }) {
    return (
        <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                <div onClick={handleOpenModal} className="cursor-pointer">
                    <img
                        loading="lazy"
                        srcSet={imageUrl}
                        className="object-cover absolute inset-0 size-full"
                        alt={title}
                    />
                </div>
                <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                    <div className="flex-auto">{title}</div>
                    <div className="flex-auto">{price}</div>
                </div>
            </div>
        </div>
    );
}
