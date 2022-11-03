import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { FirebaseConfig } from './FirebaseConfig';

const firebaseConfig = FirebaseConfig

initializeApp(firebaseConfig);
const db = getDatabase();

export function writeData(date: string, message: string, user: string) {
  set(ref(db), {
    date: date,
    message: message,
    user: user
  });
  console.log('Wrote data to database')
}

export function readData() {
    var data: Database = {
      MainData: []
    }
    
    const dataRef = ref(db)
    onValue(dataRef, (snapshot) => {
        const d = snapshot.val()

        data = {
          MainData: d.MainData
        }
    })

    return data 
}

export const data = readData()

// Interfaces
interface Database {
  // @ts-ignore
  MainData: Array
}