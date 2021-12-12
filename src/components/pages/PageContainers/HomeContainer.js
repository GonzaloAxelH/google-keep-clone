import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    border: 1px solid rgb(218, 220, 224);
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 2px;
    border: 2px solid transparent;
  }
`;
export default function HomeContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
