import React, { useState } from 'react';
import { Range } from 'react-range';

const RangoPrecio = () => {
    const [values, setValues] = useState([0, 3000000]);
    const min = 0;
    const max = 3000000;

    return (
        <div className="bg-transparent flex flex-col items-center text-white">
            <div className="text-lg font-semibold bg-transparent">Rango precio</div>
            <div className="mt-1.5 text-sm font-medium bg-transparent">
                ${values[0].toLocaleString()} - ${values[1].toLocaleString()}
            </div>
            <div className="flex gap-0 py-1.5 my-auto w-full">
                <Range
                    step={1}
                    min={min}
                    max={max}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="w-full h-2 bg-[#12232E] rounded"
                            style={{ ...props.style }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            className="w-6 h-6 bg-blue-400 rounded-full"
                            style={{ ...props.style }}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default RangoPrecio;
