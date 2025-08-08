import Navbar from "@/module/navbar/Navbar";
import { Outlet } from "react-router";



export default function Root() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
}