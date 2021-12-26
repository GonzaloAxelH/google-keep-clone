import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export const getNotes = async () => {
  const querySnapshot = await getDocs(collection(db, "note"));
  const allNotes = [];

  querySnapshot.forEach((doc) => {
    allNotes.push(doc.data());
  });
  
  return allNotes;
};
