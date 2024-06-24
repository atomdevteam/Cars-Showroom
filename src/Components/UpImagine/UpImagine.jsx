
import React from "react";
import { FaPlus } from "react-icons/fa6";


const UpImagine = () => {

    return (
        <div className="bg-[#071620] rounded-lg  text-white  m-10">

            <div className="ml-8 mr-8 mb-12 mt-8">
                <div className="text-left flex justify-between items-center cursor-pointer">
                    <h3 className="text-2xl">Imagenes o Videos</h3>
                </div>

                <div className="mt-8">
                    <h1 className="">subir imagen o video</h1>

                    <button className="flex flex-col justify-center mt-2 max-w-[250px] ">
                        <div className="flex justify-center items-center px-16 w-full rounded border-4 border-gray-800 border-dashed aspect-square bg-zinc-950">
                        <FaPlus className="my-3.5 w-16 aspect-square text-4xl" />

                        </div>
                    </button>

                </div>

            </div>

        </div>
    )


}

export default UpImagine;