import ubi from '../../assets/img/ubi.png'
import tele from '../../assets/img/tele.png'
import Gmai from '../../assets/img/Gmai.png'
import carro from '../../assets/img/carro.png'
const Testimonio = () => {

    return (
        <div className="bg-transparentflex flex-col px-5 bg-black">
            <div data-aos="flip-down" className=' bg-gray-900 py-16 block md:hidden px-5 rounded-lg text-center'>
                <div className='text-blue-500 mb-6 text-2xl border-b border-blue-500 py-10'>
                    <div className='flex justify-center text-white text-2xl items-center p-1'>
                        <div>
                            <img src={tele} alt="Telefono" />
                        </div>
                        <p>Telefono</p>
                    </div>
                    <span>240-865-3730</span>
                </div>
                <div className='text-blue-500 text-2xl border-b border-blue-500 py-10'>
                    <div className='flex justify-center text-white text-2xl items-center p-3'>
                        <div>
                            <img src={Gmai} alt="Email" />
                        </div>
                        <p>Email</p>
                    </div>
                    <span>info@autohunt.com</span>
                </div>
                <div className='text-blue-500 text-2xl mt-6 py-10' >
                    <div className='flex justify-center text-white text-2xl items-center p-3'>
                        <div>
                            <img src={ubi} alt="Direccion" />
                        </div>
                        <p>Dirección</p>
                    </div>
                    <span>#12, Av. Antonio Guzman, San Francisco de Macorís, 31000, Republica Dominica.</span>
                </div>
            </div>
            

            <div data-aos="flip-right" className="bg-transparent hidden md:block overflow-hidden px-8   mt-4 w-full fill-slate-900 max-md:px-5 max-md:max-w-full">
                <div data-aos="zoom-in" className="bg-transparent p-14 self-start lg:text-4xl md:text-4xl font-bold text-zinc-300 max-md:ml-1 mb-4">
                    Testimonio
                </div>
                <div className='bg-slate-600 py-6 px-6'>
                    <div className="bg-transparent flex gap-5 max-md:flex-col max-md:gap-0 ">
                    <div data-aos="zoom-in-up" className="flex flex-col md:w-[50%] w-full max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://i.ibb.co/MkcZ28p/men.png"
                            className="grow w-full h-full aspect-[2.08] max-md:mt-10 contrast-100 brightness-100"
                        />
                    </div>
                    <div data-aos="zoom-in-down" className="bg-transparent flex flex-col ml-5 w-[58%]   max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex flex-col mt-1.5 text-lg text-sky-600 max-md:mt-10 max-md:max-w-full">
                            <div className="bg-transparent text-2xl font-bold max-md:max-w-full">
                                Omar Mango
                            </div>
                            <div className="bg-transparent mt-1.5 max-md:max-w-full">Customer</div>
                            <div className="bg-transparent mt-8 font-semibold xl:text-2xl text-justify text-zinc-300 max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                                aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                                scelerisque pulvinar venenatis sodales. Quis nulla euismod
                                feugiat at interdum in. Venenatis arcu semper lectus quis sit in
                                rhoncus auctor.
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>

            
        </div>
    );
}

export default Testimonio