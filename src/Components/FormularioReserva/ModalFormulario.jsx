
import React from "react";
import { useState } from "react";

export default function Modal(){

    const [isOpen, setIosOpen] = useState(false);

    return(
        <>

            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

                

            </div>
        
        </>
    )
}