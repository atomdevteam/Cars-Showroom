
const ComprarAutos = () => {

    return (
        <div className="flex justify-center items-center px-17 py-3 max-md:px-5 bg-[#0B0C10]">

            <div className="flex flex-col mt-10 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full ">

                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col">
                        <div className="text-2xl font-bold text-white ">
                            Comparar Autos
                        </div>

                        <div className="flex gap-0 mt-7 text-xl font-black text-sky-600 whitespace-nowrap">
                            <button className="flex flex-col justify-center text-center">
                                <div>Nuevo</div>
                                <div className="shrink-0 mt-2 h-0.5 bg-sky-600 rounded-sm" />
                            </button>

                            <button className="justify-end items-start px-10 pt-1.5 pb-3.5 max-md:px-5">
                                Usado
                            </button>
                        </div>
                    </div>

                </div>


                <div className="mt-8 max-md:max-w-full ">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">

                        <div className="flex flex-col mx-8 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow p-4 mx-auto w-full text-base font-bold text-white rounded border-2 border-solid bg-zinc-950 border-slate-900 max-md:mt-6">
                                <img
                                    loading="lazy"
                                    srcSet="https://i.ibb.co/hynQ3wm/Ford.png"
                                    className="w-full aspect-[1.49]"
                                />
                                <button className="justify-center self-start px-3 py-1 mt-4 text-sm text-sky-600 whitespace-nowrap rounded border border-sky-600 border-solid">
                                    Nuevo
                                </button>
                                <div className="mt-3 text-xl font-semibold">
                                    Ford F-250 Super Duty
                                </div>

                                <div className="flex gap-2.5 mt-3 whitespace-nowrap max-md:ml-2.5">
                                    <div className="text-2xl font-bold text-sky-600">$82,098</div>
                                    <div className="my-auto text-base font-medium text-neutral-400">
                                        $83,500
                                    </div>
                                </div>

                                <div className="mt-4 font-semibold">SFM, DO</div>
                                <div className="flex gap-5 justify-between mt-3.5 w-full max-md:pr-5">
                                    <div className="flex gap-1 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b88e52937d10ac4761ab43022d8fbc2561824dc03de6d6c9b4e423b9effb65c?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">2021</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78953490a0e4e46027bbde42b3e66d1de1d92a66158a624b9d35df0526b4fcd2?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">
                                            Tracción trasera
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-4 whitespace-nowrap max-md:pr-5">
                                    <div className="flex gap-1.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/574967ea72bd9ac984f64d7d4bbaeb4f5384be73aeb0eae53f0bcde879145922?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">Diesel</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f44e4d847787f85b0095d2442fc7a2f39d6bf4e4645bcac8f3bfa33323a803?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">5</div>
                                    </div>
                                </div>
                                <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-400 border-neutral-400" />
                                <div className="flex gap-1 mt-3">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f02cf61b1fb58f5b54333bc3e4f956691d2e211dbd20be8125e6f2305850f028?"
                                        className="shrink-0 max-w-full aspect-[5] w-[120px]"
                                    />
                                    <div className="flex-auto">(12 Reviews)</div>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center items-center px-8 py-8 my-auto text-4xl text-white font-semibold whitespace-nowrap bg-blue-400 rounded-full h-[106px] w-[106px] max-md:px-8">
                            VS
                        </div>

                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow p-4 mx-auto w-full text-base font-bold text-white rounded border-2 border-solid bg-zinc-950 border-slate-900 max-md:mt-6">
                                <img
                                    loading="lazy"
                                    srcSet="https://i.ibb.co/dcKjhRd/Honda.png"
                                    className="w-full aspect-[1.49]"
                                />
                                <button className="justify-center self-start px-3 py-1 mt-4 text-sm text-sky-600 whitespace-nowrap rounded border border-sky-600 border-solid">
                                    Nuevo
                                </button>
                                <div className="mt-3 text-xl font-semibold">
                                    Honda Pilot Touring 7-Passenger
                                </div>
                                <div className="mt-3 text-2xl text-sky-600">$43,735</div>
                                <div className="mt-4 font-semibold">SFM, DO</div>
                                <div className="flex gap-5 justify-between mt-3.5 w-full max-md:pr-5">
                                    <div className="flex gap-1 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b88e52937d10ac4761ab43022d8fbc2561824dc03de6d6c9b4e423b9effb65c?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">2021</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78953490a0e4e46027bbde42b3e66d1de1d92a66158a624b9d35df0526b4fcd2?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">
                                            Tracción trasera
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-4 whitespace-nowrap max-md:pr-5">
                                    <div className="flex gap-1.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/574967ea72bd9ac984f64d7d4bbaeb4f5384be73aeb0eae53f0bcde879145922?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">Gasolina</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f44e4d847787f85b0095d2442fc7a2f39d6bf4e4645bcac8f3bfa33323a803?"
                                            className="shrink-0 w-5 aspect-square"
                                        />
                                        <div className="my-auto">7</div>
                                    </div>
                                </div>
                                <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-400 border-neutral-400" />
                                <div className="flex gap-1 mt-3">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f02cf61b1fb58f5b54333bc3e4f956691d2e211dbd20be8125e6f2305850f028?"
                                        className="shrink-0 max-w-full aspect-[5] w-[120px]"
                                    />
                                    <div className="flex-auto">(12 Reviews)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button className="text-white justify-center items-center self-center px-16 py-4 mt-7 max-w-full text-base font-semibold text-center rounded border border-white border-solid w-[604px] max-md:px-5">
                    Comparar Autos
                </button>

            </div>





        </div>
    );
}

export default ComprarAutos;