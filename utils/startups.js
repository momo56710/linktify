import { db } from "./firebase"
import { getDocs, collection } from 'firebase/firestore'

export async function fetchDataFromFireStore() {
    const snapshot = await getDocs(collection(db, 'startups'))
    const data = []
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()})
    })
    return data
}

