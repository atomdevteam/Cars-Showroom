import { dbFire, storage } from "../../firebase/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { ref as storageref, uploadBytes, getDownloadURL } from "firebase/storage"
export const SaveCarSale = async (datos, userId) => {

    try {

        const docRef = await addDoc(collection(dbFire, "CarSale"), datos);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log(error)
    }
}

export const SaveMedia = (file, userId, setLinkUrl) => {
    const storageRef = storageref(storage, `CarSaleMultimedia/${userId}/${file.name}`)
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Imagen subida correctamente')
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url)
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
        console.log('Archivo subida correctamente')
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url)
                setLinkUrl(url)
            })
            .catch((error) => {
                console.log(error)
            });
    }).catch((error) => {
        console.error('Error al subir la Archivo:', error);
    });
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