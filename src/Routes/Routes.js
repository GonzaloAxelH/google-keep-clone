import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/HomePage/Home";
import Reminders from "../components/pages/RemindersPage/Reminders";
import Labels from "../components/pages/LabelsPage/Labels";
import Archive from "../components/pages/ArchivePage/Archive";
import Trash from "../components/pages/TrashPage/Trash";
export const paths = {
  HOME: "/home",
  REMINDERS: "/reminders",
  LABELS: "/labels",
  ARCHIVE: "/archive",
  TRASH: "/trash",
};

const Routing = ({ open }) => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Home open={open} />} />
      <Route path={paths.REMINDERS} element={<Reminders open={open} />} />
      <Route path={paths.LABELS} element={<Labels open={open} />} />
      <Route path={paths.ARCHIVE} element={<Archive open={open} />} />
      <Route path={paths.TRASH} element={<Trash open={open} />} />
    </Routes>
  );
};
export default Routing;
