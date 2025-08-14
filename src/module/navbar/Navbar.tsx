import { NavbarMenu } from "./data";
import { IoLibrary } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveLinks from "./ResponsiveLinks";
import './styles.css'
import { NavLink } from "react-router";



export default function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#FAF8F2]">
        <div className="container flex justify-between items-center py-8 ">
            {/* logo */}
            <div className="text-xl md:text-2xl flex items-center gap-2 font-bold py-8 uppercase">
                <IoLibrary/>
                <p>Book</p>
                <p className="text-brand-primary">Ventory</p>
            </div>
            {/* desktop links */}
            <div className="hidden w-full  md:block">
                <ul className="flex justify-center items-center gap-6 text-gray-600">
                    {
                        NavbarMenu.map(item => 
                            <NavLink to={item?.link}
                            className="inline-block py-1 px-3 hover:text-brand-primary hover:underline font-semibold"
                            >{item?.title}</NavLink>
                        )
                    }
                </ul>
            </div>
            {/* icons */}
            <div className="flex  justify-end items-center gap-4">
                <button className="text-2xl hover:bg-brand-primary hover:text-white p-2 rounded-full duration-200 md:hidden lg:block">
                    <CiSearch/>
                </button>
                <button className="text-2xl hover:bg-brand-primary hover:text-white p-2 rounded-full duration-200 md:hidden lg:block">
                    <PiShoppingCart/>
                </button>
                {/* <button className="hover:bg-brand-primary text-brand-primary font-semibold hover:text-white rounded-md border-2 border-brand-primary px-6 py-2 duration-200 hidden md:block">Login</button> */}
                <button className="hover:bg-[#ff8901] text-[#ff8901] max-w-[160px] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block">Login</button>
            </div>
            {/* mobile hamburger */}
            <div>
                <button onClick={ () => 
                    setOpen(!open)
                } className="md:hidden">
                    <MdMenu className="text-4xl"/>
                </button>
            </div>
        </div>
      </nav>

      {/* mobile links */}
      <ResponsiveLinks open={open}></ResponsiveLinks>
    </>
  );
}