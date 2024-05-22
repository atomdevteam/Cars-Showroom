import { createContext, useContext, useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebase"
//Functions
import { SignInAuth, LognInAuth, logout } from "../Functions/Authentication/Authentication"
import { SaveCarSale, SaveMedia, SaveArchivo, ListCarSale } from "../Functions/Sales/Sales"
const Context = createContext()

export const useContextCar = () => {
  const context = useContext(Context)
  if (!context) throw new Error('There is no Context provider')
  return context
}

export function ProviderContext({ children }) {

  const [user, setUser] = useState(null)
  const [LisCarNew, setLisCarNew] = useState([])
  const [LisCarUsed, setLisCarUsed] = useState([])
  const [ListCar, setListCar] = useState([])
  const [CarDatos, setCarDatos] = useState(null)
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return () => unsubuscribe();
  }, [user]);

  useEffect(() => {
    ListCarSale(setLisCarNew, setLisCarUsed, setListCar)
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

  console.log(CarDatos)


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
        setCarDatos
      }}
    >
      {children}
    </Context.Provider>
  )

}