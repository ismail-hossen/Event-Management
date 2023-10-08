import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[85vw] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Root;
