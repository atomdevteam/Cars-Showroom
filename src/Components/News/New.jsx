import UltimaNoticias from "../UltimaNoticias/UltimasNoticias";

const News = () => {

    return (
        <div>
            <div className="bg-black flex flex-col  justify-center items-start px-16 py-14 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col mx-10 max-md:ml-2.5">
                    <div className="text-5xl max-md:text-4xl">Noticias</div>
                    <div className="mt-4 text-lg">Homepage - Artículo- Noticias</div>
                </div>

                <p className="mt-16 mx-10 max-md:ml-2.5 text-4xl font-bold text-zinc-300 max-md:max-w-full">Última Noticias</p>

                <div>
                    <div className="mt-10 mx-10 max-md:ml-4 flex flex-col font-semibold rounded bg-slate-900 w-11/12">
                        <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-lg text-white min-h-[472px] max-md:px-5 max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/542ad9e61a331f9f4f79434d8e1c3d99933bd5f4e17563b812e7ae2195061c87?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative justify-center px-3 py-2 mb-64 bg-blue-400 rounded max-md:mb-10">
                                June, 01 2024
                            </div>
                        </div>

                        <div className="flex flex-col p-6 w-full max-md:px-5 max-md:max-w-full">
                            <div className="text-4xl font-bold text-sky-600 max-md:max-w-full">
                                Lorem Ipsum
                            </div>
                            <div className="mt-4 text-lg text-white max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
                                praesent gravida sed rutrum suspendisse eu. Lectus fermentum in
                                gravida nibh in vel. Accumsan gravida nec ultricies risus eget arcu
                                turpis sit lorem.{" "}
                            </div>
                            <div className="flex gap-3 self-start pr-20 mt-10 text-base text-white whitespace-nowrap max-md:pr-5">
                                <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                    Dealer
                                </div>
                                <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                    Electrico
                                </div>
                            </div>
                            <div className="flex gap-5 py-px pr-20 mt-4 text-sm text-sky-900 max-md:flex-wrap max-md:pr-5">
                                <div className="flex gap-3">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fbc51f7412e8407869029a5943ab4819a3514582bfd5a0e648c9911f673c859?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-12 rounded-full aspect-[1.02]"
                                    />
                                    <div className="my-auto">By Carla Batista</div>
                                </div>
                                <div className="flex gap-2 justify-center my-auto whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e1c2b1c070767d1f725b0275e6e7fbe4b61d4ed802cf583df02896dd371210?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="my-auto">1</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="mx-10 mt-10  max-md:ml-2.5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" ">
                            <div className="flex flex-col md:col-span-2 font-semibold rounded bg-slate-900 max-w-full">
                                <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-lg text-white min-h-[356px] max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="relative justify-center px-3 py-2 mb-40 bg-blue-400 rounded max-md:mb-10">
                                        June, 01 2024
                                    </div>
                                </div>
                                <div className="flex flex-col p-6 w-full text-base max-md:px-5 max-md:max-w-full">
                                    <div className="text-3xl font-bold text-sky-600 max-md:max-w-full">
                                        Etiam Eget
                                    </div>
                                    <div className="mt-4 text-white max-md:max-w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
                                        praesent gravida sed rutrum suspendisse eu. Lectus fermentum in
                                        gravida nibh in vel. Accumsan gravida nec ultricies risus eget arcu
                                        turpis sit lorem.{" "}
                                    </div>
                                    <div className="flex gap-3 self-start pr-20 mt-9 text-white whitespace-nowrap max-md:pr-5">
                                        <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                            Dealer
                                        </div>
                                        <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                            Electrico
                                        </div>
                                    </div>
                                    <div className="flex gap-5 pr-20 mt-4 text-sm text-sky-900 max-md:flex-wrap max-md:pr-5">
                                        <div className="flex gap-3">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-12 rounded-full aspect-square"
                                            />
                                            <div className="flex-auto my-auto">By Carla Baptista</div>
                                        </div>
                                        <div className="flex gap-2 justify-center my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74862d3df1a46cc4712f332cf9e13fb5d186d7f9c566d16425925097c710dc19?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-6 aspect-square"
                                            />
                                            <div className="my-auto">1 Comment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-10 flex-col font-semibold rounded bg-slate-900 max-w-full">
                                <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-lg text-white min-h-[356px] max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/306d8f69ae5969316144601dcd32ba64e62ba37e52ec2649e4495a20af65d3aa?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="relative justify-center px-3 py-2 mb-40 bg-blue-400 rounded max-md:mb-10">
                                        June, 01 2024
                                    </div>
                                </div>
                                <div className="flex flex-col p-6 w-full text-base max-md:px-5 max-md:max-w-full">
                                    <div className="text-3xl font-bold text-sky-600 max-md:max-w-full">
                                        Etiam Eget
                                    </div>
                                    <div className="mt-4 text-white max-md:max-w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
                                        praesent gravida sed rutrum suspendisse eu. Lectus fermentum in
                                        gravida nibh in vel. Accumsan gravida nec ultricies risus eget arcu
                                        turpis sit lorem.{" "}
                                    </div>
                                    <div className="flex gap-3 self-start pr-20 mt-9 text-white whitespace-nowrap max-md:pr-5">
                                        <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                            Dealer
                                        </div>
                                        <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                            Electrico
                                        </div>
                                    </div>
                                    <div className="flex gap-5 pr-20 mt-4 text-sm text-sky-900 max-md:flex-wrap max-md:pr-5">
                                        <div className="flex gap-3">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a0f128ababe3e559bff36cfc8704399ac66d37b2a1f4731163f6838785740f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-12 rounded-full aspect-square"
                                            />
                                            <div className="flex-auto my-auto">By Carla Baptista</div>
                                        </div>
                                        <div className="flex gap-2 justify-center my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74862d3df1a46cc4712f332cf9e13fb5d186d7f9c566d16425925097c710dc19?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-6 aspect-square"
                                            />
                                            <div className="my-auto">1 Comment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- ... --> */}
                        <div className=" md:w-2/3 mt-10 md:mx-36">
                            <div className="flex flex-col px-5 max-w-[600px] ">

                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-7 h-7 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                                </div>



                                <div className="mt-10 w-full text-xl font-medium text-white">
                                    Noticias popular
                                </div>

                                
                                <div className="mt-3 w-full bg-white border border-white border-solid min-h-[1px]" />
                                <div className="flex gap-4 pr-3.5 mt-4 rounded bg-slate-900">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b3e416f904c783661fc75ea49de348522eb86246d543bc0610478cff635811?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 max-w-full aspect-[1.49] w-[124px]"
                                    />
                                    <div className="flex flex-col my-auto">
                                        <div className="text-lg font-bold text-white">Accumsan Gravida</div>
                                        <div className="flex gap-2 mt-3 text-xs font-semibold text-sky-900">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-6 rounded-full aspect-square"
                                            />
                                            <div className="flex-auto my-auto">
                                                By Carla Baptista - May, 28 2021
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 pr-3.5 mt-4 rounded bg-slate-900">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0341b366044889600826f1eb8128c59e9a507781702e4c8d019229eef315720f?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                        className="shrink-0 max-w-full aspect-[1.49] w-[124px]"
                                    />
                                    <div className="flex flex-col my-auto">
                                        <div className="text-lg font-bold text-white">Turpis Sit</div>
                                        <div className="flex gap-2 mt-3 text-xs font-semibold text-sky-900">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4340782c0b5446c1eedc13988677c6f42a3615a1e6642853544c263b141b795?apiKey=e203d7c0597f4cf28ac4ec4c4bb8501a&"
                                                className="shrink-0 w-6 rounded-full aspect-square"
                                            />
                                            <div className="flex-auto my-auto">
                                                By Carla Baptista - May, 28 2021
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 w-full text-xl font-medium text-white">Tags</div>
                                <div className="mt-3 w-full bg-white border border-white border-solid min-h-[1px]" />
                                <div className="flex gap-3 mt-6 text-base text-white whitespace-nowrap">
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Autopilot
                                    </div>
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Car
                                    </div>
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Dealer
                                    </div>
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Electric
                                    </div>
                                </div>
                                <div className="flex gap-3 self-start mt-3 text-base text-white whitespace-nowrap">
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Race
                                    </div>
                                    <div className="justify-center px-3 py-2 rounded border border-sky-600 border-solid">
                                        Speed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>








            </div>
        </div>
    )

}
export default News;