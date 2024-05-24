import Teslalogo from "../../assets/img/Teslalogo.png"
const Contacto = () => {
    return (
        <div className=" flex bg-transparent overflow-hidden relative flex-col justify-center items-center px-16 py-1 mt-20 w-full min-h-[768px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet="https://i.ibb.co/vVPLHjR/ConCard.png"
                className="object-cover absolute bg-fixed hidden md:block inset-0 size-full"
            />
            <div className="bg-transparent relative w-full max-w-[1226px] max-md:max-w-full">
                <div className="bg-transparent flex gap-5 max-md:flex-col max-md:gap-0">
                    <div data-aos="flip-down" className="flex flex-col w-[56%]  max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://i.ibb.co/m8x6BFd/map.png"
                            className="grow w-full aspect-square max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                    <div className=" flex bg-transparent flex-col hidden md:block ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex relative flex-col grow mt-2.5 text-lg font-semibold text-white max-md:mt-10 max-md:max-w-full">
                            <div data-aos="zoom-in" className=" bg-transparent text-4xl font-bold max-md:max-w-full">
                                Contacto
                            </div>
                            <div data-aos="zoom-in-down" className="bg-transparent mt-12 font-medium max-md:mt-10 max-md:max-w-full ">
                                Nombre
                            </div>
                            <div data-aos="zoom-in-down" className="justify-center items-start mt-1.5 text-base bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                <input type="text" placeholder="Nombre Completo" className="w-full h-full p-3 bg-gray-800 rounded-lg " />
                            </div>
                            <div data-aos="zoom-in-down" className="bg-transparent mt-6 font-medium max-md:max-w-full">Email</div>
                            <div data-aos="zoom-in-down" className="justify-center items-start mt-1.5 text-base whitespace-nowrap bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                            <input type="text" placeholder="email@gmail.com" className="w-full h-full p-3 bg-gray-800 rounded-lg" />
                            </div>
                            <div data-aos="zoom-in-down" className="bg-transparent mt-6 font-medium max-md:max-w-full">Teléfono</div>
                            <div data-aos="zoom-in-down" className="justify-center items-start mt-1.5 text-base whitespace-nowrap bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                            <input type="text" placeholder="000-000-0000" className="w-full h-full p-3 bg-gray-800 rounded-lg" />
                            </div>
                            <div data-aos="zoom-in-down" className="bg-transparent mt-6 font-medium max-md:max-w-full">
                                Comentario
                            </div>
                            <div data-aos="zoom-in-down" className="justify-center items-start   text-base bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                <textarea name="Comment" id="Comment" rows={7} placeholder="Deja un Mensaje Aquí..." className=" rounded-lg w-full h-full p-3 bg-gray-800"></textarea>
                            </div>
                            <button data-aos="zoom-in-down" className="justify-center items-center mt-9 text-base text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:max-w-full">
                            <input type="submit" placeholder="000-000-0000" className="w-full h-full p-3 cursor-pointer rounded-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    );

}
export default Contacto;
