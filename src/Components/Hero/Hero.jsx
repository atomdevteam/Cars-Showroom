import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heroimg from '../../assets/img/Heroimg.png'
import optionone from '../../assets/img/optionone.png'
const Hero = () => {

    const [opentwo, setOpenTwo] = useState(false);
    const [openone, setOpenOne] = useState(false);
    const ChangeTwo = () => {
        setOpenTwo(!opentwo)
    }
    const ChangeOne = () => {
        setOpenOne(!openone)
    }

    return (
        <div className="flex flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full bg-max-h-20">
            
            <div className="flex z-10 flex-col lg:mt-32 mb-0 w-full max-w-[1040px] md:mt-5 max-md:mb-2.5 max-md:max-w-full">
                <div className="md:absolute top-0 md:right-0 md:left-0 md:px-12 "> 
                    <img className="w-full opacity-30 md:m-0 absolute z-0 top-16 hover:scale-110 transition-all left-0 right-0 px-4 md:px-0 md:top-0 " src={Heroimg} alt="" />
                    <div className="lg:text-5xl md:text-4xl font-semibold absolute top-20 lg:px-20  md:top-[9rem] text-white max-md:max-w-full max-md:text-4xl">
                        <h1 className="lg:text-5xl md:text-4xl md:-mt-[3rem] text-[1.2rem] xl:px-30 xl:text-6xl px-6">Encuentra el coche de tus sueños</h1>
                    </div>
                    <div className="md:text-2xl absolute font-semibold md:top-[13rem] z-10 top-28 lg:px-20   text-white max-md:max-w-full">
                        <p className="text-[0.7rem] md:-mt-[3.9rem] xl:-mt-5 px-6 xl:px-30 xl:text-4xl">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{""}</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex gap-5 px-28 lg:mt-[20rem] xl:mt-[25rem] md:mt-[15rem]  z-20 mt-[1.7rem] absolute">
                            <img className="w-5 h-5" src={optionone} alt="Options" />
                            <img className="w-5 h-5 opacity-55" src={optionone} alt="Options" />
                            <img className="w-5 h-5 opacity-55" src={optionone} alt="Options" />
                            <img className="w-5 h-5 opacity-55" src={optionone} alt="Options" />
                        </div>
                    </div>
                    
                    
                </div>
                

                <div className=" flex flex-col z-20 justify-center xl:mt-[10rem] p-6 mt-40 bg-gray-900 rounded max-md:px-5 md:mt-[6rem] lg:mt-[5rem] max-md:max-w-full">
                    <div className="w-full justify-center px-4 flex gap-10 self-center max-w-full text-[1.3rem]  text-sky-600 whitespace-nowrap ">
                        <button className="flex flex-col text-center text-[1.5rem] border-b md:px-5 border-sky-600">
                            Todos
                        </button>

                        <button className="text-sky-600 opacity-55 text-[1.5rem] md:px-5">
                            Nuevos
                        </button>

                        <button className="text-sky-600 opacity-55  text-[1.5rem] md:px-5">
                            Usados
                        </button>
                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">

                        <div className="relative bg-transparent w-full">
                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="bg-transparent w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border hover:bg-slate-50 transition-all border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        </div>

                        <div className="flex w-full gap-5"> 
                            <div className="w-full"  >
                                <div className=' bg-gray-700 rounded  '>
                                    <div className='rounded-md  bg-gray-700 flex justify-between hover:bg-slate-400 hover:text-black transition-all  items-center cursor-pointer px-5 ' onClick={ChangeOne}>
                                        <h2 className="bg-transparent py-3 text-sm " >Marca</h2>
                                        {/* <img className={`bg-gray-700 w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" /> */}
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                            
                                            className={`shrink-0 ml-1  w-6 aspect-square bg-transparent ${openone ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {openone ?
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



                            <div className="w-full"  >
                                <div className=' bg-gray-800 rounded '>
                                    <div className='rounded bg-gray-700 flex justify-between hover:bg-slate-400 hover:text-black transition-all items-center cursor-pointer px-5 ' onClick={ChangeTwo}>
                                        <h2 className="bg-transparent py-3 text-sm " >Modelo</h2>
                                        {/* <img className={`bg-gray-700 w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" /> */}
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                            className={`shrink-0 ml-1  w-6 aspect-square  bg-transparent ${opentwo ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {opentwo ?
                                        <div className="bg-gray-700 flex gap-4 flex-col text-sm mt-0  py-3">
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
                        





                    </div>

                    <div className="bg-transparent flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">


                        <div className="  relative bg-transparent w-full md:w-[12rem] lg:w-full">

                            <div className="bg-transparent	absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="bg-transparent w-5 h-5 dark:text-gray-400 text-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z"/></svg>
                                
                            </div>
                            <input type="text" id="location" className="bg-gray-50 border hover:bg-slate-50 transition-all border-gray-300 md:w-[10rem] lg:w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
                        </div>



                        <div className=" bg-transparent w-full md:flex gap-4 justify-start py-0.5 max-md:flex-wrap md:max-w-full">
                            <div className="bg-transparent flex flex-col text-white md:w-60 lg:w-full md:text-center ">
                                <div className="text-lg font-semibold bg-transparent">Rango Precio</div>
                                <div className="mt-1.5 text-sm font-medium bg-transparent md:text-[0.8rem] lg:text-[1rem]">
                                    $.0 - $3,000,000.00
                                </div>
                            </div>

                            <div className=' relative flex  bg-transparent cursor-pointer w-full md:w-full lg:w-full mt-5 mb-5'>
                            <div className='md:w-7 md:h-7 z-10 w-8 h-8 top-0 bottom-0 lg:w-7 lg:h-7 md:absolute absolute md:top-0 md:bottom-0 m-auto rounded-full left-0 bg-blue-500'></div>
                                <div className=' absolute bg-gray-700 items-center top-0 bottom-0 h-4 md:h-2 m-auto w-full text-center'></div>
                                <div className='md:w-7 md:h-7 z-10 w-8 h-8 top-0 bottom-0 lg:w-7 lg:h-7 md:absolute absolute md:top-0 md:bottom-0 m-auto rounded-full right-0 bg-blue-500'></div>
                            </div>
                        </div>
                        <div className="w-full md:w-[16rem] relative justify-center px-16 transition-all hover:text-blue-700 cursor-pointer hover:bg-slate-400 md:px-3 lg:px-4 lg:max-w-40  py-4 text-center text-white  bg-sky-600 rounded ">
                            <div className="md:after:content-['Buscar'] cursor-pointer  md:hover:after:text-3xl md:hover:after:py-2 hover:transition-transform transition-colors md:after:bg-white md:hover:after:text-blue-500 md:after:absolute md:after:left-0 md:after:right-0 md:hover:after:text-10xl  md:after:top-0 md:after:bottom-0 md:hover:after:scale-x-100  md:after:scale-x-0 after:transition-transform">
                                <Link to='/SearchResultOne' className="z-50">
                                    <p className=" z-50">Buscar</p>
                                </Link>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;