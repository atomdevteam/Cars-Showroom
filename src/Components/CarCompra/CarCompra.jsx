import React, { useState, useEffect } from "react"
import Car6 from '../../assets/Car/Car6.jpeg'
import Car7 from '../../assets/Car/Car7.jpg'
import Calender from '../../assets/ImgCar/Calender.png'
import { FaCar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useContextCar } from "../../Context/Context";
import Modal from "./Modal";
const CarCompra = () => {
    const { Formatnumber, CarDatos, setCarDatos, handleRemove } = useContextCar()
    const [IsOpenSelectCar, setIsOpenSelectCar] = useState(false)
    const [ListComparar, setListComparar] = useState([])

    {/*const handleRemove = (dato) => {
        const nuevaLista = CarDatos.filter(item => item !== dato);
        console.log(nuevaLista)
        setCarDatos(nuevaLista)

    }*/}



    return (
        <>
            <Modal isOpen={IsOpenSelectCar} setIsOpen={setIsOpenSelectCar} setListComparar={setListComparar} ListComparar={ListComparar} />
            <div className='  text-white mb-8'>
                <div className='ml-8 mr-8  mt-8'>
                    <div className='mt-8 '>
                        <div className='max-w-full'>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                                {
                                    CarDatos.length > 0 && (
                                        CarDatos.map((dato, index) => (
                                            <div  key={index} className="cursor-pointer rounded-lg border border-gray-800 p-8 min-h-[400px]">
                                               <div className="relative flex justify-center items-center group">
    <img src={dato.Sale.Multimedia.Imagen} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
    <button onClick={() => handleRemove(dato)} className="absolute bg-red-700 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">x Remove</button>
</div>




                                                <div className="px-1 py-4">
                                                    <button className="text-[#007CC7] border border-[#007CC7] mb-2 px-3">{dato.Sale.DetalleCoche.Condicion}</button>
                                                    <div className="font-bold text-xl mb-2">{dato.Sale.DetalleCoche.Titulo}</div>
                                                    <div className="text-[#007CC7] font-bold text-xl mt-4">${Formatnumber(dato.Sale.Precio.Precio)}</div>
                                                    <div className="flex flex-row items-center justify-between text-xs mt-4">
                                                        <div className="flex flex-col">
                                                            <div className="flex flex-row items-center mb-4">
                                                                <FaRegCalendarAlt className="mr-2 text-[#007CC7]" size={20} /> {dato.Sale.DetalleCoche.Year}
                                                            </div>
                                                            <div className="flex flex-row items-center">
                                                                <BsFillFuelPumpDieselFill className="mr-2 text-[#007CC7]" size={20} /> {dato.Sale.DetalleMotor.TipoCombustimble}
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-start justify-between mb-4">
                                                            <div className="flex flex-row items-center mb-4">
                                                                <TbSteeringWheel className="mr-2 text-[#007CC7]" size={20} /> {dato.Sale.DetalleMotor.DriverTrain}
                                                            </div>

                                                            <div className="flex flex-row items-center">
                                                                <BsFillPeopleFill className="mr-2 text-[#007CC7]" size={20} /> {dato.Sale.DetalleCoche.Capacidad}
                                                            </div>
                                                        </div>



                                                    </div>

                                                </div>
                                                <div className='border border-t-1 border-gray-600 mt-3'></div>
                                                <div className="flex flex-row items-center mt-2">
                                                    <FaStar className="mr-2" size={25} />
                                                    <FaStar className="mr-2" size={25} />
                                                    <FaStar className="mr-2" size={25} />
                                                    <FaStar className="mr-2" size={25} />
                                                    <CiStar className="mr-2" size={30} />
                                                    (12 Reviews)
                                                </div>

                                            </div>
                                        ))
                                    )
                                }





                                {CarDatos.length < 3 && (
                                    <div onClick={() => setIsOpenSelectCar(!IsOpenSelectCar)} className=" cursor-pointer hover:bg-gray-700 rounded-lg border border-gray-800 p-6  flex items-center justify-center flex-col text-gray-400 min-h-[400px]">

                                        <div className="">
                                            <FaCar size={100} />
                                        </div>
                                        <div className="text-xl text-center">
                                            Añadir coche para comparar
                                        </div>


                                    </div>
                                )}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarCompra