import HomeContainer from "../PageContainers/HomeContainer";
import styled from "styled-components";
import FormCreateNote from "../../organismos/FormCreateNote/FormCreateNote";
import ListNotes from "../../organismos/ListNotes/ListNotes";
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.open ? "calc(100% - 280px)" : "calc(100% - 56px)"};
  transform: ${(props) =>
    props.open ? "translateX(280px)" : "translateX(56px)"};
  padding: 64px 1em 1em 1em;
  @media (max-width: 600px) {
    padding: 64px 1em 1em 5em;
  }
`;

const WrapperCForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
`;

const ListWrapperNotes = styled.div`
  margin: 0 5em;
`;
export default function Home({ open }) {
  return (
    <HomeContainer>
      <Contenido open={open}>
        <WrapperCForm>
          <FormCreateNote />
        </WrapperCForm>
        <ListWrapperNotes>
          <ListNotes />
        </ListWrapperNotes>
      </Contenido>
    </HomeContainer>
  );
}
