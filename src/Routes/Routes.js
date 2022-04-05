import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/HomePage/Home";
import Reminders from "../components/pages/RemindersPage/Reminders";
import Labels from "../components/pages/LabelsPage/Labels";
import Archive from "../components/pages/ArchivePage/Archive";
import Trash from "../components/pages/TrashPage/Trash";
export const paths = {
  HOME: "/",
  REMINDERS: "/reminders",
  LABELS: "/labels",
  ARCHIVE: "/archive",
  TRASH: "/trash",
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />
        <Route path={paths.REMINDERS} element={<Reminders />} />
        <Route path={paths.LABELS} element={<Labels />} />
        <Route path={paths.ARCHIVE} element={<Archive />} />
        <Route path={paths.TRASH} element={<Trash />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
