import React, { useState, useEffect } from 'react'
import CarDetails from '../../Components/CarDetails/CarDetails'
import EngineDetails from '../../Components/EngineDetails/EngineDetails'
import Dimension from '../../Components/Dimension/Dimension'
import Feature from '../../Components/Feature/Feature'
import Location from '../../Components/Location/Location'
import Price from '../../Components/Price/Price'
import Audiovisual from '../../Components/Audiovisual/Audiovisual'
import Vehiclehistory from '../../Components/Vehiclehistory/Vehiclehistory'
import Navbar from '../NavBar/NavBar'
import { useContextCar } from '../../Context/Context'
import { validateCarSaleDatos } from './Validations'
const CarSaleDatos = {
    Sale: {
        IdCarSale: "",
        DetalleCoche: {
            Titulo: "",
            Condicion: "",
            TipoCuerpo: "",
            Marca: "",
            Modelo: "",
            Year: "",
            Capacidad: "",
            Color: "",
            Descripcion: ""
        },
        DetalleMotor: {
            TipoCombustimble: "",
            Kilometraje: "",
            Transmision: "",
            DriverTrain: "",
            CapacidadMotor: "",
            Power: "",
        },
        Dimension: {
            Longitud: "",
            Ancho: "",
            Altura: "",
            VolumenCarga: ""
        },

        Features: {
            Features: [],
            Otros: "No"
        },

        Direccion: {
            Ubicacion: ""
        },

        Precio: {
            Precio: 0
        },

        Multimedia: {
            Imagen: '',
            Video: ''

        },
        Historial: {
            Historial: ""
        }
    }
}

const CarSaleLayout = () => {
    const { SaveCarSale, user } = useContextCar()
    const [newFeature, setNewFeature] = useState('');
    const updateCarDetails = (updatedDetails) => {
        CarSaleDatos.Sale.DetalleCoche = updatedDetails;
     
    }

    const updateEngineDetails = (updatedDetails) => {
        CarSaleDatos.Sale.DetalleMotor = updatedDetails;
     
    }

    const updateDimension = (updatedDetails) => {
        CarSaleDatos.Sale.Dimension = updatedDetails
       
    }


    const handleSale = (e) => {
        e.preventDefault();

   
        if (validateCarSaleDatos(CarSaleDatos.Sale)) {
            SaveCarSale(CarSaleDatos, user.uid)
            alert("Guardado")
        } else {
            alert('Por favor completa todos los campos.');
        }
    }


    return (
        <>
            <Navbar background={'dark:bg-[#0B0C10]'} />
            <div className='bg-[#0B0C10] max-h-full '>
                <div className='h-[10rem] bg-[#12232E] text-white mb-16'>
                    <div className='ml-10 lg:ml-[8rem] flex flex-col'>
                        <h1 className='mt-8 text-4xl'>
                            Vende tu Auto
                        </h1>
                        <div className='mt-4'>
                            Homepage-vender
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-4 lg:ml-[6rem] lg:mr-[6rem] '>
                    <CarDetails updateCarDetails={updateCarDetails} />
                    <EngineDetails updateEngineDetails={updateEngineDetails} />
                    <Dimension updateDimension={updateDimension} />
                    <Feature FeatureDatos={CarSaleDatos.Sale.Features} newFeature={newFeature} setNewFeature={setNewFeature} />
                    <Location LocationDatos={CarSaleDatos.Sale.Direccion} />
                    <Price PriceDatos={CarSaleDatos.Sale.Precio} />
                    <Audiovisual AudiovisualDatos={CarSaleDatos.Sale.Multimedia} />
                    <Vehiclehistory HistorialDatos={CarSaleDatos.Sale.Historial} />
                    <div className='flex justify-center'>
                        <button onClick={(e) => handleSale(e)} className="flex justify-center  w-1/2 px-14 py-4 mt-8 mb-8 text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            Vender mi auto
                        </button>
                    </div>




                </div>
            </div>
        </>

    )
}

export default CarSaleLayout


