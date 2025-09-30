import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Navbar/Navbar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default DefaultLayout