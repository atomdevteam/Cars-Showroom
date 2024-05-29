import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextCar } from "../../Context/Context";
import { FaEdit } from "react-icons/fa";

const Hero = () => {
    const { user, WhichRole } = useContextCar()
    const [opentwo, setOpenTwo] = useState(false);
    const [TitleHome, setTitleHome] = useState('Encuentra el coche de tus sueños')
    const [DescHome, setDescHome] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')


    

    const ChangeTwo = () => {
        setOpenTwo(!opentwo)
    }

    const handleEditTextHero = () => {
        const newTitle = prompt('Edit title home:', TitleHome);
        if (newTitle !== null) {
            setTitleHome(newTitle)
        }
    }

    const handleEditDesctHero = () => {
        const newDeesc = prompt('Edit decription home:', DescHome);
        if (newDeesc !== null) {
            setDescHome(newDeesc)
        }
    }

    // const handleOpenEditImage = () => {
    //     setisOpenEditImg(!isOpenEditImg)
    //   }

   



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
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.{""} */}
                    <div className="flex flex-row items-center">
                    <div className="mt-7 text-2xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                        {DescHome}
                    </div>
                    {user && WhichRole === 'admin' && (
                        <div className="px-3 py-2 text-right  text-xs leading-4">
                            <button onClick={() => handleEditDesctHero()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} className="text-yellow-400" />
                            </button>
                        </div>
                    )}
                </div>

                </div>

                <div className=" flex flex-col justify-center p-6 mt-64 bg-gray-900 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="bg-transparent	 flex gap-0 self-center max-w-full text-xl font-black text-sky-600 whitespace-nowrap w-[357px]">

                        <button className="flex flex-col justify-center text-center">
                            Todos
                        </button>

                        <button className="text-white justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5">
                            Nuevos
                        </button>

                        <button className="text-white justify-end items-start px-9 pt-1.5 pb-3.5 max-md:pl-5">
                            Usados
                        </button>
                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">

                        <div class="  relative w-80 bg-transparent">
                            <div class="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        </div>

                        <div className=""  >
                            <div className=' bg-gray-700 rounded  '>
                                <div className='rounded-md bg-gray-700 flex justify-between  items-center cursor-pointer px-5 ' onClick={ChangeTwo}>
                                    <h2 className="bg-gray-700 py-3 text-sm " >Marca</h2>
                                    {/* <img className={`bg-gray-700 w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" /> */}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 ml-1  w-6 aspect-square bg-gray-700"
                                    />
                                </div>
                                {opentwo ?
                                    <div className="bg-gray-700 flex gap-4 flex-col text-sm mt-3  py-3">
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Toyota</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Mercedes Benz</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Hyundai</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Honda</label>
                                        {/* <a className="bg-gray-700 text-blue-500" href="#">Ver Más</a> */}
                                    </div>
                                    : ""}
                            </div>
                        </div>



                        <div className=""  >
                            <div className=' bg-gray-800 rounded '>
                                <div className='rounded bg-gray-700 flex justify-between  items-center cursor-pointer px-5 ' onClick={ChangeTwo}>
                                    <h2 className="bg-gray-700 py-3 text-sm " >Modelo</h2>
                                    {/* <img className={`bg-gray-700 w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" /> */}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 ml-1  w-6 aspect-square bg-gray-700"
                                    />
                                </div>
                                {opentwo ?
                                    <div className="bg-gray-700 flex gap-4 flex-col text-sm mt-3  py-3">
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Camry</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Prado</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Corrolla</label>
                                        <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" >Yari</label>
                                        {/* <a className="bg-gray-700 text-blue-500" href="#">Ver Más</a> */}
                                    </div>
                                    : ""}
                            </div>
                        </div>





                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">


                        <div class="  relative w-80 bg-transparent">

                            <div class="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
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

                        <button className="justify-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-sky-600 rounded max-md:px-5">
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;