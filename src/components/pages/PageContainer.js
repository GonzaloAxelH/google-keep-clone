import styled from "styled-components";
import { useRef, useEffect } from "react";
export const Wrapper = styled.div`
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

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.open ? "calc(100% - 280px)" : "calc(100% - 56px)"};
  transform: ${(props) =>
    props.open ? "translateX(280px)" : "translateX(56px)"};
  padding: 64px 0 0 0;
  @media (max-width: 600px) {
    padding: 64px 1em 1em 5em;
  }
`;

function PageContainer({ children, open, getScrollPage }) {
  const pageRef = useRef();
  useEffect(() => {
    pageRef.current.addEventListener("scroll", getScrollPage);
    return () => {};
  });

  return (
    <Wrapper ref={pageRef}>
      <Contenido open={open}>{children}</Contenido>
    </Wrapper>
  );
}

export default PageContainer;
