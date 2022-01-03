import { db, storageRef } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveNote = async (newNote) => {
  try {
    const docRef = await addDoc(collection(db, "note"), newNote);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const saveImage = (file, idNote) => {
  const metadata = {
    contentType: file.type,
    customMetadata: {
      idnote: idNote,
    },
  };

  return storageRef
    .child("images/" + file.name)
    .put(file, metadata)
    .then((snapshot) => {
      console.log(snapshot);
      return snapshot.totalBytes;
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
};
