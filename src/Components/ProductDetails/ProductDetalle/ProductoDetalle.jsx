import React from "react";
import { useState } from "react";
import { useContextCar } from "../../../Context/Context";


const ProductDetails = () => {
    const { CarAvailable, Formatnumber, ReservaCar } = useContextCar()
    
    const [isOpen, setIosOpen] = useState(false);

    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');

    const currentDate = new Date();
    const ReservationDate = currentDate.toLocaleString();

    const validateName = (name) => {
        return name && name.trim().length > 0;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/; // Ajusta según el formato de teléfono que uses
        return phoneRegex.test(phone);
    };

    const handleReservationClick = async () => {

        if (!validateName(nameUser)) {
            alert('Por favor, ingresa el nombre correcto.');
            return;
        }

        if (!validateEmail(emailUser)) {
            alert('Por favor, ingresa el Email correcto.');
            return;
        }

        if (!validatePhone(phoneUser)) {
            alert('Por favor, ingresa el número correcto.');
            return;
        }

        const reservationData = {
            informationUser: {
                nameUser,
                emailUser,
                phoneUser,
                ReservationDate
            },
            informationVehicle: {
                Titulo: CarAvailable.Sale.DetalleCoche.Titulo,
                marca: CarAvailable.Sale.DetalleCoche.Marca,
                modelo: CarAvailable.Sale.DetalleCoche.Modelo,
                condicion: CarAvailable.Sale.DetalleCoche.Condicion,
                precio: CarAvailable.Sale.Precio.Precio
            }
        };
        // Llamar a la función ReservaCar con los datos de la reserva
        await ReservaCar(reservationData);

        // Abrir el modal si la reserva fue exitosa
        //Si no me habre otro modal de error 
        
        setIosOpen(true);


        console.log(reservationData);

    };



    return (

        <div className=' bg-gray-900 '>
            <div className=" text-white flex flex-col justify-center items-start px-16 py-14 w-full bg-zinc-950 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col ml-16 max-md:max-w-full">
                    <div className="text-5xl max-md:max-w-full max-md:text-4xl">
                        {CarAvailable?.Sale?.DetalleCoche?.Titulo}
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-6 gap-1 ">

                {CarAvailable?.Sale?.Multimedia.Imagen.map((Image, index) => (

                    <div key={index} className="max-w-sm bg-white border mx-2 mt-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <div>
                            <img className="rounded-t-lg" src={Image} alt="" />
                        </div>

                    </div>
                ))}
            </div>

            <div className=" flex flex-col self-stretch py-20 mt-32 font-semibold text-white bg-[#0B0C10] max-md:pl-5 max-md:mt-10 max-md:max-w-full justify-center">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:flex-col">
                    <div className="p-32">

                        <div className="flex flex-col grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-2xl font-bold text-zinc-300 max-md:max-w-full">
                                Descripción
                            </div>
                            <div className="mt-5 text-base bg-clip-text max-md:max-w-full">
                                {CarAvailable?.Sale?.DetalleCoche?.Descripcion}

                            </div>

                            <div className="mt-20 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
                                Característica
                                <br />
                            </div>
                            <div className="bg- flex gap-3 mt-5 text-lg text-white max-md:flex-wrap">

                                {
                                    CarAvailable?.Sale?.Features?.Features.map((feature, index) => (
                                        <div key={index} className="bg-slate-900 flex flex-col justify-center rounded-md">
                                            <div className=" flex gap-2 px-2 py-  bg-slate-900">

                                                <div >{feature}</div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                                <div className="mt-24  text-base font-medium text-white max-md:mt-10 max-md:max-w-full">

                                    <div className='text-2xl'>
                                        Hacer reserva
                                    </div>

                                    <div className="py-2 mt-4">
                                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            onChange={(e) => setNameUser(e.target.value)}
                                            className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre completo" required />

                                    </div>

                                    <div className="py-2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={(e) => setEmailUser(e.target.value)}
                                            className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                                    </div>

                                    <div className="py-2">
                                        <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                                        <input
                                            type="text"
                                            name="telefono"
                                            id="telefono"
                                            onChange={(e) => setPhoneUser(e.target.value)}
                                            className="bg-gray-50 border h-12 w-full p-2.5 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Teléfono" required />

                                    </div>

                                </div>

                                    {/* Tu contenido del componente aquí */}
                                    <button
                                        className="justify-center py-4 mt-16 text-xl text-white whitespace-nowrap rounded-lg bg-sky-600 hover:bg-sky-400 bg-opacity-60 max-md:px-5 max-md:mt-10"
                                        onClick={handleReservationClick}>Reservar</button>

                                    {
                                        isOpen && (
                                            <div className="fixed inset-0 flex items-center justify-center z-50 sm:mx-0 min-h-screen w-full text-white backdrop-blur-sm">
                                                <div className="flex flex-col items-center px-20 py-8 text-3xl text-black rounded-2xl bg-zinc-300 max-w-[671px] max-md:w-[85%] max-md:h-65">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8deecdfa608c19b062408dc30ffa638c671c7967a8c0d2febfa133cf058b525a?"
                                                        className="max-w-full aspect-square w-[80px]"
                                                    />
                                                    <div className="justify-center mt-8 text-xl max-md:text-lg">Gracias por compatirnos tu interes.</div>
                                                    <div className="mt-3 text-xl max-md:text-sm m justify-center">
                                                        Brevemente nos estaremos contactando con usted.
                                                    </div>
                                                    <button className="justify-center px-7 py-4 mt-16 text-xl text-white whitespace-nowrap rounded-lg bg-red-700 bg-opacity-60 max-md:px-5 max-md:mt-10"
                                                        onClick={() => setIosOpen(false)}>
                                                        Cerrar
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                           

                            </div>


                        </div>

                    </div>

                    <div className=" m-32 ">

                        <div className="justify-center items-center mx-32 py-4 text-2xl font-bold text-center text-sky-600 whitespace-nowrap rounded border border-sky-600 border-solid max-w-[395px]">
                            ${Formatnumber(CarAvailable?.Sale?.Precio?.Precio)}
                        </div>
                        <div className="flex flex-col p-6 mt-12 w-full bg-gray-900 rounded max-md:px-5 max-md:mt-10">
                            <div className="text-xl font-bold text-white">Detalles del auto</div>
                            <div className="flex gap-5 justify-between py-1.5 mt-5 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Marca</div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.Marca}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">Modelo</div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.Modelo}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Condición</div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.Condicion}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Año</div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.Year}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2 whitespace-nowrap">
                                <div className="self-start text-base font-medium text-neutral-400">
                                    Tipo de Cuerpo
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.TipoCuerpo}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">Asientos</div>
                                <div className="text-lg text-right text-white"> {CarAvailable?.Sale?.DetalleCoche?.Capacidad} Personas</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Color exterior
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleCoche?.Color}</div>

                            </div>
                            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Motor
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-5 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">
                                    Combustible
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleMotor?.TipoCombustimble}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Kilometraje
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleMotor?.Kilometraje} km</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">
                                    Transmisión
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.DetalleMotor?.Transmision}</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Tracción
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">
                                    {CarAvailable?.Sale?.DetalleMotor?.DriverTrain}
                                    <br />
                                </div>
                            </div>
                            <div className="flex gap-5 py-1 mt-2">
                                <div className="my-auto text-base font-medium text-neutral-400">
                                    Power
                                </div>
                                <div className="flex-auto text-lg text-right text-white">
                                    {CarAvailable?.Sale?.DetalleMotor?.CapacidadMotor} hp
                                </div>
                            </div>
                            {/* <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Batería y carga
                                <br />
                            </div>
                            <div className="flex gap-5 justify-between py-1">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Capacidad de la batería
                                </div>
                                <div className="text-lg text-right text-white">55.0-kWh</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Velocidad de carga
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">64 km/h</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Puerto de carga
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">Type 2</div>
                            </div>
                            <div className="flex gap-5 justify-center py-1 mt-2">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Tiempo de carga (0-&gt;Full)
                                </div>
                                <div className="text-lg text-right text-white">330 mnt</div>
                            </div> */}
                            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Dimensión
                                <br />
                            </div>
                            <div className="flex gap-5 justify-between py-1">
                                <div className="text-base font-medium text-neutral-400">
                                    Longitud
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.Dimension?.Longitud} mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Ancho
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.Dimension?.Ancho} mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">Altura</div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.Dimension?.Altura} mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Volumen de carga
                                </div>
                                <div className="text-lg text-right text-white">{CarAvailable?.Sale?.Dimension?.VolumenCarga} L</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;