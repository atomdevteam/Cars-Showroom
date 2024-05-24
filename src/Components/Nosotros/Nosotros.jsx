
const Nosotros = () =>{
    
    return (
     
        <div className="flex justify-center lg:p-8 lg:px-8 items-center px-16 py-14 mt-20 w-full bg-slate-900 max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#0B0C10] ">
          <div className="bg-transparent w-full max-w-[1225px] max-md:max-w-full">
            <div className="bg-transparent flex gap-5 max-md:flex-col lg:h-full max-md:gap-0">
              <div className="bg-transparent flex flex-col w-[37%] md:w-full lg:w-[37%] max-md:ml-0 max-md:w-full">
                <div className="bg-transparent md:ml-2 md:-mr-7 md:flex md:flex-col max-md:mt-10">
                  <div data-aos="fade-right" className="bg-transparent text-4xl font-bold text-zinc-300">
                    Sobre nosotros
                  </div>
                  <div data-aos="zoom-in" className="bg-transparent mt-9 text-xl md:text-[25px] md:mb-5 text-zinc-300 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                    aliquet tortor ut sit sit. Velit imperdiet integer elementum a
                    scelerisque pulvinar venenatis sodales. Quis nulla euismod
                    feugiat at interdum in. Venenatis arcu semper lectus quis sit in
                    rhoncus auctor.
                  </div>
                  <div data-aos="zoom-in-down"  className="flex flex-col-reverse md:rounded-lg lg:hidden md:m-0 md:p-0  ml-5 w-auto max-md:ml-0 max-md:w-full">
                    <img 
                      loading="lazy"
                      srcSet="https://i.ibb.co/N6Vqxxn/panda.png"
                      className="grow md:w-full md:h-full    w-full h-full aspect-[1.23] max-md:mt-10 brightness-200 contrast-[30px]  "
                    />
                  </div>
                  <div className=" lg:h-full max-md:mt-10">
                    <button className=" flex md:flex gap-11 md:items-center md:mt-5 md:flex-row w-full max-md:gap-0">
                      <div className="bg-transparent mr-3  md:flex flex w-full md:flex-col md:w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex flex-col grow text-5xl font-semibold text-center text-white max-md:mt-10 max-md:text-4xl">
                          <div data-aos="zoom-in">
                            <div className="bg-transparent self-center max-md:text-4xl">150</div>
                            <hr className="mt-3 h-1 border bg-blue-500" />
                            <hr className="mt-1 w-[50%] h-1 border bg-blue-500" />
                            <div className="bg-transparent mt-2.5 text-lg">Vehículo en stock</div>
                          </div>
                          <div data-aos="zoom-in" > 
                            <div className=" bg-transparent self-center mt-20 max-md:mt-10 max-md:text-4xl">
                            38
                            </div>
                            <hr className="mt-3 h-1 border bg-blue-500" />
                            <hr className="mt-1 w-[50%] h-1 border bg-blue-500" />
                            <div className="bg-transparent self-center mt-2.5 text-lg">
                              Cliente feliz
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="bg-transparent flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex flex-col grow text-5xl font-semibold text-center text-white max-md:mt-10 max-md:text-4xl">
                          <div data-aos="zoom-in" >
                            <div className="bg-transparent self-center max-md:text-4xl">40</div>
                            <hr className="mt-3 h-1 border bg-blue-500" />
                            <hr className="mt-1 w-[50%] h-1 border bg-blue-500" />
                            <div className="bg-transparent mt-2.5 text-lg">Coches Vendidos</div>
                          </div>
                          <div data-aos="zoom-in">
                            <div className=" bg-transparent self-center mt-20 max-md:mt-10 max-md:text-4xl">
                            5
                            </div>
                            <hr className="mt-3 h-1 border bg-blue-500" />
                            <hr className="mt-1 w-[50%] h-1 border bg-blue-500" />
                            <div className="bg-transparent self-center mt-2.5 text-lg">
                              Awards
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="md:flex md:flex-col-reverse hidden overflow-hidden  ml-5 w-auto max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://i.ibb.co/N6Vqxxn/panda.png"
                  className="grow md:hidden lg:flex xl:w-[900px] cursor-pointer xl:brightness-50 xl:blur-sm xl:hover:brightness-200 xl:hover:blur-[100%] xl:hover:scale-105 transition-all w-full h-full aspect-[1.23] max-md:mt-10 "
                />
              </div>
            </div>
          </div>
        </div>
      
      );
}

export default Nosotros;