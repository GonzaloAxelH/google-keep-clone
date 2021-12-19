import styled from "styled-components";
import { useState } from "react";
import Header from "./components/templates/Header/Header";
import Routing from "./Routes/Routes";
import NavLeft from "./components/templates/Navs/NavLeft";
import { BrowserRouter } from "react-router-dom";

const WapperApp = styled.div`
  display: flex;
  flex-direction: column;
`;
const LayoutApp = styled.div`
  display: flex;
`;

const App = () => {
  const [isOpenNavLeft, setIsOpenNavLeft] = useState(false);
  const [isOpenNavLeftHover, setIsOpenNavLeftHover] = useState(false);
  return (
    <WapperApp>
      <Header OnclickToggleNavleft={() => setIsOpenNavLeft(!isOpenNavLeft)} />
      <LayoutApp>
        <BrowserRouter>
          <NavLeft
            open={isOpenNavLeft}
            hover={isOpenNavLeftHover}
            onMouseEnter={() => setIsOpenNavLeftHover(true)}
            onMouseLeave={() => setIsOpenNavLeftHover(false)}
          />
          <Routing open={isOpenNavLeft} />
        </BrowserRouter>
      </LayoutApp>
    </WapperApp>
  );
};

export default App;
