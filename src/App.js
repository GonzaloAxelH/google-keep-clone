import React, { useState } from "react";
import Layout from "./components/LayoutsContainers/Layouts/Layout";
import HomePage from "./components/pages/HomePage/Home";
import ArchivePage from "./components/pages/ArchivePage/Archive";
import TrashPage from "./components/pages/TrashPage/Trash";
import RemindersPage from "./components/pages/RemindersPage/Reminders";
import LabelsPage from "./components/pages/LabelsPage/Labels";
export const FullContext = React.createContext();
export const ModalContext = React.createContext();
const App = () => {
  const [openNavLeft, setOpenNavLeft] = useState(false);
  const [openNavLeftHover, setOpenNavLeftHover] = useState(false);
  const [scrollPage, setScrollPage] = useState(0);

  const context = {
    openNavLeft,
    setOpenNavLeft,
    openNavLeftHover,
    setOpenNavLeftHover,
    scrollPage,
    setScrollPage,
  };
  return (
    <FullContext.Provider value={context}>
      <Layout>
        <HomePage path="/" exact />
        <RemindersPage path="/reminders" />
        <LabelsPage path="/labels" />
        <ArchivePage path="/archive" />
        <TrashPage path="/trash" />
      </Layout>
    </FullContext.Provider>
  );
};

export default App;
