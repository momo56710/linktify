import { db } from './firebase'

import { collection , addDoc } from 'firebase/firestore'

const getUsers = async () => {
    const snapshot = await db.collection('users')
    snapshot.docs.forEach((doc) => console.log(doc.data))
}
export { getUsers }