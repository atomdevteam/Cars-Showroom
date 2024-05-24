import React from 'react'
import Jeep from "../../../assets/img/Jeep.png";
import Audi from "../../../assets/img/Audi.png"
import { useEffect, useState } from "react";
import Calender from "../../../assets/img/Calender.png"
import volante from "../../../assets/img/volante.png"
import Combustible from "../../../assets/img/Combustible.png"
import usuarios from "../../../assets/img/usuarios.png"
import estrella from "../../../assets/img/estrella.png"
import emptystar from "../../../assets/img/emptystar.png"
import LandRover from "../../../assets/img/LandRover.png"
import Tesla from "../../../assets/img/Tesla.png"
import Ford from "../../../assets/img/Ford.png"
import Honda from "../../../assets/img/Honda.png"
import Chevrolet from "../../../assets/img/Chevrolet.png"
import Kia from "../../../assets/img/Kia.png"
import coupe from "../../../assets/img/coupe.png"
import Toyota from "../../../assets/img/Toyota.png"
import Lupa from "../../../assets/img/Lupa.png"
import list from "../../../assets/img/list.png"
import listwo from "../../../assets/img/listwo.png"
import flechatop from "../../../assets/img/flechatop.png"

import "aos/dist/aos.css"
import { useContextCar } from '../../../Context/Context';
import FilterSection from '../../../Components/Filtro/FilterSection ';
function Principal() {
    const { ListCar, LisCarUsed, LisCarNew, SerchingCar, setSerchingCar, Formatnumber, setfiltroSearching, filtroSearching } = useContextCar();
    // Year
    const [openYears, setOpenYears] = useState(false);
    const [yearOptions] = useState(['2024', '2023', '2022', '2021', '2020']);
    // Marca
    const [openBrands, setOpenBrands] = useState(false);
    const [brandOptions] = useState(['Audi', 'BMW', 'Chevrolet', 'Ford']);
    // Modelo
    const [openModel, setOpenModel] = useState(false);
    const [modelOptions] = useState(['Corolla', 'Civic', 'Chevrolet'])
    //Estado
    const [openState, setOpenState] = useState(false);
    const [stateOptions] = useState(['Nuevo', 'Usado'])
    //Transmision
    const [openTransmission, setOpenTransmission] = useState(false);
    const [transmissionOptions] = useState(['Transmisión Automática', 'Transmisión Manual'])

    //Tipo de combustimble
    const [openFuel, setOpenFuel] = useState(false);
    const [fuelOptions] = useState(['Gasolina', 'Diesel', 'Gas Natural'])

    //DriverTrain
    const [openDriverTrain, setOpenDriverTrain] = useState(false);
    const [driverTrainOptions] = useState(['Tracción Trasera', 'Tracción Trasera'])

    //Capacidad de pasajeros
    const [openPassengers, setOpenPassengers] = useState(false);
    const [passengersOptions] = useState(['1', '2', '3', '4', '5'])

    const [selectfiltroOptions, setselectfiltroOptions] = useState(
        {
            Year: [],
            Marca: [],
            Modelo: [],
            Estado: [],
            Transmision: [],
            Combustible: [],
            DriverTrain: [],
            CapacidadPasajeros: []
        }
    )


    const toggleYears = () => setOpenYears(!openYears);
    const toggleBrands = () => setOpenBrands(!openBrands);
    const toggleModel = () => setOpenModel(!openModel);
    const toggleState = () => setOpenState(!openState);
    const toggleTransmission = () => setOpenTransmission(!openTransmission);
    const toggleFuel = () => setOpenFuel(!openFuel);
    const togleDriverTrain = () => setOpenDriverTrain(!openDriverTrain)
    const togglePassengers = () => setOpenPassengers(!openPassengers)

    const handleSearch = (e) => {
        // Add search functionality if needed
    };

    const isAnyFilterNotEmpty = (filters) => {
        return Object.values(filters).some(filterArray => filterArray.length > 0);
    };

    const handleFiltrarOptions = () => {

        if (!isAnyFilterNotEmpty(selectfiltroOptions)) {
            console.log('No se han seleccionado filtros.');
            console.log(SerchingCar)
            setfiltroSearching(SerchingCar)
            return;
        }

        const normalizeString = (str) => {
            if (typeof str !== 'string') return '';
            return str.toLowerCase().trim().replace(/\s+/g, ' ');
        };
    

        // Datos para filtrar, son arreglo cada uno con los datos
        const { Year, Marca, Modelo, Estado, Transmision, Combustible, DriverTrain, CapacidadPasajeros } = selectfiltroOptions;
        console.log(Year)
        const filteredCars = ListCar.filter(car => {
           const year = normalizeString(car.Sale.DetalleCoche.Year)
           const marca = normalizeString(car.Sale.DetalleCoche.Marca)
           const modelo = normalizeString(car.Sale.DetalleCoche.Modelo)
           const estado = normalizeString(car.Sale.DetalleCoche.Condicion)
           const transmision = normalizeString(car.Sale.DetalleMotor.Transmision)
           const combustibles = normalizeString(car.Sale.DetalleMotor.TipoCombustimble)
           const driverTrain = normalizeString(car.Sale.DetalleMotor.DriverTrain)
           const capacidadPasajeros = normalizeString(car?.Sale?.DetalleCoche.Capacidad?.toString())
           console.log(modelo + " = " +  Modelo)
           console.log(Modelo.includes(modelo))
            return (
                (Year.length === 0 || Year.includes(year)) &&
                (Marca.length === 0 || Marca.includes(marca)) &&
                (Modelo.length === 0 || Modelo.includes(modelo)) &&
                (Estado.length === 0 || Estado.includes(estado)) &&
                (Transmision.length === 0 || Transmision.includes(transmision)) &&
                (Combustible.length === 0 || Combustible.includes(combustibles)) &&
                (DriverTrain.length === 0 || DriverTrain.includes(driverTrain)) &&
                (CapacidadPasajeros.length === 0 || CapacidadPasajeros.includes(capacidadPasajeros))
            );
        });
        console.log("Datos filtrados...")
        console.log(filteredCars);
        setfiltroSearching(filteredCars)

    }

    useEffect(() => {
        handleFiltrarOptions()
    }, [selectfiltroOptions])




    return (
        <div className=' xl:flex xl:max-w-full xl:justify-between md:flex justify-between xl:m-0 xl:px-20 xl:py-20 gap-7 md:px-5 md:py-5 px-5 py-5 bg-black text-white'>
            <section data-aos="flip-up" className=" xl:w-[28rem]  ">
                <section className=' xl:py-5 xl:px-6 bg-[#071620] md:py-5 md:px-6 md:text-2xl px-5 py-10 '>
                    <div className=' bg-transparent xl:text-[2rem] border-b md:text-2xl text-2xl'>Filtrar</div>
                    <div className=' xl:flex xl:w-full xl:gap-5 items-center xl:mt-4 xl:h-9 xl:px-7 flex px-5 py-3 gap-5 text-2xl xl:py-1 lg:px-2 md:flex md:px-3 md:gap-2 md:py-1 md:items-center bg-[#152836] mt-4 '>
                        <img className="bg-transparent md:w-5 md:h-5 w-5 h-5" src={Lupa} alt="Buscar" />
                        <input className=" bg-transparent xl:text-2xl" type="text" placeholder='Buscar' />
                    </div>

                    <FilterSection
                        title="Años"
                        options={yearOptions}
                        open={openYears}
                        onToggle={toggleYears}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />
                    <FilterSection
                        title="Marca"
                        options={brandOptions}
                        open={openBrands}
                        onToggle={toggleBrands}
                        onSearch={handleSearch}
                        showSearch={true}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                    <FilterSection
                        title={"Modelo"}
                        options={modelOptions}
                        open={openModel}
                        onToggle={toggleModel}
                        onSearch={handleSearch}
                        showSearch={true}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />
                    <FilterSection
                        title="Estado"
                        options={stateOptions}
                        open={openState}
                        onToggle={toggleState}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                    <FilterSection
                        title="Transmisión"
                        options={transmissionOptions}
                        open={openTransmission}
                        onToggle={toggleTransmission}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                    <FilterSection
                        title="Tipo de combustible"
                        options={fuelOptions}
                        open={openFuel}
                        onToggle={toggleFuel}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                    <FilterSection
                        title="DriverTrain"
                        options={driverTrainOptions}
                        open={openDriverTrain}
                        onToggle={togleDriverTrain}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                    <FilterSection
                        title="Capacidad de pasajeros"
                        options={passengersOptions}
                        open={openPassengers}
                        onToggle={togglePassengers}
                        setselectfiltroOptions={setselectfiltroOptions}
                    />

                </section>

            </section>
            <section className=' xl:w-[50rem] mt-10 m-10'>
                <div className=' flex xl:flex xl:justify-between xl:items-center xl:h-16 items-center  xl:bg-gray-800 xl:w-full px-5 gap-4 text-2xl py-3 xl:gap-6 md:flex md:gap-4 md:px-4 md:py-3 md:text-2xl md:items-center bg-gray-700'>
                    <img className="xl:w-4 w-7 h-7 bg-gray-700 xl:h-4 xl:ml-4 xl:bg-transparent md:w-4 md:h-4 md:bg-transparent" src={Lupa} alt="" />
                    <input className="xl:text-3xl w-full bg-gray-700 xl:w-full  xl:bg-transparent xl:focus:outline-none md:bg-transparent" type="text" placeholder='Buscar' />
                </div>
                <div className=' xl:mx-auto xl:mt-8 xl:mb-8 mt-5 mb-5 '>
                    <div className=' flex justify-between w-full xl:flex xl:justify-between items-center gap-2 lg:justify-between xl:items-center xl:gap-6 md:w-full xl:relative md:flex md:justify-between md:relative md:gap-1 md:items-center md:mt-3 md:mb-3'>
                        <div>
                            <h2 className=" xl:top-0 xl:left-0 mr-10 xl:mt-2 xl:mb-2 xl:ml-2 xl:mr-2 xl:text-3xl xl:text-center md:left-0 md:text-[1rem] md:mr-1">{filtroSearching.length} Resultados</h2>

                        </div>
                        <div className="md:flex items-center gap-2 hidden">
                            <select className="xl:w-64 cursor-pointer md:px-2 xl:bg-gray-800 w-40 xl:border-none md:w-[8rem] bg-gray-700 md:py-1" name="Orden" id="Orden">
                                <option value="Ordenar">Ordenar Por</option>
                            </select>
                            <img className="cursor-pointer w-6 h-6" src={list} alt="Ver" />
                            <img className="cursor-pointer w-6 h-6" src={listwo} alt="Ver" />
                        </div>

                    </div>
                </div>

                {
                    filtroSearching.map((dato, index) => (
                        <div key={index} onClick={() => handleOpenTesla()} data-aos="fade-up" className='cursor-pointer  border border-solid px-3 py-1 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                            <div className=' overflow-hidden'>
                                <img src={dato.Sale.Multimedia.Imagen} className=' w-full h-full lg:w-full lg:h-full xl:w-full xl:h-full xl:bg-gray-200 hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' alt="Jeep Wrangler Unlimited Islander" />
                            </div>
                            <div className=' lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                                {/* Condicion */}
                                <button className="border border-blue-500 text-blue-500 px-5" >{dato.Sale.DetalleCoche.Condicion}</button>
                                {/* Titulo */}
                                <h2 className="text-[2rem] md:text-[1.2rem]" >{dato.Sale.DetalleCoche.Titulo}</h2>
                                {/* Precio */}
                                <span className="text-blue-500 text-[1.5rem]">${Formatnumber(dato.Sale.Precio.Precio)}</span>
                                {/* Ubicacion */}
                                <h4>{dato.Sale.Direccion.Ubicacion}</h4>
                                <div className=" lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                        <img className="w-5 h-5" src={Calender} alt="Calendario" />
                                        {/*Year */}
                                        <h5>{dato.Sale.DetalleCoche.Year}</h5>
                                    </div>
                                    <div className=' lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                                        <img className="w-5 h-5" src={volante} alt="Volante" />
                                        {/* DriverTrain */}
                                        <h5 className="bg-transparent">{dato.Sale.DetalleMotor.DriverTrain}</h5>
                                    </div>
                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                        <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                                        <h5>{dato.Sale.DetalleMotor.TipoCombustimble}</h5>
                                    </div>
                                    <div className=' lg:flex gap-1 md:flex items-center flex'>
                                        <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                                        {/* Capacidad de pasajero */}
                                        <h5>{dato.Sale.DetalleCoche.Capacidad}</h5>
                                    </div>
                                </div>

                                <hr />
                                <section className=' lg:flex md:flex flex'>
                                    <img src={estrella} alt="Estrellas" />
                                    <img src={estrella} alt="Estrellas" />
                                    <img src={estrella} alt="Estrellas" />
                                    <img src={estrella} alt="Estrellas" />
                                    <img src={emptystar} alt="Estrellas" />
                                    <h4>(12 Reviews)</h4>
                                </section>
                            </div>
                        </div>
                    ))
                }

                <div className=' lg:flex justify-center gap-5 md:flex flex items-center'>
                    <a href="#"><img className=' -rotate-90 border border-blue-500 px-2 md:w-[5rem] md:h-[3rem]' src={flechatop} alt="Anterior" /></a>
                    <a href="#"><button className=' border bg-blue-500 border-blue-500 w-[4rem] h-[3rem] py-3'>1</button></a>
                    <a href="#"><button className=' border border-blue-500 w-[4rem] py-3'>2</button></a>
                    <a href="#"><img className=' rotate-90 border border-blue-500 px-2 md:w-[5rem] md:h-[3rem]' src={flechatop} alt="Siguiente" /></a>
                </div>
            </section>

        </div>
    )
}

export default Principal