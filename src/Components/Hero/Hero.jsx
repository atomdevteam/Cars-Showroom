
const Hero = () => {
    return (
        <div className="flex flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex z-10 flex-col mt-20 mb-0 w-full max-w-[1040px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">

                <div className="text-5xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                    Encuentra el coche de tus sueños
                </div>
                <div className="mt-7 text-2xl font-semibold text-white max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{""}
                </div>

                <div className="flex flex-col justify-center p-6 mt-64 bg-gray-900 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-0 self-center max-w-full text-xl font-black text-sky-600 whitespace-nowrap w-[357px]">
                        <div className="flex flex-col justify-center text-center">
                            <div>Todos</div>
                            <div className="shrink-0 mt-2 h-0.5 bg-sky-600 rounded-sm" />
                        </div>
                        <div className="justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5">
                            Nuevos
                        </div>
                        <div className="justify-end items-start px-9 pt-1.5 pb-3.5 max-md:pl-5">
                            Usados
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">
                        <div className="flex gap-4 px-4 py-3 text-lg bg-gray-800 rounded text-neutral-400 max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a59d522c277497ffdfa07f3d0ff59814f68c7f9cd0b74e51ad90d5d0b46cf6?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="shrink-0 w-6 aspect-square"
                            />
                            <div className="flex-1">Buscar</div>
                        </div>
                        <div className="flex gap-0 justify-center px-4 py-3 bg-gray-800 rounded">
                            <div className="flex-1 my-auto">Modelo</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="shrink-0 w-6 aspect-square"
                            />
                        </div>
                        <div className="flex gap-0 justify-center px-4 py-3 bg-gray-800 rounded">
                            <div className="flex-1 my-auto">Marca</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="shrink-0 w-6 aspect-square"
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">
                        <div className="flex gap-4 px-4 py-3 text-lg whitespace-nowrap bg-gray-800 rounded text-neutral-400">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a96a65eb1c5ecd493b000c9b77d237676aefed822c1ad3fd97d4db74c819743?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="shrink-0 w-6 aspect-square"
                            />
                            <div className="flex-1">Ubicación</div>
                        </div>
                        <div className="flex gap-4 justify-center py-0.5 max-md:flex-wrap">
                            <div className="flex flex-col text-white">
                                <div className="text-lg font-semibold">Rango precio</div>
                                <div className="mt-1.5 text-sm font-medium">
                                    $.0 - $3,000,000.00
                                </div>
                            </div>
                            <div className="flex gap-0 py-1.5 my-auto">
                                <div className="shrink-0 w-6 h-6 bg-blue-400 rounded-full" />
                                <div className="shrink-0 self-start mt-2 max-w-full h-2 bg-gray-800 rounded w-[264px]" />
                                <div className="shrink-0 w-6 h-6 bg-blue-400 rounded-full" />
                            </div>
                        </div>
                        <div className="justify-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-sky-600 rounded max-md:px-5">
                            Buscar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;