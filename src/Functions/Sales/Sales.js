import { dbFire, storage } from "../../firebase/firebase"
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore"
import { ref as storageref, uploadBytes, getDownloadURL } from "firebase/storage"
export const SaveCarSale = async (datos, userId) => {

    try {

        const docRef = await addDoc(collection(dbFire, "CarSale"), datos);

    } catch (error) {
        console.log(error)
    }
}

export const SaveMedia = (file, userId, setLinkUrl) => {
    const storageRef = storageref(storage, `CarSaleMultimedia/${userId}/${file.name}`)
    uploadBytes(storageRef, file).then((snapshot) => {

        getDownloadURL(storageRef)
            .then((url) => {

                setLinkUrl(url)
            })
            .catch((error) => {
                console.log(error)
            });
    }).catch((error) => {
        console.error('Error al subir la imagen:', error);
    });
}

export const SaveArchivo = (file, userId, setLinkUrl) => {
    const storageRef = storageref(storage, `CarSaleArchivo/${userId}/${file}`)
    uploadBytes(storageRef, file).then((snapshot) => {

        getDownloadURL(storageRef)
            .then((url) => {
 
                setLinkUrl(url)
            })
            .catch((error) => {
                console.log(error)
            });
    }).catch((error) => {
        console.error('Error al subir la Archivo:', error);
    });
}

export const ListCarSale = async (setLisCarNew, setLisCarUsed, setListCar) => {
    try {
        const ref = collection(dbFire, "CarSale");

        const unsubscribe = onSnapshot(ref, (querySnapshot) => {
            const newCars = [];
            const usedCars = [];
            const CarSale = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const IdCarSale = doc.id;
                data.IdCarSale = IdCarSale;

                if (data.Sale.DetalleCoche.Condicion === "Nuevo") {
                    newCars.push(data);
                } else if (data.Sale.DetalleCoche.Condicion === "Usado") {
                    usedCars.push(data);
                }

                CarSale.push(data);
            });
            localStorage.setItem("newCars", JSON.stringify(newCars))
            setLisCarNew(JSON.parse(localStorage.getItem("newCars")));

            localStorage.setItem("usedCars", JSON.stringify(usedCars))
            setLisCarUsed(JSON.parse(localStorage.getItem("usedCars")));
            
            localStorage.setItem("CarSale", JSON.stringify(CarSale))
            setListCar(JSON.parse(localStorage.getItem("CarSale")));
              
        });

        return unsubscribe;
    } catch (error) {
        console.error("Error al obtener los datos de la colección 'CarSale':", error);
    }
}


// export const ListCarSale = async (setLisCarNew, setLisCarUsed, setListCar) => {

//     try {
//         const ref = collection(dbFire, "CarSale");

//         const docsSnap = await getDocs(ref);

//         const newCars = [];
//         const usedCars = [];
//         const CarSale = []

//         docsSnap.forEach(doc => {
//             const data = doc.data();
//             const IdCarSale = doc.id;
//             data.IdCarSale = IdCarSale;

//             if (data.Sale.DetalleCoche.Condicion === "Nuevo") {
//                 newCars.push(data)
//                 setLisCarNew(newCars)
                
                
//             }else if (data.Sale.DetalleCoche.Condicion === "Usado") {
//                 usedCars.push(data)
//                 setLisCarUsed(usedCars)
//             }

//             CarSale.push(data)
//             setListCar(CarSale)
//         });

//         setLisCarNew(newCars);
//         setLisCarUsed(usedCars);
//         setListCar(CarSale);

//     } catch (error) {
//         console.error("Error al obtener los datos de la colección 'events':", error);
//     }
// }