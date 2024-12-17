import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCufOavs_UrV7n9KkRU46R4qoutoGbqp0Y',
  authDomain: 'tonski-67375.firebaseapp.com',
  projectId: 'tonski-67375',
  storageBucket: 'tonski-67375.firebasestorage.app',
  messagingSenderId: '465394924134',
  appId: '1:465394924134:web:5d275ce8c50879b3044ba7',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
