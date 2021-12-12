import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/HomePage/Home";
import Reminders from "../components/pages/RemindersPage/Reminders";
const Routing = ({ open }) => {
  const paths = {
    HOME: "/",
    REMINDERS: "/reminders",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path={paths.REMINDERS} component={<Reminders />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
