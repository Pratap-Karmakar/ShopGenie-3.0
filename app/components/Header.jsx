import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { BiUserCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-full border-b-[1.4px] border-b-white sticky top-0 left-0 z-50 gap-4">
        <div className="w-full bg-[#99627A] h-20  flex justify-between  items-center">
          <Link href="/">
            <div className="flex items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-[#59284B] duration-300 ease-out">
              <p className="font-bold text-xl hidden md:inline text-white">
                ShopGenie
              </p>
              <Image
                src={logo}
                alt="logo"
                className="h-8 w-8 inline bg-yellow-200 rounded-full"
              />
            </div>
          </Link>

          <div className="h-10 flex md:flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search your wish here!"
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow-500 text-black text-xl">
              <CiSearch />
            </span>
          </div>

          <Link href="/cart">
            <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-[#59284B] duration-300 ease-out relative mr-2 md:mr-5">
              <BsCart3 className="text-lg text-white" />
              <p className="text-sm -mt-2 text-white">Rs:00.00</p>
              <span className="absolute w-4 h-4 bg-yellow-500 text-black -top-2 right-5 rounded-full flex items-center justify-center font-bodyFont text-xs">
                0
              </span>
            </div>
          </Link>

          <div className="md:hidden flex mr-2">
            <GiHamburgerMenu className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
