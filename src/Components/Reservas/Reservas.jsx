import React from 'react';
import { useState } from 'react';
import { useContextCar } from '../../Context/Context';
import ReservationModal from './ReservationModal';

const Reservas = () => {
    const { ReservaCarList, Formatnumber } = useContextCar();



    const [showModal, setShowModal] = useState(false);
    const [selectedReserva, setSelectedReserva] = useState(null);

    const handleOpenModal = (reserva) => {
        setSelectedReserva(reserva);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedReserva(null);
    };

    return (
        <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden rounded-lg border border-gray-600 shadow-md m-5">
                    <table className="min-w-full divide-y divide-gray-600 bg-[#12232E] text-left text-sm text-gray-500">
                        <thead className="bg-[#0e1b24]">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Nombre</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Teléfono</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Email</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Auto</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Precio</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-600 border-t border-gray-600">
                            {ReservaCarList && Array.isArray(ReservaCarList) && ReservaCarList.map((reserva, index) => (
                                <tr key={index} className="hover:bg-gray-900 text-gray-100 max-w-full cursor-pointer "  onClick={() => handleOpenModal(reserva)}>
                                    <td className="px-6 py-4">{reserva.informationUser.nameUser}</td>
                                    <td className="px-6 py-4">{reserva.informationUser.phoneUser}</td>
                                    <td className="px-6 py-4">{reserva.informationUser.emailUser}</td>
                                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-100">
                                        <div className="text-sm">
                                            <div className="font-medium text-gray-100">{reserva.informationVehicle.Titulo}</div>
                                            <div className="text-gray-400">Condición: {reserva.informationVehicle.condicion}<br />Año: 
                                            {reserva.informationVehicle.year}, Color: {reserva.informationVehicle.color}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">${Formatnumber(reserva.informationVehicle.precio)}</td>
                                    <td className='font-medium text-gray-100 mx-2'>{reserva.informationUser.ReservationDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ReservationModal showModal={showModal} handleClose={handleCloseModal} reserva={selectedReserva} />
        </div>
    );
};

export default Reservas;
