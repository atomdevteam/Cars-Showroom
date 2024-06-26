import carro from "../../assets/img/carro.png"
const Noticias = () => {

    return (
  
      <div className=" flex justify-center md:m-4 items-center xl:mt-36 max-md:px-5 bg-black">
  
        <div className=" flex flex-col mt-10 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full ">
  
          <div data-aos="fade-right" className="bg-transparent md:px-6  flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="bg-transparent  flex flex-col">
              <div className="bg-transparent  text-2xl font-bold text-white  ">
                Noticias
              </div>
  
              <div className="bg-transparent  flex gap-0 mt-7 text-xl font-black text-sky-600 whitespace-nowrap">
                <button className="flex flex-col justify-center text-center">
                  <div className="bg-transparent border-b p-2 px-4 border-blue-500 ">Nuevo</div>
                  <div className="shrink-0 mt-2 h-0.5 bg-sky-600 rounded-sm" />
                </button>
  
                <button className="justify-end items-start px-10 pt-1.5 pb-3.5 max-md:px-5 opacity-40">
                  Usado
                </button>
              </div>
            </div>
          </div>
  
          <div className="bg-transparent   mt-6 max-md:max-w-full">
            <div className="bg-transparent flex gap-5 max-md:flex-col max-md:gap-0">
              <div data-aos="flip-left" className="bg-transparent flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="bg-transparent flex flex-col grow justify-center font-semibold max-md:mt-5 max-md:max-w-full">
                  <div className=" flex flex-col rounded bg-slate-900 md:w-full">
                    <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-lg text-white min-h-[199px] max-md:px-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://i.ibb.co/WV1X0N3/nissan.png"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="relative justify-center px-3 py-2 mb-8 bg-blue-400 rounded">
                        June, 01 2024
                      </div>
                    </div>
                    <div className="bg-transparent flex flex-col p-6 text-white max-md:px-5 max-md:max-w-full">
                      <div className="bg-transparent text-3xl font-bold text-sky-600">
                        Etiam Eget
                      </div>
                      <div className="bg-transparent mt-4 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                        eget praesent gravida sed rutrum suspendisse eu.{" "}
                      </div>
                      <div className="bg-transparent flex gap-3 mt-10 text-sm">
                        <img
                          loading="lazy"
                          srcSet="https://i.ibb.co/fnP4SZH/Mujer.png"
                          className="shrink-0 w-12 rounded-full aspect-square"
                        />
                        <div className="bg-transparent flex-auto my-auto">By Carla Baptista</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="bg-transparent  justify-between ml-5 h-full w-6/12 m-auto max-md:ml-0 max-md:w-full">
                <div className="bg-transparent flex  flex-col grow max-md:mt-5 md:max-w-full">
                  <div className=" pr-6 rounded bg-slate-900 lg:w-full lg:h-full max-md:pr-5 md:h-[140px] max-md:max-w-full">
                    <div className=" flex bg-transparent gap-5 max-md:gap-0">
                      <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                        <img
                          src={carro}
                          className="shrink-0 max-w-full w-full md:w-[140px] lg:w-full lg:h-full md:h-[140px] aspect-square h-full "
                        />
                      </div>
                      <div className="bg-transparent px-2 py-2 md:py-1 md:px-0 flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex flex-col self-stretch my-auto font-semibold text-white ">
                          <div className="bg-transparent text-[15px] lg:text-[28px] font-bold text-sky-600">
                            A New Car
                          </div>
                          <div className="bg-transparent mt-2 text-[12px] lg:text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </div>
                          <div className="bg-transparent flex gap-2 mt-4 p-1 lg:text-[15px] text-[10px]">
                            <img
                              loading="lazy"
                              srcSet="https://i.ibb.co/fnP4SZH/Mujer.png"
                              className="shrink-0 w-6 rounded-full lg:w-12 lg:h-12 aspect-square"
                            />
                            <div className="bg-transparent flex-auto my-auto">
                              By Carla Baptista - May, 28 2024
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div data-aos="zoom-in" className="flex pr-6 rounded mt-14 bg-slate-900 lg:w-full lg:h-full max-md:pr-5 md:h-[140px] max-md:max-w-full">
                    <div className="bg-transparent flex gap-5 max-md:gap-0">
                      <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="https://i.ibb.co/vdc3mRz/audi.png"
                          className="shrink-0 max-w-full md:w-[140px] lg:w-full lg:h-full md:h-[140px] aspect-square w-full h-full "
                        />
                      </div>
                      <div className="bg-transparent md:py-1 md:px-0 px-2 py-2 flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                        <div className="bg-transparent flex flex-col self-stretch my-auto font-semibold text-white ">
                          <div className="bg-transparent text-[15px] lg:text-[28px] font-bold text-sky-600">
                            A New Car
                          </div>
                          <div className="bg-transparent mt-2 text-[12px] lg:text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </div>
                          <div className="bg-transparent flex gap-2 mt-4 p-1 lg:text-[15px] text-[10px]">
                            <img
                              loading="lazy"
                              srcSet="https://i.ibb.co/fnP4SZH/Mujer.png"
                              className="shrink-0 w-6 rounded-full lg:w-12 lg:h-12 aspect-square"
                            />
                            <div className="bg-transparent flex-auto my-auto">
                              By Carla Baptista - May, 28 2024
                            </div>
                          </div>
                        </div>
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
  export default Noticias