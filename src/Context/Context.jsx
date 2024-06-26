import { createContext, useContext, useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebase"

//Functions
import { SignInAuth, LognInAuth, logout, ListUser, ListAllUsers, updateUserRole } from "../Functions/Authentication/Authentication"
import { SaveCarSale, SaveMedia, SaveArchivo, ListCarSale } from "../Functions/Sales/Sales"
import { GetHero } from "../Functions/HomeAdmin/HomeAdmin"

const Context = createContext()

export const useContextCar = () => {
  const context = useContext(Context)
  if (!context) throw new Error('There is no Context provider')
  return context
}

export function ProviderContext({ children }) {

  const [isOpenModal, setOpenModal] = useState(false)

  const [user, setUser] = useState(null)
  const [LisCarNew, setLisCarNew] = useState([])
  const [LisCarUsed, setLisCarUsed] = useState([])
  
  const [ListCar, setListCar] = useState([])

  const [CarDatos, setCarDatos] = useState([])
  const [WhichRole, setWhichRole] = useState(null)
  const [SerchingCar, setSerchingCar] = useState([])
  const [filtroSearching, setfiltroSearching] = useState([])
  const [filtroCarNew, setFiltroCarNew] = useState([])
  const [filtroCarUsed, setFiltroCarUsed] = useState([])
  const [ListComparar, setListComparar] = useState([])
  const [AutosVisible,setAutosVisible] = useState(false)
  const [AutosInVisible,setAutosInVisible] = useState(false)
  const [ContactoVisibles,setContactoVisibles] = useState(false)
  const [locationR, setlocationR] = useState('')
  const [isFiltro, setisFiltro] = useState(false)

  // Informacion 
  const [TituloHero, setTituloHero] = useState('')
  const [DescripcionHero, setDescripcionHero] = useState('')
  const [SliderImg, setSliderImg] = useState([])
  const [ListAllUser, setListAllUser] = useState([])
  const [ListAllAuto , setListAllAutos] = useState([])
  
// Available
const [CarAvailable, setAvailable] = useState(null)


  
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return () => unsubuscribe();
  }, [user]);

  useEffect(() => {
    if (user) {
      ListUser(user.uid, setWhichRole)
      ListCarSale(setLisCarNew, setLisCarUsed, setListCar)
      GetHero(setTituloHero, setDescripcionHero, setSliderImg)
      ListAllUsers(setListAllUser)
    }
  }, [user])

  useEffect(() => {
    GetHero(setTituloHero, setDescripcionHero, setSliderImg)
  }, [])
  






  useEffect(() => {
    if (user) {
      ListCarSale(setLisCarNew, setLisCarUsed, setListCar)

    }

  }, [])

  const Formatnumber = (number) => {

    if (typeof number === 'string') {

      number = parseInt(number, 10);
    }

    if (!isNaN(number)) {
      return number.toLocaleString('en-US');
    }

    return '0';
  }

  const handleRemove = (dato) => {
    const nuevaLista = CarDatos.filter(item => item !== dato);
    setCarDatos(nuevaLista)

  }

  const filterCars = (ListCar, Options, normalizeString, navigate) => {

    console.log(Options.rangoPrice[0] + ' ' + Options.rangoPrice[1])

    let filteredCars = [];

    if (
      Options.search.trim().length !== 0 &&
      Options.Year.trim().length !== 0 &&
      Options.marca.trim().length !== 0 &&
      Options.modelo.trim().length !== 0
    ) {
      filteredCars = ListCar.filter((car) => {
        const titulo = normalizeString(car.Sale.DetalleCoche.Titulo);
        const Year = normalizeString(car.Sale.DetalleCoche.Year);
        const marca = normalizeString(car.Sale.DetalleCoche.Marca);
        const modelo = normalizeString(car.Sale.DetalleCoche.Modelo);
        const search = normalizeString(Options.search);
        const location = normalizeString(Options.location);
        const marcaSearch = normalizeString(Options.marca);
        const modeloSearch = normalizeString(Options.modelo);

        return titulo.includes(search) && Year.includes(location) && marca.includes(marcaSearch) && modelo.includes(modeloSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.search.trim().length !== 0 &&
      Options.Year.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const titulo = normalizeString(car.Sale.DetalleCoche.Titulo);
        const Year = normalizeString(car.Sale.DetalleCoche.Year);
        const search = normalizeString(Options.search);
        const location = normalizeString(Options.Year);

        return titulo.includes(search) && Year.includes(location);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }

    } else if (
      Options.search.trim().length !== 0 &&
      Options.marca.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const titulo = normalizeString(car.Sale.DetalleCoche.Titulo);
        const marca = normalizeString(car.Sale.DetalleCoche.Marca);
        const search = normalizeString(Options.search);
        const marcaSearch = normalizeString(Options.marca);

        return titulo.includes(search) && marca.includes(marcaSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.search.trim().length !== 0 &&
      Options.modelo.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const titulo = normalizeString(car.Sale.DetalleCoche.Titulo);
        const modelo = normalizeString(car.Sale.DetalleCoche.Modelo);
        const search = normalizeString(Options.search);
        const modeloSearch = normalizeString(Options.modelo);

        return titulo.includes(search) && modelo.includes(modeloSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.Year.trim().length !== 0 &&
      Options.marca.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const Year = normalizeString(car.Sale.DetalleCoche.Year);
        const marca = normalizeString(car.Sale.DetalleCoche.Marca);
        const location = normalizeString(Options.location);
        const marcaSearch = normalizeString(Options.marca);

        return Year.includes(location) && marca.includes(marcaSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.Year.trim().length !== 0 &&
      Options.modelo.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const Year = normalizeString(car.Sale.DetalleCoche.Year);
        const modelo = normalizeString(car.Sale.DetalleCoche.Modelo);
        const location = normalizeString(Options.location);
        const modeloSearch = normalizeString(Options.modelo);

        return Year.includes(location) && modelo.includes(modeloSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.marca.trim().length !== 0 &&
      Options.modelo.trim().length !== 0
    ) {

      filteredCars = ListCar.filter((car) => {
        const marca = normalizeString(car.Sale.DetalleCoche.Marca);
        const modelo = normalizeString(car.Sale.DetalleCoche.Modelo);
        const marcaSearch = normalizeString(Options.marca);
        const modeloSearch = normalizeString(Options.modelo);

        return marca.includes(marcaSearch) && modelo.includes(modeloSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (Options.search.trim().length !== 0) {

      filteredCars = ListCar.filter((car) => {
        const titulo = normalizeString(car.Sale.DetalleCoche.Titulo);
        const search = normalizeString(Options.search);

        return titulo.includes(search);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (Options.Year.trim().length !== 0) {

      filteredCars = ListCar.filter((car) => {
        const Year = normalizeString(car.Sale.DetalleCoche.Year);
        const location = normalizeString(Options.Year);

        return Year.includes(location);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (Options.marca.trim().length !== 0) {

      filteredCars = ListCar.filter((car) => {
        const marca = normalizeString(car.Sale.DetalleCoche.Marca);
        const marcaSearch = normalizeString(Options.marca);

        return marca.includes(marcaSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (Options.modelo.trim().length !== 0) {

      filteredCars = ListCar.filter((car) => {
        const modelo = normalizeString(car.Sale.DetalleCoche.Modelo);
        const modeloSearch = normalizeString(Options.modelo);

        return modelo.includes(modeloSearch);
      });

      setSerchingCar(filteredCars);
      localStorage.setItem("SerchingCar", JSON.stringify(filteredCars))
      if (user) {
        
      } else {
        navigate('/LognIn')
      }
    } else if (
      Options.search.trim().length === 0 &&
      Options.Year.trim().length === 0 &&
      Options.marca.trim().length === 0 &&
      Options.modelo.trim().length === 0
    ) {
      console.log("Si opciones")
      console.log(ListCar)
      setSerchingCar(ListCar)
      localStorage.setItem("SerchingCar", JSON.stringify(ListCar))

    }

  };

  const handleSearching = (Status, Options) => {

    const normalizeString = (str) => {
      return str.toLowerCase().trim().replace(/\s+/g, ' ');
    }
   
    

    if (Status === 'Todo') {
      filterCars(ListCar, Options, normalizeString )

    } else if (Status === 'Nuevo') {
      filterCars(LisCarNew, Options, normalizeString)

    } else if (Status === 'Usado') {
      filterCars(LisCarUsed, Options, normalizeString)

    }

 

  };


  return (
    <Context.Provider
      value={{

        SignInAuth,
        LognInAuth,
        user,
        logout,
        SaveCarSale,
        SaveMedia,
        SaveArchivo,
        LisCarNew,
        LisCarUsed,
        Formatnumber,
        ListCar,
        CarDatos,
        setCarDatos,
        WhichRole,
        setWhichRole,
        handleRemove,
        handleSearching,
        SerchingCar,
        setSerchingCar,
        setfiltroSearching,
        filtroSearching,
        filtroCarNew,
        setFiltroCarNew,
        filtroCarUsed,
        setFiltroCarUsed,
        ListComparar,
        setListComparar,
        AutosInVisible,
        setAutosInVisible,
        AutosVisible,
        setAutosVisible,
        ContactoVisibles,
        setContactoVisibles,
        
        locationR,
        setlocationR,
        TituloHero,
        DescripcionHero,
        SliderImg,
        setTituloHero, 
        setDescripcionHero, setSliderImg, GetHero,

        ListAllUser,
        updateUserRole,
        setListAllUser,
        CarAvailable, 
        setAvailable,
        isFiltro, setisFiltro
      }}
    >
      {children}
    </Context.Provider>
  )

}