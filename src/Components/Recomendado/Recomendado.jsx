
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
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">

                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>
                                        <img
                                            loading="lazy"
                                            srcSet="https://i.ibb.co/KmTjKbL/Tesla.jpg"
                                            className="object-cover absolute inset-0 size-full"
                                            alt="Tesla"
                                        />
                                    </button>

                                    <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto">2023 Tesla Model 3</div>
                                        <div className="flex-auto">US$ 35,000</div>
                                    </div>



                                </div>
                            </div>

                            <div className="flex flex-col  w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}> <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/hynQ3wm/Ford.png"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative  gap-4 px-2 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto">2021 F-250 Super Duty</div>
                                        <div className="flex-auto">US$ 82,098</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}> <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/dcKjhRd/Honda.png"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto"> 2021 Honda Pilot </div>
                                        <div className="flex-auto">US$ 43,735</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-5 mt-6 max-md:flex-col max-md:gap-0 ">

                            <div className="flex flex-col w-[40%]  max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>  <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/KmTjKbL/Tesla.jpg"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-8 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto ">2022 Tesla Model 3</div>
                                        <div className="flex-auto">US$ 30,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>  <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/7NQYFYp/toyota.webp"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative  gap-3 px-2 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto">2024 Toyota Cross</div>
                                        <div className="flex-auto">US$ 48,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}> <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/HdRMkvM/toyota2.jpg"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto"> 2025 Toyota C-HR </div>
                                        <div className="flex-auto">US$ 32,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-6 max-md:flex-col max-md:gap-0 ">

                            <div className="flex flex-col w-[40%]  max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>
                                        <img
                                            loading="lazy"
                                            srcSet="https://i.ibb.co/vzmDRtc/chevrolet-2024-jeep.jpg"
                                            className="object-cover absolute inset-0 size-full"
                                        /></button>
                                    <div className="flex relative gap-8 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto ">2024 chevrolet</div>
                                        <div className="flex-auto">US$ 30,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}> <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/PQs6FCg/fiat1.jpg"
                                        className="object-cover absolute inset-0 size-full"
                                    /></button>
                                    <div className="flex relative  gap-3 px-2 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto">2024 Toyota Cross</div>
                                        <div className="flex-auto">US$ 48,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>  <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/DLS2dWZ/Kia-Niro1.jpg"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto"> 2025 Toyota C-HR </div>
                                        <div className="flex-auto">US$ 32,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-6 max-md:flex-col max-md:gap-0 ">

                            <div className="flex flex-col w-[40%]  max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>   <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/KmTjKbL/Tesla.jpg"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-8 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto ">2022 Tesla Model 3</div>
                                        <div className="flex-auto">US$ 30,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>  <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/7NQYFYp/toyota.webp"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative  gap-3 px-2 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto">2024 Toyota Cross</div>
                                        <div className="flex-auto">US$ 48,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden relative flex-col rounded-lg grow pt-20 text-lg text-white aspect-[1.15] max-md:mt-6">
                                    <button onClick={handleOpenModal}>   <img
                                        loading="lazy"
                                        srcSet="https://i.ibb.co/fGkRFJ4/posher1.webp"
                                        className="object-cover absolute inset-0 size-full"
                                    /> </button>
                                    <div className="flex relative gap-5 px-2.5 py-4 mt-32 bg-black bg-opacity-30 max-md:mt-44">
                                        <div className="flex-auto"> 2025 Toyota C-HR </div>
                                        <div className="flex-auto">US$ 32,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>
            </div>

            <Modal showModal={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Recomendado;
