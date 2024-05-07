
const Servicios = () => {
    return (
        <div className="flex flex-col self-center justify-center items-center mt-20 w-full  max-md:mt-10 max-md:max-w-full bg-[#0B0C10]">
            <div className="text-2xl font-bold text-zinc-300 max-md:max-w-full">
                Nuestro servicio
            </div>

            <div className="px-px mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <button className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">

                        <div className="flex flex-col grow px-16 py-8 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9f552b1b9dbed70ddbc2bea9c5b490daad4ff9db8346ead42fee009970bbc3?"
                                className="self-center w-12 aspect-square"
                            />
                            <p className="mt-3.5">Comprar un auto nuevo</p>


                        </div>
                    </button>

                    <button className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-14 py-8 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c28109c0ab96d720ae0c3833a2c1459e45bf3c3f626dacc93d0e3a39ae00b7e?"
                                className="self-center w-12 aspect-square"
                            />

                            <p className="mt-3.5">comprar un auto usado</p>
                        </div>
                    </button>

                    <button className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-20 py-9 w-full text-lg font-bold text-white text-sm rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8db7bbb2f228a3e2dd1dbc3ff5effec1ebcf26ffb88ef187d70ede740e8844f2?"
                                className="self-center w-12 aspect-square"
                            />
                            <p className="mt-3.5">Vender mi carro</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="mt-24 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
            </div>
        </div>
    );
}

export default Servicios