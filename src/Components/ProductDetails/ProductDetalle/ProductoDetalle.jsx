import Tesla1 from '../../../assets/Carousel/Tesla1.png'




const ProductDetails = () => {

    return (

        <div className=' bg-gray-900'>

            <div className=" text-white flex flex-col justify-center items-start px-16 py-14 w-full bg-zinc-950 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col ml-16 max-md:max-w-full">
                    <div className="text-5xl max-md:max-w-full max-md:text-4xl">
                        Tesla Model 3 Standard Range Plus
                    </div>
                    <div className="mt-8 text-lg max-md:max-w-full">
                        Homepage - Lista de autos nuevos - Detalle del auto
                    </div>
                </div>
            </div>

            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={Tesla1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Tesla1" />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>

                {/* <!-- Slider indicators --> */}
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                {/* <!-- Slider controls --> */}
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>







            <div className=" flex flex-col self-stretch py-20 mt-32 font-semibold text-white bg-[#0B0C10] max-md:pl-5 max-md:mt-10 max-md:max-w-full justify-center">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:flex-col">
                    <div className="p-32">

                        <div className="flex flex-col grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-2xl font-bold text-zinc-300 max-md:max-w-full">
                                Descripción
                            </div>
                            <div className="mt-5 text-base bg-clip-text max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam
                                nam eu nulla a. Vestibulum aliquet facilisi interdum nibh blandit. Leo
                                amet ultricies cum cras sit sed curabitur ultrices faucibus. Ultrices
                                pellentesque ultricies semper leo maecenas. Amet, et sagittis
                                consectetur at euismod iaculis.
                                <br />
                                Id non velit auctor praesent a amet risus facilisis. Lobortis nisl
                                placerat orci, eu nisl ornare. Eu vitae pellentesque rhoncus eros
                                vivamus est purus enim dui. Leo ac pharetra massa tristique. Libero
                                aliquam pellentesque laoreet dui pulvinar facilisis. Id lectus mauris
                                senectus sodales porta malesuada tincidunt et. Quam dui nulla venenatis
                                suscipit nulla lectus volutpat, augue purus. Sed condimentum parturient
                                maecenas viverra pulvinar leo augue nunc.
                            </div>
                            <button className="mt-4 text-base text-sky-600 max-md:max-w-full">
                                Leer más
                                <br />
                            </button>
                            <div className="mt-20 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
                                Característica
                                <br />
                            </div>
                            <div className="bg- flex gap-3 mt-5 text-lg text-white max-md:flex-wrap">
                                <div className="bg-slate-900 flex flex-col justify-center whitespace-nowrap">
                                    <div className=" flex gap-3 justify-center p-4 rounded bg-slate-900">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1415a7a7c06533207b6c85c4eb839b14119858f2f09e8a4427077f504bf6caf?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                            className="shrink-0 aspect-square w-[22px]"
                                        />
                                        <div cals>Autopilot</div>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-center p-4 whitespace-nowrap rounded bg-slate-900">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7e0f028c54c000e6227380c8cbeb0765ba8f8e1f98cebcdc5cc5bbb9c6bdd5?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 aspect-square w-[22px]"
                                    />
                                    <div>Summon</div>
                                </div>
                                <div className="flex gap-3 justify-center p-4 whitespace-nowrap rounded bg-slate-900">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad2b653a624380a1d054b088da5f1d6358a7ac5af8e39a1d35035f0cb3aaf9b?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 aspect-square w-[22px]"
                                    />
                                    <div>Autopark</div>
                                </div>
                                <div className="flex gap-3 justify-center p-4 rounded bg-slate-900">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d61ed4417b7a4527ba8a07576abce091bebe4b630bc0059b0f0a07c363723a5?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 aspect-square w-[22px]"
                                    />
                                    <div>Carril Automatico</div>
                                </div>
                            </div>
                            <div className="mt-3 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-lg text-white max-md:mt-3">
                                            <div className="flex gap-3 justify-center p-4 rounded bg-slate-900 max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a616fcf2f901d27a79108107c3bab50893cafe0d9ae44bf6cb5efd813e3b9179?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                    className="shrink-0 aspect-square w-[22px]"
                                                />
                                                <div>15 inch Touchscreen Display</div>
                                            </div>
                                            <div className="flex gap-3 justify-center p-4 mt-3 rounded bg-slate-900 max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/100286751c056c55b20c4a7fc337a9563016cc0936d19a34ea312b9a27c75ca5?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                    className="shrink-0 aspect-square w-[22px]"
                                                />
                                                <div>12 Ultrasonic Sensor</div>
                                            </div>

                                            <div className="mt-7 mx-1 text-base text-sky-600">Mostrar más</div>

                                        </div>
                                    </div>

                                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                                        <div className="flex gap-3 justify-center p-4 w-full text-lg text-white rounded bg-slate-900 max-md:px-5 max-md:mt-3">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89f3fa72821f151624628269fabb796f51228fa8e7d0b638f174865b9001ac5?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 aspect-square w-[22px]"
                                            />
                                            <div>360° Camera</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-20 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
                                Información del distribuidor
                            </div>
                            <div className="flex gap-4 justify-center items-center p-4 mt-5 text-lg font-semibold bg-gray-900 text-zinc-300 max-md:flex-wrap">
                                <div className="flex flex-1 gap-4 justify-center self-stretch px-px">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/383d047d2f4ef027a52e9682f276ab8e15dccd99ae64b1623d7d32bd084bbe17?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-14 rounded-full aspect-square"
                                    />
                                    <div className="self-start">Alfredo Gouse</div>
                                </div>
                                <div className="flex flex-1 gap-4 justify-center self-stretch px-4 my-auto whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81285712be69d3f9c85d0dde62a002ea1fa5a59f440c5f2694506b0d851b4eea?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <div>588-865-3730</div>
                                </div>
                                <div className="flex flex-1 gap-4 justify-center self-stretch px-px my-auto whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1114aafc82b3e627a77bf51a8f652fa95c46cdd2c87e2418e8e079ea9a112077?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <div>alfred.g@mail.com</div>
                                </div>
                            </div>
                            <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">

                                        <p className="text-2xl font-bold text-zinc-300">Contacto</p>


                                        <div class="mt-8">
                                            <label
                                                for="nombre"
                                                class="mb-3 block text-base font-medium"
                                            >
                                                Nombre completo
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Nombre completo"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                        <div class="mt-8">
                                            <label
                                                for="nombre"
                                                class="mb-3 block text-base font-medium"
                                            >
                                                Numero de Teléfono
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Teléfono"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow mt-14 text-base font-medium text-white whitespace-nowrap max-md:mt-10">
                                            < div class="mt-2">
                                                <label
                                                    for="nombre"
                                                    class="mb-3 block text-base font-medium"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>

                                            <div class="mt-8">
                                                <label
                                                    for="nombre"
                                                    class="mb-3 block text-base font-medium"
                                                >
                                                    Sujecto
                                                </label>
                                                <input
                                                    type="text"
                                                    name="sujecto"
                                                    id="sujecto"
                                                    placeholder="Sujecto"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>



                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div class="mt-8">
                                <label
                                    for="Conmentario"
                                    class="mb-3 block text-base font-medium"
                                >
                                    Comentario
                                </label>
                                <input
                                    type="text"
                                    name="comentario"
                                    id="name"
                                    placeholder=""
                                    class="h-28 w-full rounded-md border border-[#e0e0e0]  bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <button className="justify-center items-center px-16 py-4 mt-12 text-base font-semibold text-center text-white bg-sky-600 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                Contactar al distribuidor
                            </button>


                        </div>


                        <div className="flex flex-col mt-20  px-5 max-w-[664px]">
                            <div className="w-full text-2xl font-bold text-zinc-300 max-md:max-w-full">
                                Ubicación
                            </div>
                            <div className="mt-6 w-full text-sm text-white max-md:max-w-full">
                                Av. Pdte. Antonio Guzmán Fernández, San Francisco de Macorís, RD.
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79abf7b29d0fe1122f331ef413b3f4db486098f834d1b103413e5afa0bc5fee3?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="mt-2.5 w-full aspect-[2.04] max-md:max-w-full"
                            />
                        </div>





                    </div>




                    <div className="p-32 ">

                        <div className="justify-center items-center mx-32 py-4 text-2xl font-bold text-center text-sky-600 whitespace-nowrap rounded border border-sky-600 border-solid max-w-[395px]">
                            $56,690
                        </div>
                        <div className="flex flex-col p-6 mt-12 w-full bg-gray-900 rounded max-md:px-5 max-md:mt-10">
                            <div className="text-xl font-bold text-white">Detalles del auto</div>
                            <div className="flex gap-5 justify-between py-1.5 mt-5 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Marca</div>
                                <div className="text-lg text-right text-white">Tesla</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">Modelo</div>
                                <div className="text-lg text-right text-white">Model 3</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Condición</div>
                                <div className="text-lg text-right text-white">New</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">Año</div>
                                <div className="text-lg text-right text-white">2019</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2 whitespace-nowrap">
                                <div className="self-start text-base font-medium text-neutral-400">
                                    Tipo
                                </div>
                                <div className="text-lg text-right text-white">Sedan</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">Asientos</div>
                                <div className="text-lg text-right text-white">5 people</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Color exterior
                                </div>
                                <div className="text-lg text-right text-white">Red</div>
                                
                            </div>
                            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Motor
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-5 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">
                                    Combustible
                                </div>
                                <div className="text-lg text-right text-white">Electrico</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Kilometraje
                                </div>
                                <div className="text-lg text-right text-white">340 km</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2 whitespace-nowrap">
                                <div className="text-base font-medium text-neutral-400">
                                    Transmisión
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">Automatic</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Tracción
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">
                                    Tracción trasera
                                    <br />
                                </div>
                            </div>
                            <div className="flex gap-5 py-1 mt-2">
                                <div className="my-auto text-base font-medium text-neutral-400">
                                    Power
                                </div>
                                <div className="flex-auto text-lg text-right text-white">
                                    283 hp (211 kW)
                                </div>
                            </div>
                            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                            
                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Batería y carga
                                <br />
                            </div>
                            <div className="flex gap-5 justify-between py-1">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Capacidad de la batería
                                </div>
                                <div className="text-lg text-right text-white">55.0-kWh</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Velocidad de carga
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">64 km/h</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Puerto de carga
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">Type 2</div>
                            </div>
                            <div className="flex gap-5 justify-center py-1 mt-2">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Tiempo de carga (0-&gt;Full)
                                </div>
                                <div className="text-lg text-right text-white">330 mnt</div>
                            </div>
                            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                            <div className="mt-1 text-xl font-bold text-white max-md:mt-10">
                                Dimensión
                                <br />
                            </div>
                            <div className="flex gap-5 justify-between py-1">
                                <div className="text-base font-medium text-neutral-400">
                                    Longitud
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">4694 mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">
                                    Ancho
                                    <br />
                                </div>
                                <div className="text-lg text-right text-white">1849 mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1.5 mt-2">
                                <div className="text-base font-medium text-neutral-400">Altura</div>
                                <div className="text-lg text-right text-white">1443 mm</div>
                            </div>
                            <div className="flex gap-5 justify-between py-1 mt-2">
                                <div className="flex-auto text-base font-medium text-neutral-400">
                                    Volumen de carga
                                </div>
                                <div className="text-lg text-right text-white">542 L</div>
                            </div>
                            <button className="flex gap-0 pr-4 mt-9 text-xl font-bold text-sky-600">
                                <div className="justify-center">
                                    Historial del vehículo
                                    <br />
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6762ca897f8d7d233ea98bfe919bb308341507ec78b789551ce46fa08ccc2126?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                    className="shrink-0 self-start w-6 aspect-square"
                                />
                            </button>
                            <div className="flex gap-5 justify-center mt-9 text-base font-bold text-white">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79977775c2021541aefe99ce36aa06591814c7487dd449c70c46b0990971895?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                    className="shrink-0 w-40 max-w-full aspect-[5]"
                                />
                                <div className="my-auto">(12 Reviews)</div>
                            </div>
                            <button className="flex justify-center items-center px-16 py-3 mt-20 text-base font-semibold text-center text-white rounded border border-white border-solid max-md:px-5 max-md:mt-10">
                                <div className="flex gap-1">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b321b99831a9f3f17910e314654b86e1408b6c520d58b35da404f8fb97f4d9e?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="my-auto">Comparar coche</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-20">
                <div className="flex flex-col px-5 bg-gray-900 mt-5 ">
                    <div className="w-full mx-6 text-2xl  font-bold text-zinc-300 max-md:max-w-full">
                        Simulación de crédito
                    </div>
                    <div className="px-6 py-5 mt-5 w-full bg-gray-900 max-md:px-5 max-md:max-w-full ">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-wrap">
                                        <div className="flex flex-col flex-1 whitespace-nowrap">

                                            <label for="price" class="block text-sm font-medium leading-6 text-white">Precio</label>

                                            <div class="relative mt-2 rounded-md shadow-sm">
                                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <span class="text-gray-500 sm:text-sm">$</span>
                                                </div>

                                                <input type="text" name="price" id="price" class="block w-full h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="0.00"/>
                                            </div>
                                        </div>


                                        <div className="flex flex-col flex-1">
                                            <div className="text-base font-medium">
                                                Tasa de interés (%)
                                            </div>
                                            <input type="text" name="interes" id="interes" class="block mt-2 w-full h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="0.00"/>
                                            
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-6 max-md:flex-wrap">
                                        <div className="flex flex-col flex-1">
                                            <div className="text-base font-medium">Periodo en meses</div>
                                            <div className="flex gap-0 justify-center px-4 py-3 mt-2 text-sm font-semibold bg-gray-800 rounded">
                                                <div className="flex-1 my-auto">12 Months</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                            </div>
                                        </div>
                                          <div className="flex flex-col flex-1 whitespace-nowrap">

                                            <label for="price" class="block text-sm font-medium leading-6 text-white">Depósito</label>

                                            <div class="relative mt-2 rounded-md shadow-sm">
                                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <span class="text-gray-500 sm:text-sm">$</span>
                                                </div>

                                                <input type="text" name="price" id="price" class="block w-full h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="0.00"/>
                                            </div>
                                        </div>
                                        {/* <div className="flex flex-col flex-1 whitespace-nowrap">
                                            <div className="text-base font-medium">Depósito</div>
                                            <div className="justify-center items-start px-4 py-4 mt-2 text-base font-semibold bg-gray-800 rounded max-md:pr-5">
                                                $24,480
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                                <div className="flex grow justify-center items-center px-16 py-4 mt-7 w-full whitespace-nowrap rounded border border-sky-600 border-solid bg-slate-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <div className="flex flex-col items-center w-36 max-w-full">
                                        <div className="text-base font-medium text-white">
                                            Mensualidad
                                            <br />
                                        </div>
                                        <div className="shrink-0 self-stretch mt-2 h-0.5 bg-sky-900 rounded" />
                                        <div className="shrink-0 h-0.5 bg-sky-900 rounded w-[72px]" />
                                        <div className="mt-2 text-2xl font-bold text-center text-sky-600">
                                            $2,878
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











        </div>



    );
}

export default ProductDetails;