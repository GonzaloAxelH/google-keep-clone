import FormCreateNote from "../../organismos/FormCreateNote/FormCreateNote";
import ListNotes from "../../organismos/ListNotes/ListNotes";
import { WrapperCForm, ListWrapperNotes } from "./PageHomeStyles.jsx";

export default function Home() {
  return (
    <>
      <WrapperCForm>
        <FormCreateNote />
      </WrapperCForm>
      <ListWrapperNotes>
        <ListNotes />
      </ListWrapperNotes>
    </>
  );
}
