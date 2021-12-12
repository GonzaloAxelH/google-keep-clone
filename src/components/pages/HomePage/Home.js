import HomeContainer from "../PageContainers/HomeContainer";
import styled from "styled-components";
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
export default function Home({ open }) {
  return (
    <HomeContainer>
      <Contenido open={open}>
        <h1>HomePage</h1>
      </Contenido>
    </HomeContainer>
  );
}
