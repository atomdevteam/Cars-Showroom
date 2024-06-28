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
import Heroimgthree from '../../assets/img/Heroimgthree.jpg'
import aos from "aos"
import SaleButton from '../../Components/SaleButton/SaleButton'
import UpImagine from '../../Components/UpImagine/UpImagine'

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
        Precio: {
            Precio: 0
        },

        Multimedia: {
            Imagen: []
        },
    }
}

const CarSaleLayout = () => {

    const { SaveCarSale, user, CarEdit } = useContextCar()
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


    // const handleSale = (e) => {

    //     e.preventDefault();


    //     if (validateCarSaleDatos(CarSaleDatos.Sale)) {
    //         SaveCarSale(CarSaleDatos, user.uid)
    //         alert("Guardado")
    //     } else {
    //         alert('Por favor completa todos los campos.');
    //     }
    // }

    const handleSale = (e) => {
        e.preventDefault();

        // Imprime la acción del evento
        console.log('Evento preventDefault ejecutado');

        // Imprime el estado actual de CarSaleDatos.Sale
        console.log('Datos de la venta del coche:', CarSaleDatos.Sale);

        // Verifica si los datos son válidos
        if (validateCarSaleDatos(CarSaleDatos.Sale)) {
            // Imprime un mensaje indicando que los datos son válidos
            console.log('Datos validados correctamente');

            // Guarda la venta del coche y muestra un mensaje de confirmación
            SaveCarSale(CarSaleDatos, user.uid);
            console.log('Datos guardados con éxito');

            alert("Guardado");
        } else {
            // Imprime un mensaje indicando que los datos no son válidos
            console.log('Datos incompletos o inválidos');

            alert('Por favor completa todos los campos.');
        }
    }

    const handleEdit = () => {

    }

    useEffect(() => {
        if (CarEdit !== null) {
            CarSaleDatos.Sale.DetalleCoche = CarEdit.Sale.DetalleCoche
            console.log("Editar autos")
            console.log(CarSaleDatos)
        }


    }, [CarEdit])


    return (

        <>

            <div className='flex bg-black flex-col px-6 '>
                <Navbar />
                < CarDetails updateCarDetails={updateCarDetails} />
                <EngineDetails updateEngineDetails={updateEngineDetails} />
                <Dimension updateDimension={updateDimension} />
                <Feature FeatureDatos={CarSaleDatos.Sale.Features} newFeature={newFeature} setNewFeature={setNewFeature} />
                <UpImagine AudiovisualDatos={CarSaleDatos.Sale.Multimedia} />
                <Price PriceDatos={CarSaleDatos.Sale.Precio} />

                {/* <Audiovisual /> */}
                {/* <Vehiclehistory /> */}
                {/* <SaleButton /> */}


                <div className='flex justify-center'>

                    {
                        CarEdit !== null ?
                            <button onClick={(e) => handleEdit(e)} className="flex justify-center  w-1/2 px-14 py-4 mt-8 mb-8 text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                Editar auto
                            </button>
                            : <button onClick={(e) => handleSale(e)} className="flex justify-center  w-1/2 px-14 py-4 mt-8 mb-8 text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                Vender mi auto
                            </button>
                    }


                </div>
            </div>
        </>

    )




}

export default CarSaleLayout


