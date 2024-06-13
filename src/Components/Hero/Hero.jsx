import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextCar } from "../../Context/Context";
import { FaEdit } from "react-icons/fa";
import { Range } from 'react-range';
import RangoPrecio from "./Range";

const Hero = () => {
    const { user, WhichRole } = useContextCar()

    const [opentwo, setOpenTwo] = useState(false);
    const [openone, setOpenOne] = useState(false);
    const [TitleHome, setTitleHome] = useState('Encuentra el coche de tus sueños')
    const [DescHome, setDescHome] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

    const ChangeTwo = () => {
        setOpenTwo(!opentwo)
    }
    const ChangeOne = () => {
        setOpenOne(!openone)
    }
    const [Todos, setTodos] = useState(true)
    const [Nuevo, setNuevo] = useState(false)
    const [Usado, setUsado] = useState(false)
    const slider = [
        "src/assets/img/Heroimg.png",
        "src/assets/img/HeroImgtwo.jpg",
        "src/assets/img/HeroImgfive.jpg",
        "src/assets/img/HeroImgsix.jpg"



    ]; let count = 0
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        Start()
    }, [])
    const Start = () => {
        setInterval(() => {
            next();
        }, 5000);
    }
    const next = () => {
        count = (count + 1) % slider.length
        setCurrent(count)
    }
    const before = () => {
        const e = slider.length
        count = (current + e - 1) % e
        setCurrent(count)
    }

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
    const [values, setValues] = useState([0, 3000000]);
    const min = 0;
    const max = 3000000;
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
        <div className="flex flex-col items-center  bg-black px-16 pt-20 w-full max-md:px-5 max-md:max-w-full bg-max-h-20">

            <div className="z-10  lg:mt-32 mb-0 w-full  overflow-hidden max-w-[1040px] md:mt-5 max-md:mb-2.5 max-md:max-w-full">
                <div className={`w-full h-full -z-50 bg-black absolute right-0 top-0  `}>
                    <img className="w-full  bg-contain brightness-50 blur-[2px] contrast-125" src={slider[current]} alt="" />
                </div>
                <div className="md:absolute z-50 top-0 md:right-0 md:left-0 md:px-12 ">

                    <div className="lg:text-5xl md:text-4xl xl:p-20 font-semibold absolute top-20 lg:p-20 md:top-[9rem] text-white max-md:max-w-full max-md:text-4xl">
                        <h1 className="lg:text-5xl md:text-4xl md:-mt-[3rem] text-[1.2rem] xl:px-30 xl:text-6xl px-6">Encuentra el coche de tus sueños</h1>
                    </div>
                    <div className="md:text-2xl xl:p-20  absolute font-semibold md:top-[13rem] z-10 top-28 lg:p-20   text-white max-md:max-w-full">
                        <p className="text-[0.7rem] md:-mt-[3.9rem] xl:-mt-5 md:text-[25px] px-6 xl:px-30 xl:text-4xl">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{""}</p>
                    </div>
                    <div className="flex justify-center md:mt-[22rem] gap-5 md:gap-5 z-50 mt-[1rem] xl:mt-[36rem] lg:gap-8 lg:mt-[28rem] opacity-45">
                        {slider.map((slider, e) => {
                            return (<button onClick={() => { setCurrent(e) }} key={`circle + ${e}`} className={` w-4 h-4 xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-6 md:h-6 rounded-full z-50 bg-cyan-900 ${e == current ? " bg-sky-500" : " bg-cyan-900"}`} ></button>)
                        })}


                    </div>


                </div>


                <div className="flex flex-col z-20 justify-center md:mt-[25rem] xl:mt-[40rem] lg:mt-[29rem] mt-[13rem]  p-6  bg-gray-900 rounded max-md:px-5 max-md:max-w-full">
                    <div className="w-full justify-center  flex gap-10 self-center max-w-full  text-sky-600 whitespace-nowrap">
                        <button
                            onClick={() => handleTodo()}
                            className={`${Todos === true ? 'border-b border-sky-600' : 'text-sky-600 opacity-55'} flex flex-col text-center text-[1.2rem] md:px-5 `}>
                            Todos
                        </button>

                        <button
                            onClick={() => handleNuevo()}
                            className={`${Nuevo === true ? 'border-b border-sky-600' : 'text-sky-600 opacity-55'} flex flex-col text-center text-[1.2rem] md:px-5`}>
                            Nuevos
                        </button>

                        <button
                            onClick={() => handleUsado()}
                            className={`${Usado === true ? 'border-b border-sky-600' : 'text-sky-600 opacity-55'} flex flex-col text-center text-[1.2rem] md:px-5`}>
                            Usados
                        </button>
                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">

                        <div className="relative bg-transparent w-full">
                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input  type="search" id="simple-search" className="bg-gray-50 border hover:bg-slate-50 transition-all border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        </div>

                        <div className="flex w-full gap-5">
                            <div className="w-full"  >
                                <div className=' bg-gray-700 rounded  '>
                                    <select  className='w-full p-2.5 rounded-md  bg-gray-700 flex justify-between transition-all  items-center cursor-pointer  ' >
                                        <option className="bg-transparent py-3 text-sm text-white" >Modelo</option>
                                        <option value="Camry" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm ">Camry</option>
                                        <option value="Prado" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Prado</option>
                                        <option value="Corolla" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Corolla</option>
                                        <option value="Yari" className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Yari</option>

                                    </select>

                                </div>
                            </div>

                            <div className="w-full"  >
                                <div className=' bg-gray-700 rounded  '>
                                    <select  className='w-full p-2.5 rounded-md  bg-gray-700 flex justify-between  transition-all  items-center cursor-pointer  ' >
                                        <option className="bg-transparent py-3 text-sm text-white" >Marca</option>
                                        <option value="Toyota" className="text-white hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Toyota</option>
                                        <option value="Mercedes Benz" className=" hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Mercedes Benz</option>
                                        <option value="Hyundai" className=" hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Hyundai</option>
                                        <option value="Honda" className=" hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 ">Honda</option>

                                    </select>

                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="bg-transparent flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">

                        <div className="  relative bg-transparent w-full md:w-[12rem] lg:w-full">

                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="bg-transparent w-5 h-5  text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" /><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z" /></svg>

                            </div>
                            <input type="text" id="location" className="bg-gray-50 border hover:bg-slate-50 transition-all border-gray-300 md:w-[10rem] lg:w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
                        </div>

                        <div className="bg-transparent w-full md:flex gap-4 justify-start py-0.5 max-md:flex-wrap md:max-w-full">
                            <div className="bg-transparent flex flex-col text-white md:w-60 lg:w-full md:text-center ">
                                <div className="text-lg font-semibold bg-transparent">Rango precio</div>
                                <div className="mt-1.5 text-sm font-medium bg-transparent md:text-[0.8rem] lg:text-[1rem]">
                                    ${values[0].toLocaleString()} - ${values[1].toLocaleString()}
                                </div>
                            </div>

                            <div className=' relative flex  bg-transparent cursor-pointer w-full md:w-full lg:w-full mt-5 mb-5'>
                                <Range
                                    step={1}
                                    min={min}
                                    max={max}
                                    values={values}
                                    onChange={(values) => setValues(values)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            className="absolute bg-gray-700 items-center top-0 bottom-0 h-4 md:h-2 m-auto w-full text-center"
                                            style={{ ...props.style }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => {
                                        const { key, ...otherProps } = props;
                                        return (
                                            <div
                                                key={key}
                                                {...otherProps}
                                                className="shrink-0 w-6 h-6 bg-blue-400 rounded-full"
                                                style={{ ...otherProps.style }}
                                            />
                                        );
                                    }}
                                />

                            </div>

                        </div>

                        <button  className="justify-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-sky-600 rounded max-md:px-5">
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;