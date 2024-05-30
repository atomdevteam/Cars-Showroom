import { useEffect, useState } from "react";
import { useContextCar } from "../../Context/Context";
import { FaEdit } from "react-icons/fa";


const Servicios = () => {

    const { user, WhichRole } = useContextCar()
    const [ComprarNuevo, setComprarNuevo] = useState('Comprar un auto nuevo')
    const [ComprarUsado, setComprarUsado] = useState('Comprar un auto usado')
    const [VenderMiAuto, setVenderAuto] = useState('Vender mi auto')

    const handleEditCarsNuevo = () => {
        const newTextCarsNuevo = prompt('Editar carro Nuevo', ComprarNuevo);
        if (newTextCarsNuevo != null) {
            setComprarNuevo(newTextCarsNuevo)
        }
    }

    const handleEditCarsUsado = () => {
        const newTextCarsUsado = prompt('Editar carro usado:', ComprarUsado);
        if (newTextCarsUsado != null) {
            setComprarUsado(newTextCarsUsado)
        }
    }

    const handleEditCarsVender = () => {
        const newTextCarsVender = prompt('Editar vender carro: ', VenderMiAuto);
        if (newTextCarsVender != null) {
            setVenderAuto(newTextCarsVender)
        }
    }


    return (
        <div className="bg-transparent flex flex-col self-center justify-center items-center mt-20 w-full  max-md:mt-10 max-md:max-w-full bg-[#0B0C10]">
            <div className="bg-transparent text-2xl font-bold text-zinc-300 max-md:max-w-full">
                Nuestro servicio
            </div>

            <div className="bg-transparent px-px mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <button className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">

                        <div className="flex flex-col grow px-16 py-8 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9f552b1b9dbed70ddbc2bea9c5b490daad4ff9db8346ead42fee009970bbc3?"
                                className="self-center w-12 aspect-square"
                            />

                            {/* <p className="bg-transparent mt-3.5">Comprar un auto nuevo</p> */}


                            <div className="mt-3.5 ">{ComprarNuevo}</div>
                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button onClick={() => handleEditCarsNuevo()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}



                        </div>
                    </button>

                    <button className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-14 py-8 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c28109c0ab96d720ae0c3833a2c1459e45bf3c3f626dacc93d0e3a39ae00b7e?"
                                className="self-center w-12 aspect-square"
                            />

                            <div className="mt-3.5"> {ComprarUsado} </div>

                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button onClick={() => handleEditCarsUsado()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}

                        </div>
                    </button>

                    <button className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-20 py-9 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8db7bbb2f228a3e2dd1dbc3ff5effec1ebcf26ffb88ef187d70ede740e8844f2?"
                                className="self-center w-12 aspect-square"
                            />

                            <div className="mx-2.5 mt-3.5"> {VenderMiAuto} </div>

                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button onClick={() => handleEditCarsVender()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            
                        </div>
                    </button>
                </div>
            </div>
            <div className="mt-24 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
            </div>
        </div>
    );
}

export default Servicios