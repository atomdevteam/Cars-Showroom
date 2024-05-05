import React from 'react'
import Start from "../../assets/TeslaModel/Start.png"
import Startv from "../../assets/TeslaModel/StartV.png"
import TeslaBack from "../../assets/TeslaModel/TeslaBack.png"
import CommentsTesla from '../CommentsTesla/CommentsTesla'
import RelatedReview from '../RelatedReview/RelatedReview'
const ReviewTesla = () => {
    return (
        <div className='w-[700px]  mb-8 flex flex-col '>
            <div className='text-[#007CC7] text-start text-2xl'>
                $56,690 - $57,750
            </div>
            <div className='bg-[#071620] w-full h-full   '>
                <div className='max-w-full mx-8'>

                    <div className='mt-8'>
                        <div className="flex mb-4 mr-2 flex-col lg:flex-row">

                            <div className=" flex flex-col items-center justify-center w-auto mx-8 mb-4">
                                <div className='w-20 h-20'>
                                    <img src={Start} className='' />
                                </div>

                                <div className='text-[#007CC7] text-center'>
                                    (12 Reviews)
                                </div>
                            </div>

                            <div className=" text-white w-full">
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        Comodidad
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Startv} className='mr-1 w-6 h-6' />
                                    </div>


                                </div>
                                <div className='border border-gray-600 my-1'></div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        Diseño
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                    </div>
                                </div>
                                <div className='border border-gray-600 my-1'></div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        Actuación
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                        <img src={Start} className='mr-1 w-6 h-6' />
                                    </div>
                                </div>
                                <div className='border border-gray-600 my-1'></div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        Precio
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='flex flex-row items-center'>
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Startv} className='mr-1 w-6 h-6' />
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-600 my-1'></div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        Fiabilidad
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <div className='flex flex-row items-center'>
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Start} className='mr-1 w-6 h-6' />
                                            <img src={Startv} className='mr-1 w-6 h-6' />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='text-white mt-8 '>
                <div>
                    <h3 className='text-3xl'>Fortaleza</h3>
                    <div className='ml-6 mt-4'>
                        <ul className="list-disc">
                            <li>Leo amet, para poner el nibh para no vestibulum sagittis mauris. </li>
                            <li>El elemento de la piscina, y la cama actual sólo necesita una almohada. </li>
                            <li>Vulputate nibh molestie mañana dapibus. </li>
                            <li>Halaga el veneno, conviene decir que es una consecuencia, pero también. </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full my-4'>
                    <img src={TeslaBack} />
                </div>

                <div className='my-4'>
                    <h3 className='text-3xl'>¿Por qué?</h3>
                    <div className='ml-6 mt-4'>
                        <ul className="list-disc">
                            <li>Leo amet, para poner el nibh para no vestibulum sagittis mauris.  </li>
                            <li>El elemento de la piscina, y la cama actual sólo necesita una almohada. </li>
                            <li>Vulputate nibh molestie mañana dapibus. </li>
                            <li>Halaga el veneno, conviene decir que es una consecuencia, pero también. </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className='text-3xl'>Conclusion</h3>
                    <div className=' mt-4'>
                        <p>
                            Leo amet, para poner el nibh para no vestibulum sagittis mauris.
                            El elemento de la piscina y la cama actual solo necesitan una almohada.
                            Vulputate nibh molestie mañana dapibus. Halaga el veneno, conviene decir que es consecuencia,
                            pero también. No dejaré que el chocolate fije el precio de los camiones. El objetivo es dar a
                            luz al feo equipo de fútbol. Fermentar, halaga el suave dicho del fin de semana. Porque la risa
                            es odio, pero de esa risa, y nacida.
                        </p>
                    </div>
                </div>

                <CommentsTesla />
                <RelatedReview />
             




            </div>
        </div>
    )
}

export default ReviewTesla