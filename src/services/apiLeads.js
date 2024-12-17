import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function addLead(newLead) {
  try {
    const docRef = await addDoc(collection(db, 'leads'), { newLead });

    return docRef.id;
  } catch (error) {
    throw new Error('Error submitting form');
  }
}
