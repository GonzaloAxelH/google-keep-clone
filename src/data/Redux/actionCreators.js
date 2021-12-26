import { getNotes } from "../firebase/getData";
import { saveNote } from "../firebase/storageActions";
import { ACTION } from "./store";

export const loadNotes = () => {
  return async (dispatch) => {
    const allNotes = await getNotes();
    dispatch({ type: ACTION.LOAD_NOTES, payload: allNotes });
  };
};

export const addNote = (newNote) => {
  return async (dispatch) => {
    await saveNote(newNote);
    dispatch(loadNotes());
  };
};
