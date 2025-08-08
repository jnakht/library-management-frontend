import { NavbarMenu } from "./data";
import { IoLibrary } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveLinks from "./ResponsiveLinks";

export default function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 ">
            {/* logo */}
            <div className="text-2xl flex items-center gap-2 font-bold py-8 uppercase">
                <IoLibrary/>
                <p>Book</p>
                <p className="text-[#fb923c]">Ventory</p>
            </div>
            {/* desktop links */}
            <div className="hidden w-full  md:block">
                <ul className="flex justify-center items-center gap-6 text-gray-600">
                    {
                        NavbarMenu.map(item => 
                            <li>
                                <a
                                className="inline-block py-1 px-3 hover:text-[#ff8901] font-semibold" 
                                href={item.link}>{item.title}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            {/* icons */}
            <div className="flex  justify-end items-center gap-4">
                <button className="text-2xl hover:bg-[#ff8901] hover:text-white p-2 rounded-full duration-200">
                    <CiSearch/>
                </button>
                <button className="text-2xl hover:bg-[#ff8901] hover:text-white p-2 rounded-full duration-200">
                    <PiShoppingCart/>
                </button>
                <button className="hover:bg-[#ff8901] text-[#ff8901] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block">Login</button>
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