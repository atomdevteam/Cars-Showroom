import React from 'react';
import { useContextCar } from '../../Context/Context';

const Reservas = () => {

    const { ListAllUser, updateUserRole, setListAllUser } = useContextCar(); 

    const handleEditRole = (userId, rol) => {
        const newRole = prompt("Ingrese el nuevo rol para este usuario: ", rol);
        if (newRole) {
            updateUserRole(userId, newRole, setListAllUser);
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden rounded-lg border border-gray-600 shadow-md m-5">
                    <table className="min-w-full divide-y divide-gray-600 bg-[#12232E] text-left text-sm text-gray-500">
                        <thead className="bg-[#0e1b24]">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Auto</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Precio</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Nombre</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Teléfono</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100">Email</th>
                                
                                <th scope="col" className="px-6 py-4 font-medium text-gray-100"></th>
                 
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-600 border-t border-gray-600">
                            
                            {ListAllUser.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-900 text-gray-100 max-w-full">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-100">
                                        <div className="relative h-10 w-10">
                                            <img
                                                className="h-full w-full rounded-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-medium text-gray-100">{user.name}</div>
                                            <div className="text-gray-400">{user.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{user.phone}</td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        {/* {user.role === 'admin' ? 'Administrador' :  user.role === "user" ? 	 'Usuario' : 'Propietario'}
 */}

                                        {/* {user.role !== "Owner" && (
                                            <button onClick={() => handleEditRole(user.id, user.role)} className='ml-2'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-yellow-500 hover:text-yellow-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </button>
                                        )} */}
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );





}
export default Reservas