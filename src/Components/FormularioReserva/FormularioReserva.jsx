import React from "react";
import { useState } from "react";



const FormularioReserva = () => {

    const [isOpen, setIosOpen] = useState(false);


    return (
        
        <div className="flex flex-col items-center px-16 py-20 bg-gray-900 max-md:px-5">
            <div className="mt-16 w-full max-w-[1229px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                            <div className="text-3xl text-white max-md:text-2xl">
                                Formulario para reserva o compra
                            </div>
                            <div className="flex flex-col pr-8 pl-2.5 mt-16 text-2xl font-bold max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                                <div className="text-white max-md:max-w-full">
                                    Tesla Model 3 2021
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://i.ibb.co/KmTjKbL/Tesla.jpg"
                                    className="mt-5 w-full rounded-lg max-md:max-w-full"
                                />
                                <div className="mt-4 felx text-white max-md:max-w-full">Precio </div>
                                <div className="flex gap-3.5 self-start mt-2">
                                    <div className="grow text-white">US$: </div>
                                    <div className="text-gray-500">35,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-24 text-base font-medium text-white max-md:mt-10 max-md:max-w-full">

                            <div className="py-2">
                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre completo" required />

                            </div>

                            <div className="py-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                            </div>

                            <div className="py-2">
                                <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                                <input
                                    type="text"
                                    name="telefono"
                                    id="telefono"
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Teléfono" required />

                            </div>

                            <div className="py-2">
                                <label htmlFor="Direccion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    id="direccion"
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Teléfono" required />

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <button className="justify-center px-7 py-4 mt-44 text-3xl text-white whitespace-nowrap rounded-lg bg-sky-600 bg-opacity-60 max-md:px-5 max-md:mt-10" onClick={() => setIosOpen(true)}>
                Reservar
            </button>

            {

                isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">

                        <div className="flex flex-col items-center px-20 py-8 text-3xl text-black rounded-2xl bg-zinc-300 max-w-[671px] max-md:w-[85%] max-md:h-65  ">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8deecdfa608c19b062408dc30ffa638c671c7967a8c0d2febfa133cf058b525a?"
                                className="max-w-full aspect-square w-[80px]"
                            />
                            <div className="justify-center mt-8 text-xl max-md:text-sm">Gracias por compatirnos tu interes.</div>
                            <div className=" mt-3 text-xl max-md:text-sm max-md:w-60 justify-center ">
                            Brevemente nos estaremos contactando con usted.
                            </div>
                            <button className="justify-center px-7 py-4 mt-16 text-xl text-white whitespace-nowrap rounded-lg bg-red-700 bg-opacity-60 max-md:px-5 max-md:mt-10" onClick={() => setIosOpen(false)}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )

            }




        </div>
    )
}
export default FormularioReserva;