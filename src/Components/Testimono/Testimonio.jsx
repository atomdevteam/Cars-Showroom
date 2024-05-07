
const Testimonio = () => {

    return (
        <div className="flex flex-col px-20 bg-[#0B0C10]">
            <div className="self-start text-2xl font-bold text-zinc-300 max-md:ml-1">
                Testimonio
            </div>

            <div className="overflow-hidden px-8 pt-20 pb-9  mt-4 w-full fill-slate-900 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://i.ibb.co/MkcZ28p/men.png"
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
                                scelerisque pulvinar venenatis sodales. Quis nulla euismod
                                feugiat at interdum in. Venenatis arcu semper lectus quis sit in
                                rhoncus auctor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Testimonio