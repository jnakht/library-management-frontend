import Footer from "@/module/globalComponents/Footer";
import Navbar from "@/module/navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";



export default function Root() {
  return (
    <div className="bg-[#FAF8F2]">
      <div className="overflow-x-hidden">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <ToastContainer position="top-right" autoClose={2000}/>
     <div className="mt-20">
       <Footer></Footer>
     </div>
    </div>
  );
}