import { createContext, useContext, useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebase"
//Functions
import { SignInAuth, LognInAuth, logout } from "../Functions/Authentication/Authentication"
import { SaveCarSale } from "../Functions/Sales/Sales"
const Context = createContext()

export const useContextCar = () => {
  const context = useContext(Context)
  if (!context) throw new Error('There is no Context provider')
  return context
}

export function ProviderContext({ children }){

  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log({ currentUser });
      setUser(currentUser);
   
    });
    return () => unsubuscribe();
  }, [user]);



    return (
        <Context.Provider
          value={{
            SignInAuth,
            LognInAuth,
            user,
            logout,
            SaveCarSale
          }}
        >
          {children}
        </Context.Provider>
      )

}