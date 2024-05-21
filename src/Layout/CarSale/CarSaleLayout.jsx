import React from 'react'
import CarDetails from '../../Components/CarDetails/CarDetails'
import EngineDetails from '../../Components/EngineDetails/EngineDetails'
import Dimension from '../../Components/Dimension/Dimension'
import Feature from '../../Components/Feature/Feature'
import Location from '../../Components/Location/Location'
import Price from '../../Components/Price/Price'
import Audiovisual from '../../Components/Audiovisual/Audiovisual'
import Vehiclehistory from '../../Components/Vehiclehistory/Vehiclehistory'
import Navbar from '../NavBar/NavBar'

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
            Features: []
        },

        Direccion: {
            Ubicacion: ""
        },

        Precio: {
            Precio: ""
        },

        Multimedia: {
            Imagen: '',
            Video: ''

        },
        Historial: {
            Historial: ""
        }
    }
};

const CarSaleLayout = () => {
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
                    <CarDetails CarDetailsDatos={CarSaleDatos.Sale.DetalleCoche}/>
                    <EngineDetails CarMotorDatos={CarSaleDatos.Sale.DetalleMotor}/>
                    <Dimension DimensionDatos={CarSaleDatos.Sale.Dimension}/>
                    <Feature FeatureDatos={CarSaleDatos.Sale.Features}/>
                    <Location LocationDatos={CarSaleDatos.Sale.Direccion}/>
                    <Price PriceDatos={CarSaleDatos.Sale.Precio}/>
                    <Audiovisual AudiovisualDatos={CarSaleDatos.Sale.Multimedia}/>
                    <Vehiclehistory HistorialDatos={CarSaleDatos.Sale.Historial}/>
                    <div className='flex justify-center'>
                        <button className="flex justify-center  w-1/2 px-14 py-4 mt-8 mb-8 text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            Vender mi auto
                        </button>
                    </div>




                </div>
            </div>
        </>

    )
}

export default CarSaleLayout


