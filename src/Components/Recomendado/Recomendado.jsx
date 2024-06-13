
import React, { useState } from 'react';
import Modal from './modal';
import FormularioReserva from '../FormularioReserva/FormularioReserva';

const Recomendado = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const cars =[
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

    

    return (
        <div className="bg-transparent z-50 flex justify-center md:m-10 items-center xl:mt-36 max-md:px-5 bg-[#0B0C10]" >

            <div className="flex flex-col mt-3  z-50 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl font-bold text-white ">
                    Autos disponibles
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

                   
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3   ">
                            {/* 
                            flex gap-2  max-md:flex-col max-md:gap-0 -> Elimine eso
                            y le agruegue el grid
                            y de la linea 92 elimine w-[40%]

                            Mapear cada elemento del array y renderizarlos */}
                            {cars.map((car, index) => (
                                <div key={index} className="flex flex-col  max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                        <button onClick={handleOpenModal}>
                                            <img
                                                loading="lazy"
                                                srcSet={car.imageUrl}
                                                className="object-cover absolute inset-0 size-full"
                                                alt={car.name}
                                            />
                                        </button>

                                        <div className="flex relative text-sm  px-2 gap-20  py-5 mt-36  bg-black bg-opacity-30 max-md:mt-52  ">
                                            <div className="flex-auto">{car.name}</div>
                                            <div className="">{car.price}</div>
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