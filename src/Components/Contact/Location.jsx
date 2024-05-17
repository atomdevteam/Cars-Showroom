import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
const mapStyles = {
    height: '300px',
    width: '100%',
};
const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};



const Location = () => {
    return (
        <div className='  text-white mb-12'>
            <div className='ml-8 mr-8 mb-12 mt-8'>
              
                <div className='mt-8 '>
                    <form className='max-w-full h-full'>
                        

                        <div className='mb-4'>

                            <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                                <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
                            </LoadScript>
                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default Location