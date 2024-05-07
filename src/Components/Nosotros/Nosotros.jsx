
const Nosotros = () =>{
    
    return (
     
        <div className="flex justify-center items-center px-16 py-14 mt-20 w-full bg-slate-900 max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#0B0C10] ">
          <div className="w-full max-w-[1225px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <div className="text-4xl font-bold text-zinc-300">
                    Sobre nosotros
                  </div>
                  <div className="mt-9 text-xl text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                    aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                    scelerisque pulvinar venenatis sodales. Quis nulla euismod
                    feugiat at interdum in. Venenatis arcu semper lectus quis sit in
                    rhoncus auctor.
                  </div>

                  <div className="mt-24 max-md:mt-10">
                    <button className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-5xl font-semibold text-center text-white max-md:mt-10 max-md:text-4xl">
                          <div className="self-center max-md:text-4xl">150</div>
                          <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                          <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                          <div className="mt-2.5 text-lg">Vehículo en stock</div>
                          <div className="self-center mt-20 max-md:mt-10 max-md:text-4xl">
                            38
                          </div>
                          <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                          <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                          <div className="self-center mt-2.5 text-lg">
                            Cliente feliz
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-5xl font-semibold text-center text-white max-md:mt-10 max-md:text-4xl">
                          <div className="self-center max-md:text-4xl">40</div>
                          <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                          <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                          <div className="mt-3 text-lg">Coche vendido</div>
                          <div className="self-center mt-20 max-md:mt-10 max-md:text-4xl">
                            5
                          </div>
                          <div className="shrink-0 mt-4 h-0.5 bg-sky-900 rounded" />
                          <div className="shrink-0 h-0.5 bg-sky-900 rounded" />
                          <div className="self-center mt-2.5 text-lg">Awards</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-auto max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://i.ibb.co/N6Vqxxn/panda.png"
                  className="grow mt-14 w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      
      );
}

export default Nosotros;