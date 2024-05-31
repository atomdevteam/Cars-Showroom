import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import flechatop from "../../assets/img/flechatop.png"
const mapStyles = {
    height: '300px',
    width: '100%',
};
const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};
const Location = ({LocationDatos}) => {
    const [Ubicacion, setUbicacion] = useState('')

    useEffect(() => {
      if (Ubicacion.trim()) {
        LocationDatos.Ubicacion = Ubicacion
      }
    }, [Ubicacion])

    return (
        <div data-aos="zoom-in-up" className='bg-[#071620]  text-white mb-12 rounded-lg'>
            <div className='ml-8 mr-8 mb-12 mt-8 cursor-pointer' >
                <div className='text-left flex justify-between items-center' onClick={Abre}>
                    <h3 className=' underline text-2xl'>Ubicación </h3>
                    <img className= {`w-6 h-6 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver" />
                </div>
                <div className='mt-8 '>
                    {open?
                    <form className='max-w-full'>
                        <div className='mb-4 grid gap-6  lg:grid-cols-1 w-full'>
                            <div className='mb-8 '>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dirección </label>
                                <input onChange={(e) => setUbicacion(e.target.value)} type="text" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                            </div>
                        </div>

                        <div className='mb-4'>
                            
                            <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                                <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
                            </LoadScript>
                        </div>

                    </form>
                    :""}
                </div>
            </div>


        </div>
    )
}

export default Location