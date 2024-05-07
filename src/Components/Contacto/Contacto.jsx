
const Contacto = () => {
    return (
        <div className="flex bg-transparent overflow-hidden relative flex-col justify-center items-center px-16 py-16 mt-20 w-full min-h-[768px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet="https://i.ibb.co/vVPLHjR/ConCard.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="relative w-full max-w-[1226px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[56%]  max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://i.ibb.co/m8x6BFd/map.png"
                            className="grow w-full aspect-square max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                    <div className="flex bg-transparent flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col grow mt-2.5 text-lg font-semibold text-white max-md:mt-10 max-md:max-w-full">
                            <div className=" bg-transparent text-4xl font-bold max-md:max-w-full">
                                Contacto
                            </div>
                            <div className="mt-12 font-medium max-md:mt-10 max-md:max-w-full ">
                                Nombre
                            </div>
                            <div className="justify-center items-start px-4 py-4 mt-1.5 text-base bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                Nombre completo
                            </div>
                            <div className="mt-6 font-medium max-md:max-w-full">Email</div>
                            <div className="justify-center items-start px-4 py-4 mt-1.5 text-base whitespace-nowrap bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                email@mail.com
                            </div>
                            <div className="mt-6 font-medium max-md:max-w-full">Teléfono</div>
                            <div className="justify-center items-start px-4 py-4 mt-1.5 text-base whitespace-nowrap bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                000-000-000
                            </div>
                            <div className="mt-6 font-medium max-md:max-w-full">
                                Comentario
                            </div>
                            <div className="justify-center items-start px-4 pt-3.5 pb-7 mt-1.5 text-base bg-gray-800 rounded text-neutral-400 max-md:pr-5 max-md:max-w-full">
                                Deja un mensaje aquí
                            </div>
                            <button className="justify-center items-center px-16 py-4 mt-9 text-base text-center whitespace-nowrap bg-sky-600 rounded max-md:px-5 max-md:max-w-full">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Contacto;
