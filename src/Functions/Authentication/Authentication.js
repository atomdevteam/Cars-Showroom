import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updatePhoneNumber, signOut } from "firebase/auth";
import { set, ref, get } from "firebase/database"

export const LognInAuth = (email, password, navigate) => {

  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      const user = userCredential.user;

      ListUser(user.uid)
      navigate('/')

      user.getIdToken().then((value) => {

        localStorage.setItem("Token", value)

        localStorage.setItem("DisplayName", user.displayName)


      })


    })

    .catch((error) => {

      console.log(error)

    });
}

export const SignInAuth = (datos) => {

  createUserWithEmailAndPassword(auth, datos.email, datos.password)

    .then((userCredential) => {

      const user = userCredential.user;

      updateProfile(

        auth.currentUser,

        { displayName: datos.name }

      )

      updatePhoneNumber(

        auth.currentUser,

        { phoneNumber: datos.phone }

      )

      SaveUser(datos, user.uid)

    })

    .catch((error) => {

      console.log(error)

    });
}

const ListUser = (userId) => {

  const userRef = ref(db, `Users/${userId}`)

  return get(userRef)

    .then((snapshot) => {

      if (snapshot.exists()) {

        console.log(snapshot.val())

      } else {

        console.log('No data available for this user.');
        return null;

      }
    })

    .catch((error) => {

      console.error('Error reading user data:', error);
      return null;

    });
}

const SaveUser = (datos, userId) => {

  set(ref(db, `Users/${userId}`), datos)

    .then(() => {

      console.log("Datos guardados exitosamente.");

    })

    .catch((error) => {

      console.error("Error al guardar los datos: ", error);

    });
}

export const logout = async () => {

  await signOut(auth)

  localStorage.clear()
  window.location.reload();

}