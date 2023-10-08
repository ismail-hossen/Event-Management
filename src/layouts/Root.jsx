import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[85vw] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
