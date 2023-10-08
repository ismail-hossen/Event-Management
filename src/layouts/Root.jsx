import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname == "/" && <Banner />}
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Root;
