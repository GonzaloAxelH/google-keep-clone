import { useRef, useEffect } from "react";
import { Wrapper, Contenido } from "./PageContainerStyles.jsx";

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
