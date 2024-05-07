
const AboutUs = () => {
    return (
        <section className="bg-[#0B0C10]">

            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">

                <h1 className="text-white text-4xl font-bold leading-none sm:text-5xl">Sobre nosotros
                </h1>

                <p className="px-8 mt-8 mb-12 text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat nobis distinctio dolores incidunt id esse velit labore atque debitis doloribus accusamus libero similique, animi alias reprehenderit totam corporis repudiandae?</p>

                <div class="bg-[#0B0C10] border-solid rounded-lg border-2 border-sky-500p-4" >
                    <p class="text-lg font-semibold text-white p-2">7 de mayo de 2024</p>
                </div>
            </div>

            <div className="flex justify-center items-center">

                <div className="flex flex-col mx-2 items-center mt-14 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93228031fa83a2955b522facf7038712e0ae6a968514020dfb01a6ef6a6fe7b4?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="grow shrink-0 aspect-[2.56] basis-0 w-fit max-md:max-w-full"
                        />

                    </div>
                    <div className="mt-20 text-2xl font-bold text-zinc-300 max-md:mt-10">
                        Nuestro servicio
                    </div>
                    <div className="mt-6 w-full max-w-[991px] max-md:max-w-full">
                        <div className="flex gap-4 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col  grow px-14 py-8 w-full text-ms font-bold text-white rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51d15406ba6e5ad16cf03f69ed338167a4e4b79c985e789bab33e32287866bed?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="self-center w-12 aspect-square"
                                    />
                                    <div className="mt-3.5 ">Comprar un auto nuevo</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-14 py-8 w-full text-ms font-bold text-white rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1fdedfeaf8dea80ee6185ac6a39a2d1993d37ca06bdeb83d34607b8a766988?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="self-center w-12 aspect-square"
                                    />
                                    <div className="mt-3.5">Comprar un auto usado</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-20 py-9 w-full text-ms font-bold text-white rounded border-2 border-sky-600 border-solid bg-zinc-950 max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8db7bbb2f228a3e2dd1dbc3ff5effec1ebcf26ffb88ef187d70ede740e8844f2?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="self-center w-12 aspect-square"
                                    />
                                    <div className="mx-2.5 mt-3.5">Vender mi auto</div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="flex flex-col self-stretch py-20 mt-28 font-semibold text-white bg-slate-900 max-md:pl-5 max-md:mt-10 max-md:max-w-full justify-center">

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:flex-col">

                            <div className="flex z-10 px-5 flex-col mt-0 max-w-full w-[420px] max-md:mt-0">

                                <div className="text-xl ml-5 text-zinc-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet
                                    tortor ut sit sit. Velit imperdiet integer elementum a scelerisque
                                    pulvinar venenatis sodales. Quis nulla euismod feugiat at interdum in.
                                    Venenatis arcu semper lectus quis sit in rhoncus auctor.
                                </div>

                                <div>
                                    <div className="flex gap-5  font-semibold text-center text-white max-w-[344px]">
                                        <div className="flex flex-col flex-1 px-5 mt-10">
                                            <div className="self-center text-5xl">150</div>
                                            <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                                            <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                                            <div className="mt-2.5 text-lg">Vehículo en stock</div>
                                        </div>

                                        <div className="flex flex-col flex-1 px-5  mt-10">
                                            <div className="self-center text-5xl">40</div>
                                            <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                                            <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                                            <div className="mt-2.5 text-lg">Coche vendido</div>
                                        </div>

                                    </div>

                                    <div className="flex gap-5  font-semibold text-center text-white max-w-[344px]">
                                        <div className="flex flex-col flex-1 px-5 mt-10">
                                            <div className="self-center text-5xl">38</div>
                                            <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                                            <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                                            <div className="mt-2.5 text-lg">Clientes feliz</div>
                                        </div>

                                        <div className="flex flex-col flex-1 px-5  mt-10">
                                            <div className="self-center text-5xl">5</div>
                                            <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                                            <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                                            <div className="mt-2.5 text-lg">Premio</div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div class="">
                                <div className="flex flex-col ml-5 w-[75%] mt-20 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea77699e049f7956f10203f114d0dde657a8b7d4e227cbaa6e3d8ba5dde24b76?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="overflow-hidden px-7 pt-20 pb-9 fill-slate-900 max-md:px-5">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9403e019d731a0007510f818c088d29a1d0ffd097f31ec6903507e6ca8839478?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                    className="grow w-full aspect-[2.08] max-md:mt-10"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col mt-1.5 text-lg text-sky-600 max-md:mt-10 max-md:max-w-full">
                                    <div className="text-2xl font-bold max-md:max-w-full">
                                        Omar Mango
                                    </div>
                                    <div className="mt-1.5 max-md:max-w-full">Customer</div>
                                    <div className="mt-8 font-semibold text-zinc-300 max-md:max-w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                                        aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                                        scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
                                        at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
                                        auctor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-5 py-32 justify-between max-md:flex-wrap">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06e2992b65b6177a288353eff3128252c9a0beaf94f49d18a878fff9a2d730e7?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full aspect-[1.05] w-[132px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3618101965ef2195eb20f51b0c5b0f484e2ea5c1293f140c69dce188dcc1cd63?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full aspect-[1.05] w-[132px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81f76ead9f6c979b59b8da69936adbb351c679ad57cceb99d32770c11885ed1a?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full aspect-[1.05] w-[132px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc6806c789b8783bf3f4fa1cc6fae7aa41ed39a49548c40f07d77a9856a417b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full aspect-[1.05] w-[132px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e3d4b99de190fc9e534f2535e0cde416c46cc30ca48eba2c34790fd4281de7c?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full ml-2  aspect-[1.05] w-[132px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3fac2951d1d0aebb282244824dbe2d56d0ec3eac8ed9e12546be9eb610c5596?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                            className="shrink-0 max-w-full aspect-[1.05] w-[132px]"
                        />
                    </div>



                </div>

            </div>



        </section>
    );

}
export default AboutUs