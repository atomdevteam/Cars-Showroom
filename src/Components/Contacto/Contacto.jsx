import React, { useEffect, useState } from "react";
import SFMImage from "../../assets/img/SFMImage.jpg"
import facebooktwo from "../../assets/img/facebooktwo.png"
import instagramtwo from "../../assets/img/instagramtwo.png"
import { useContextCar } from "../../Context/Context";
import { FaEdit } from "react-icons/fa";
import twitter from "../../assets/img/twitter.png"
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { editTituloContact, editUbicacionContact, editGmailContact, editPhoneContact, editTitulotwoContact } from "../../Functions/HomeAdmin/HomeAdmin";
const mapStyles = {
    height: '300px',
    width: '100%',
};
const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};

const Contacto = () => {
    const { user, WhichRole, TituloContact, UbicacionContact, GmailContacto, TelefonoContact, TituloDosContact, setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact, GetContact } = useContextCar()
    const [TitleContact, setTitleContact] = useState('Encuentranos en')
    const [UbicationContact, setUbicationContact] = useState('#12 Av. Antonio G. San Frac., Duarte, 31000, Rep. Dom.')
    const [Gmail, setGmail] = useState('info@car.com')
    const [Phone, setPhone] = useState('809-333-3333')
    const [TitleTwo, setTitleTwo] = useState('Siguenos en Nuestras Redes Sociales')


    const handleEditTextContact = () => {
        const newTitle = prompt('Edit title home:', TituloContact);
        if (newTitle !== null) {
            editTituloContact(newTitle)
            GetContact(setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact )
        }
    }
    const handleEditUbicacion = () => {
        const newUbicacion = prompt('Edit ubication home:', UbicacionContact);
        if (newUbicacion !== null) {
            editUbicacionContact(newUbicacion)
            GetContact(setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact )
        }
    }

    const handleEditGmail = () => {
        const newCorreo = prompt('Edit gmail home:', GmailContacto);
        if (newCorreo !== null) {
            editGmailContact(newCorreo)
            GetContact(setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact )
        }
    }

    const handleEditTelefono = () => {
        const newTelefono = prompt('Edit phone home:', TelefonoContact);
        if (newTelefono !== null) {
            editPhoneContact(newTelefono)
            GetContact(setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact )
        }
    }

    const handleEditTitleTwo = () => {
        const newTituloDos = prompt('Edit title two home:', TituloDosContact);
        if (newTituloDos !== null) {
            editTitulotwoContact(newTituloDos)
            GetContact(setTituloContact, setUbicacionContact, setGmailContact, setTelefonoContact, setTituloDosContact )
        }
    }
    const [isOpenEditImg, setisOpenEditImg] = useState(false)

    const handleOpenEditImage = () => {
        setisOpenEditImg(!isOpenEditImg)
    }
    

    return (
        <div style={{backgroundImage: `url( ${SFMImage})`}} className=" bg-fixed flex bg-transparent overflow-hidden relative flex-col justify-center items-center px-16 py-1 mt-20 w-full min-h-[768px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
             {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleOpenEditImage()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
            <div className="bg-transparent relative w-full max-w-[1226px] max-md:max-w-full">
                <h1 className="text-3xl text-white font-bold"> Contáctanos</h1>
                <hr />
                <div className="bg-transparent mt-6 brightness-105 z-50  gap-5 max-md:flex-col max-md:gap-0">
                    <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
                    </LoadScript>
                    <div className=" mt-10 m-auto md:flex justify-center gap-28 ">
                        <div className=" brightness-110 text-white text-center font-bold"> 
                            <h2 className=" text-2xl font-bold">
                                {TituloContact}
                                {TitleContact}
                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleEditTextContact()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            
                            </h2>
                            <div className='f'>
                                {UbicacionContact}
                                {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleEditUbicacion()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            </div>

                            <div className='mb-4'>
                                {Gmail}
                                {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleEditGmail()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            </div>
                            <div className='mb-4'>
                                {Phone}
                                {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleEditTelefono()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            </div>
                        </div>
                        <div>
                            <h2 className=" text-white text-2xl font-bold text-center " >{TitleTwo}
                            {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleEditTitleTwo()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                            
                            </h2>

                            <div className=" flex m-auto mt-20 items-center justify-between w-full">
                                <div className="hover:rotate-[360deg] hover:scale-125 hover:transition-all transition-all">
                                    <a href="#"><img className="w-16 duration-200" src={facebooktwo} alt="Facebook" /></a>
                                    {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleOpenEditImage()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                                </div>
                                <div className="hover:rotate-[360deg] hover:scale-125 hover:transition-all transition-all"> 
                                    <a href="#"><img className="w-16" src={instagramtwo} alt="Instagram" /></a>
                                    {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleOpenEditImage()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                                </div>
                                <div className="hover:rotate-[360deg] hover:scale-125 hover:transition-all transition-all">
                                    <a href="#"><img className=" w-16" src={twitter} alt="Twitter" /></a>
                                    {user && (WhichRole === 'admin' || WhichRole === 'Owner') && (
                                <div className="px-3 py-2   text-xs leading-4">
                                    <button onClick={() => handleOpenEditImage()} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} className="text-yellow-400" />
                                    </button>
                                </div>
                            )}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    );

}
export default Contacto;
