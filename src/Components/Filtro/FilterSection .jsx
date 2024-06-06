import React, { useState } from 'react';

import flechatop from "../../assets/img/flechatop.png"

const FilterSection = ({ title, options, open, onToggle, onSearch, showSearch, setselectfiltroOptions }) => {


    const handleCheckboxChange = (options) => {
        console.log(options)
        const normalizeString = (str) => {
            if (typeof str !== 'string') return '';
            return str.toLowerCase().trim().replace(/\s+/g, ' ');
        };
        const option = normalizeString(options)
        setselectfiltroOptions(prevOptions => {

            console.log(prevOptions.Year)
            const updatedOptions = { ...prevOptions };

            switch (title) {
                case "Años":
                    updatedOptions.Year = updatedOptions.Year.includes(option)
                        ? updatedOptions.Year.filter(item => item !== option)
                        : [...updatedOptions.Year, option];
                    break;
                case "Marca":
                    updatedOptions.Marca = updatedOptions.Marca.includes(option)
                        ? updatedOptions.Marca.filter(item => item !== option)
                        : [...updatedOptions.Marca, option];
                    break;
                case "Modelo":
                    updatedOptions.Modelo = updatedOptions.Modelo.includes(option)
                        ? updatedOptions.Modelo.filter(item => item !== option)
                        : [...updatedOptions.Modelo, option];
                    break;
                case "Estado":
                    updatedOptions.Estado = updatedOptions.Estado.includes(option)
                        ? updatedOptions.Estado.filter(item => item !== option)
                        : [...updatedOptions.Estado, option];
                    break;
                case "Transmisión":
                    updatedOptions.Transmision = updatedOptions.Transmision.includes(option)
                        ? updatedOptions.Transmision.filter(item => item !== option)
                        : [...updatedOptions.Transmision, option];
                    break;
                case "Tipo de combustible":
                    updatedOptions.Combustible = updatedOptions.Combustible.includes(option)
                        ? updatedOptions.Combustible.filter(item => item !== option)
                        : [...updatedOptions.Combustible, option];
                    break;
                case "DriverTrain":
                    updatedOptions.DriverTrain = updatedOptions.DriverTrain.includes(option)
                        ? updatedOptions.DriverTrain.filter(item => item !== option)
                        : [...updatedOptions.DriverTrain, option];
                    break;
                case "Capacidad de pasajeros":
                    updatedOptions.CapacidadPasajeros = updatedOptions.CapacidadPasajeros.includes(option)
                        ? updatedOptions.CapacidadPasajeros.filter(item => item !== option)
                        : [...updatedOptions.CapacidadPasajeros, option];
                    break;
                default:
                    break;
            }

            return updatedOptions;
        });
    };

    return (


        <div className='bg-[#152836] mt-5'>
            <div className='flex justify-between border-b items-center cursor-pointer px-5' onClick={onToggle}>
                <h2 className="bg-transparent py-3 text-2xl">{title}</h2>
                <img className={`bg-transparent w-5 h-5 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" />
            </div>
            {open && (
                <div className="bg-[#152836] flex gap-4 flex-col text-2xl mt-3 px-5 py-3">
                    {showSearch && (
                        <div className='px-5'>
                            <input className="bg-transparent border w-full mt-3 px-3 py-2" type="text" placeholder='Buscar' onChange={onSearch} />
                        </div>
                    )}
                    {options.map((option, index) => (
                        <label
                            key={index}
                            className="bg-transparent hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm"
                        >
                            <input onChange={() => handleCheckboxChange(option)} className="items-center mr-2" type="checkbox" id={`checkbox${option}`} />
                            {option}
                        </label>
                    ))}
                    <a className="bg-transparent text-blue-500" href="#">Ver Más</a>
                </div>
            )}
        </div>
    )
}

export default FilterSection