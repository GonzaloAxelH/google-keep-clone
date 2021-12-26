import styled from "styled-components";
import FormCreateNote from "../../organismos/FormCreateNote/FormCreateNote";
import ListNotes from "../../organismos/ListNotes/ListNotes";
import PageContainer from "../PageContainer";
const WrapperCForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2.5em 0;
`;

const ListWrapperNotes = styled.div`
  margin: 0 5em;
`;

export default function Home({ open }) {
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
