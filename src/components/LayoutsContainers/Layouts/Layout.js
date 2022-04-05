import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../../templates/Header/Header";
import NavLeft from "../../templates/Navs/NavLeft";

const LayoutWrapper = styled.div`
  main {
    margin-left: 4em;
    padding-top: 4em;
  }
`;
export default function Layout({ children }) {
  return (
    <BrowserRouter>
      <Header />
      <NavLeft />
      <LayoutWrapper>
        <main>
          <Routes>
            {children.map((Child) => {
              return (
                <Route
                  path={Child.props.path}
                  exact={Child.props.exact}
                  element={<Child.type />}
                />
              );
            })}
          </Routes>
        </main>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
