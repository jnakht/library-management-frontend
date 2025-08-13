import Footer from "@/module/globalComponents/Footer";
import Navbar from "@/module/navbar/Navbar";
import { Outlet } from "react-router";



export default function Root() {
  return (
    <div className="bg-[#FAF8F2]">
      <div className="overflow-x-hidden">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
     <div className="mt-20">
       <Footer></Footer>
     </div>
    </div>
  );
}