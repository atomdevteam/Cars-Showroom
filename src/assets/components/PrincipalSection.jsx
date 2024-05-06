import React from 'react'
import Maclaren from "../img/Maclaren.png"
import Mustang from "../img/Mustang.png"
import Userone from "../img/Userone.png"
import phone from "../img/phone.png"
import Message from "../img/Message.png"
import newmessage from "../img/newmessage.png"
import usertwo from "../img/usertwo.png"
import firstcar from "../img/firstcar.png"
import secondcar from "../img/secondcar.png"
function PrincipalSection() {
  return (
    <div className='md:m-10 m-3'>
        <div data-aos="zoom-out-down" className='max-w-full'>
            <img className='w-full' src={Maclaren} alt="Maclaren" />
        </div>
        <div className='md:m-16 lg:m-24 xl:m-72 md:px-2 m-10 '>
            <p data-aos="fade-up" className='xl:text-3xl text-justify'>
                El cliente es muy importante, el cliente será seguido por el cliente. Aunque está embarazada, ha suspendido su maquillaje.
                Levadura de cama en mujeres embarazadas en o. Accumsan gravida ni ultricies necesitan una sonrisa del moño feo. 
            </p>
            <p data-aos="fade-up" className='xl:text-3xl mt-5 text-justify'>
                Ullamcorper pellentesque diam necesita una carrera. De modo que la vejez del tincidun es mayor que la de la vida.
                 Todo el mundo odia el hecho de que sea una caricatura. En consecuencia, se decía que la flecha del valle era el lecho del arco del hambre,
                pero El precio del carcaj venenoso, las risas, las flechas de la caricatura ahora suspendidas fácilmente. 
            </p>
            <div data-aos="flip-left" className='overflow-hidden mt-5 cursor-pointer'>
                <img className='w-full mt-5 hover:scale-150 transition-all' src={Mustang} alt="Mustang" />
            </div>
            <h1 data-aos="fade-up" className='xl:text-5xl mt-8'>¿Por qué?</h1>
            <ul data-aos="fade-up" className='xl:text-4xl w-full list-disc px-10 py-5 text-justify'>
                <li>Leo amet, para poner el nibh para no vestibulum sagittis mauris. </li>
                <li>El elemento de la piscina, y la cama actual sólo necesita una almohada. </li>
                <li>Vulputate nibh molestie mañana dapibus. </li>
                <li>Halaga el veneno, conviene decir que es una consecuencia, pero también. </li>
            </ul>
            <h1 data-aos="fade-up" className='xl:text-5xl mt-8'>¿Cómo?</h1>
            <ul data-aos="fade-up" className='xl:text-4xl w-full list-disc px-10 py-5 text-justify'>
                <li>Leo amet, para poner el nibh para no vestibulum sagittis mauris. </li>
                <li>El elemento de la piscina, y la cama actual sólo necesita una almohada.  </li>
                <li>Vulputate nibh molestie mañana dapibus. </li>
                <li>Halaga el veneno, conviene decir que es una consecuencia, pero también. </li>
            </ul>
            <h1 data-aos="fade-up" className='xl:text-5xl mt-8'>Refinamiento</h1>
            <p data-aos="fade-up" className="xl:text-3xl text-justify mt-5">
                Leo amet, para poner el nibh para no vestibulum sagittis mauris. El elemento de la piscina
                y la cama actual solo necesitan una almohada. Vulputate nibh molestie mañana dapibus. Halaga el veneno, conviene decir que es consecuencia, pero también. No dejaré que el chocolate fije el precio de los camiones. El objetivo es dar a luz al feo equipo de fútbol.
                Fermentar, halaga el suave dicho del fin de semana. Porque la risa es odio, pero de esa risa, y nacida.
            </p>
            <section className='mt-10'>
                <div className='md:flex xl:text-4xl gap-8 m-5'>
                    <button data-aos="fade-right" className='bg-gray-900 border hover:bg-blue-500 transition-all cursor-pointer mr-4 border-blue-500 px-5 py-4'>Autopilot</button>
                    <button data-aos="fade-left" className='bg-gray-900 border hover:bg-blue-500 transition-all cursor-pointer border-blue-500 px-5 py-4'>Car</button>
                </div>
                <hr />
                <div data-aos="fade-up-right" className='mt-9 md:grid md:grid-cols-3 gap-2 md:justify-between bg-gray-900 border  px-2 items-center '>
                    <div data-aos="flip-left" className='flex gap-5 bg-transparent md:border-r md:py-5 lg:border-r xl:border-r '>
                        <div className='bg-transparent'>
                            <img className='bg-transparent' src={Userone} alt="Experta Automotriz" />
                        </div>
                        <div className='bg-transparent '>
                            <p className='bg-transparent'>Carla Baptista</p>
                            <h5 className='bg-transparent'>Car Expert</h5>
                        </div>
                        
                    </div>
                    <div data-aos="flip-left" className='flex gap-5 bg-transparent md:border-r md:py-9'>
                        <img  className='xl:text-[2rem] xl:h-[2rem] bg-transparent' src={phone} alt="Phone" />
                        <p className='bg-transparent' >240-865-3730</p>
                    </div>
                    <div data-aos="flip-left" className='flex gap-5 bg-transparent'>
                        <img className='xl:text-[2rem] xl:h-[2rem] bg-transparent' src={Message} alt="Message" />
                        <p className='bg-transparent'>carla.b@mail.com</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='md:flex mt-10 gap-5'>
                    <img src={newmessage} alt="NewMessage" />
                    <p>1 Comment</p>
                </div>
                <div data-aos="zoom-in" className='md:flex flex md:justify-between mt-5 gap-5 px-6'>
                    <div className='xl:w-[30rem] lg:w-[10rem] md:w-[10rem] w-[15rem]'>
                        <img className='w-50 h-50 md:w-30 md:h-30' src={usertwo} alt="User" />
                    </div>
                    <div>
                        <h2 className='xl:text-3xl'>Ryan Carder</h2>
                        <p className='xl:text-2xl lg:text-[1rem] md:text-[0.8rem] text-[0.5rem] text-justify'>
                            Orci faucibus sit porttitor amet neque. Luctus ut maecenas urna pretium tristique aliquam, ante. Ut scelerisque mauris consequat,
                            ornare orci enim. Dolor velit, in nisl fermentum vel, tempor vitae neque, libero. Ac quam aliquam vel lectus. Quam dignissim vehicula
                            gravida aliquam aliquam gravida tempus posuere. Volutpat facilisi nunc, quis enim urna est. Suspendisse amet,
                            in blandit nec id mattis in consequat. Mattis enim aliquet pellentesque vel, vitae id. Est et fermentum at tempus eget nibh ultrices.
                        </p>
                    </div>
                </div>
                <form data-aos="zoom-in" className='mt-20' action="#">
                    <label htmlFor="">Comment</label>
                    <textarea className='bg-gray-900 w-full px-10 py-10 mt-5 rounded-sm' name="Leave a message here" id="" cols="30" rows="10" placeholder='Leave a message here'></textarea>
                    <input data-aos="flip-down" className='bg-blue-500 px-10 py-3 mt-10 hover:bg-gray-600 transition-all cursor-pointer' type="submit" value="Add Comments" /> 
                </form>
            </section>
            <section className='mt-20'>
                <h1 data-aos="zoom-in-up" className='lg:text-5xl'>Noticias Relacionadas</h1>
                <div className='md:flex md:justify-between mt-5 gap-5'>
                <div data-aos="zoom-out-up" className='md:w-[60rem] bg-slate-800'>
                        <div className='relative overflow-hidden '>
                            <img className='w-full hover:scale-125 transition-all cursor-pointer' src={firstcar} alt="Auto" />
                            <button className='absolute right-2 top-10  bg-blue-500 px-10 py-3 rounded-md'>June, 01 2021</button>
                        </div>
                        
                        <h3 className='px-5 py-5 text-3xl text-blue-500 bg-transparent'>Etiam Eget</h3>
                        <p className='px-5 py-5 text-1xl text-justify bg-transparent'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia perspiciatis
                            inventore facere harum iure quidem, modi eum laboriosam? Impedit fugiat illo cumque quasi! Assumenda officia natus atque quas itaque?
                        </p>
                        <div className='flex px-5 py-5 gap-7 bg-transparent'>
                            <button className='border hover:bg-blue-500 transition-all cursor-pointer border-blue-500 px-3 py-2 rounded-sm' >Dealer</button>
                            <button className='border hover:bg-blue-500 transition-all cursor-pointer border-blue-500 px-3 py-2 rounded-sm'>Electric</button>
                        </div>
                        <div className='flex justify-between px-5 py-5 items-center bg-transparent'>
                            <div className='flex items-center gap-3 bg-transparent'>
                                <img className='bg-transparent' src={Userone} alt="Experta" />
                                <p className='bg-transparent'>By Carla Baptista</p>
                            </div>
                            <div className='flex justify-between gap-3 bg-transparent'>
                                <img className='w-8 h-8 bg-transparent' src={newmessage} alt="Mensaje" />
                                <p className='bg-transparent'>1</p>
                            </div>
                        </div> 
                    </div>
                    <div data-aos="zoom-out-up" className='md:w-[60rem] bg-slate-800 md:mt-0 mt-10'>
                        <div className=' overflow-hidden '>
                            <img className='relative w-full hover:scale-125 transition-all cursor-pointer' src={secondcar} alt="Auto" />
                            <button className='absolute right-2 top-10  bg-blue-500 px-10 py-3 rounded-md'>June, 01 2021</button>
                        </div>
                        <h3 className='px-5 py-5 text-3xl text-blue-500 bg-transparent'>Turpis Sit</h3>
                        <p className='px-5 py-5 text-1xl text-justify bg-transparent'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia perspiciatis
                            inventore facere harum iure quidem, modi eum laboriosam? Impedit fugiat illo cumque quasi! Assumenda officia natus atque quas itaque?
                        </p>
                        <div className='flex px-5 py-5 gap-7 bg-transparent'>
                            <button className='border hover:bg-blue-500 transition-all cursor-pointer border-blue-500 px-3 py-2 rounded-sm' >Dealer</button>
                            <button className='border hover:bg-blue-500 transition-all cursor-pointer border-blue-500 px-3 py-2 rounded-sm'>Electric</button>
                        </div>
                        <div className='flex justify-between px-5 py-5 items-center bg-transparent'>
                            <div className='flex items-center gap-3 bg-transparent'>
                                <img className='bg-transparent' src={Userone} alt="Experta" />
                                <p className='bg-transparent'>By Carla Baptista</p>
                            </div>
                            <div className='flex justify-between gap-3 bg-transparent'>
                                <img className='w-8 h-8 bg-transparent' src={newmessage} alt="Mensaje" />
                                <p className='bg-transparent'>1</p>
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default PrincipalSection