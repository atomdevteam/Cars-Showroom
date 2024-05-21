import { dbFire, storage } from "../../firebase/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

export const SaveCarSale = async (datos) => {

    try {
        const docRef = await addDoc(collection(dbFire, "CarSale"), datos);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log(error)
    }
}

export const ListCarSale = async () => {

    try {
        const ref = collection(dbFire, "CarSale");

        const docsSnap = await getDocs(ref);


        const CarSales = [];
        docsSnap.forEach(doc => {

            const data = doc.data();
            const eventId = doc.id; 
            data.eventId = eventId; 
            CarSales.push(data);
        });


    } catch (error) {
        console.error("Error al obtener los datos de la colección 'events':", error);
    }
}