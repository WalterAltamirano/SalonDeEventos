import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;