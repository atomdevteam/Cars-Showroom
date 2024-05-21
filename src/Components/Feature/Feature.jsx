import React, { useState, useEffect } from 'react';
import CheckBox from '../Checkbox/CheckBox';

const Feature = ({ FeatureDatos,  newFeature, setNewFeature}) => {
    const [selectedFeatures, setSelectedFeatures] = useState([]);
 
    // Función para manejar cambios en los checkboxes
    const handleCheckboxChange = (feature) => {
        setSelectedFeatures((prevSelectedFeatures) => {
            if (prevSelectedFeatures.includes(feature)) {
                return prevSelectedFeatures.filter((item) => item !== feature);
            } else {
                return [...prevSelectedFeatures, feature];
            }
        });
    };

    const handleBlur = () => {
        // if (newFeature.trim()) {
        //     setSelectedFeatures((prevSelectedFeatures) => [...prevSelectedFeatures, newFeature.trim()]);
        //     // setNewFeature(''); // Limpiar el textarea después de agregar la característica
        // }
    };

    useEffect(() => {
        FeatureDatos.Features = selectedFeatures
    }, [selectedFeatures, FeatureDatos])



    console.log(selectedFeatures)

    return (
        <div className='bg-[#071620] text-white mb-12'>
            <div className='ml-8 mr-8 mb-12 mt-8'>
                <div className='text-left'>
                    <h3 className='underline text-2xl'>Features</h3>
                </div>
                <div className='mt-8'>
                    <form className='max-w-full'>
                        <div className='mb-4 grid gap-6 lg:grid-cols-1 w-full'>
                            <div className='mb-8'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buscar</label>
                                <input type="search" className="bg-[#12232E] text-sm block w-full p-2.5" required />
                            </div>
                        </div>

                        <div className='mb-8 grid gap-6 lg:grid-cols-4 w-full'>
                            {['Dirección asistida', 'Asientos con calefacción', 'Sensor de estacionamiento trasero', 'USB Port', 'AC', 'Wifi', 'Barra de techo', 'Sistema de sonido', 'Alarma', 'Control de crucero', 'Ventanas eléctricas', 'Asiento con memoria', 'Bluetooth', 'Sensor de estacionamiento delantero', 'Techo corredizo', 'Otro'].map((feature) => (
                                <CheckBox
                                    key={feature}
                                    text={feature}
                                    isChecked={selectedFeatures.includes(feature)}
                                    onCheckboxChange={() => handleCheckboxChange(feature)}
                                />
                            ))}
                        </div>

                        <div className='mb-4'>
                            <textarea
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                                onBlur={handleBlur}
                                className="bg-[#12232E] text-sm block w-full p-8"
                                placeholder='Escribe otra característica aquí.'
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feature;
