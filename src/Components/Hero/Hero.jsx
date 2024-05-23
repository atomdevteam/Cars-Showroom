import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextCar } from "../../Context/Context";
import { FaEdit } from "react-icons/fa";

const Hero = () => {
    const { user, WhichRole, ListCar, LisCarUsed, LisCarNew, handleSearching } = useContextCar()

    const [OpenMarca, setOpenMarca] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const [TitleHome, setTitleHome] = useState('Encuentra el coche de tus sueños')

    const [Todos, setTodos] = useState(true)
    const [Nuevo, setNuevo] = useState(false)
    const [Usado, setUsado] = useState(false)

    const [Search, setSearch] = useState('')
    const [Location, setLocation] = useState('')
    const [Marca, setMarca] = useState('')
    const [Modelo, setModelo] = useState('')

    const navigate = useNavigate()



    const handleTodo = () => {
        setTodos(true)
        setNuevo(false)
        setUsado(false)
    }

    const handleNuevo = () => {
        setTodos(false)
        setNuevo(true)
        setUsado(false)
    }

    const handleUsado = () => {
        setTodos(false)
        setNuevo(false)
        setUsado(true)
    }

    const handleSearch = () => {

        const Options = {
            search: Search,
            location: Location,
            marca: Marca,
            modelo: Modelo
        }

        if (Todos === true) {
            let Status = 'Todo'
            handleSearching(Status, navigate, Options)

        } else if (Nuevo === true) {
            let Status = 'Nuevo'
            handleSearching(Status, navigate, Options)

        } else {
            let Status = 'Usado'
            handleSearching(Status, navigate, Options)
        }
    }


    const ChangeMarca = () => {
        setOpenMarca(!OpenMarca)
    }

    const ChangeModel = () => {
        setOpenModel(!openModel)
    }

    const handleEditTextHero = () => {
        const newTitle = prompt('Edit title home:', TitleHome);
        if (newTitle !== null) {
            setTitleHome(newTitle)
        }
    }





    return (
        <div className="flex flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex z-10 flex-col mt-20 mb-0 w-full max-w-[1040px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">

                <div className="flex flex-row items-center">
                    <div className="text-5xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                        {TitleHome}

                    </div>
                    {user && WhichRole === 'admin' && (
                        <div className="px-3 py-2 text-right  text-xs leading-4">
                            <button onClick={() => handleEditTextHero()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} className="text-yellow-400" />
                            </button>
                        </div>
                    )}
                </div>




                <div className="mt-7 text-2xl font-semibold text-white max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{""}
                </div>

                {/* Seccion de Buscar */}

                <div className=" flex flex-col justify-center p-6 mt-64 bg-gray-900 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="bg-transparent	 flex gap-0 self-center max-w-full text-xl font-black text-sky-600 whitespace-nowrap w-[357px]">
                        {/*   */}
                        <button
                            onClick={() => handleTodo()}
                            className={`${Todos === true ? 'text-sky-600 ' : 'text-white'} justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5`}>
                            Todos
                        </button>

                        <button
                            onClick={() => handleNuevo()}
                            className={`${Nuevo === true ? 'text-sky-600' : 'text-white'} justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5`}>
                            Nuevos
                        </button>

                        <button
                            onClick={() => handleUsado()}
                            className={`${Usado === true ? 'text-sky-600' : 'text-white'} justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5`}>
                            Usados
                        </button>
                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">

                        <div className="  relative w-80 bg-transparent">
                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input onChange={(e) => setSearch(e.target.value)} type="search" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        </div>

                        <div className=""  >

                            <div className='rounded-md bg-gray-800  '>

                                <div className='rounded-md bg-gray-700 flex justify-between  items-center cursor-pointer ' >

                                    <select onChange={(e) => setModelo(e.target.value)} className="rounded-md bg-gray-700 flex justify-between  items-center cursor-pointer px-4 py-3">
                                        <option value=""  className="text-sm">Modelo</option>
                                        <option value="Camry" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Camry</option>
                                        <option value="Prado" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Prado</option>
                                        <option value="Corolla" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Corolla</option>
                                        <option value="Yari" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Yari</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className=""  >

                            <div className='rounded-md bg-gray-800  '>

                                <div className='rounded-md bg-gray-700 flex justify-between  items-center cursor-pointer ' >

                                    <select onChange={(e) => setMarca(e.target.value)} className="rounded-md bg-gray-700 flex justify-between  items-center cursor-pointer px-4 py-3">
                                        <option value="" className="  text-sm">Marca</option>
                                        <option value="Toyota" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Toyota</option>
                                        <option value="Mercedes Benz" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Mercedes Benz</option>
                                        <option value="Hyundai" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Hyundai</option>
                                        <option value="Honda" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Honda</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">

                        <div className="  relative w-80 bg-transparent">

                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input onChange={(e) => setLocation(e.target.value)} type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
                        </div>

                        <div className=" bg-transparent flex gap-4 justify-center py-0.5 max-md:flex-wrap">
                            <div className="bg-transparent flex flex-col text-white">
                                <div className="text-lg font-semibold bg-transparent">Rango precio</div>
                                <div className="mt-1.5 text-sm font-medium bg-transparent">
                                    $.0 - $3,000,000.00
                                </div>
                            </div>

                            <div className="flex gap-0 py-1.5 my-auto bg-[#12232E]">
                                <div className="shrink-0 w-6 h-6 bg-blue-400 rounded-full " />
                                <div className="shrink-0 self-start mt-2 max-w-full h-2  rounded w-[264px] bg-[#12232E]" />
                                <div className="shrink-0 w-6 h-6 bg-blue-400 rounded-full  " />
                            </div>
                        </div>

                        <button onClick={() => handleSearch()} className="justify-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-sky-600 rounded max-md:px-5">
                            Buscar
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Hero;