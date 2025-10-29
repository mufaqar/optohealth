"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaPhoneVolume } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "What is Opto", href: "/What is Opto" },
  { label: "About us", href: "/About us" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact", href: "/Contact" },
];

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false);
  const pathname = usePathname()

  return (
    <header className="py-3.5 relative z-50 bg-white shadow-xl">
      <div className="container mx-auto px-4 flex flex-row gap-5 items-center justify-between">
        {/* Logo */}
        <div className="">
          <Link href="/">
            <Image src="/images/Opto_Logo1 (1).png" alt="logo" width={80} height={50} />
          </Link>
        </div>

        {/* Menu */}
        <div>
          {/* Mobile menu button */}
          <button
            onClick={() => setMblMenu(!mblMenu)}
            className={`${pathname === "/" ? "text-[#004361] " : "text-title"} text-4xl md:hidden inline-flex items-center justify-center`}
          >
            {mblMenu ? <IoMdClose /> : <FaBars />}
          </button>

          {/* Nav */}
          <nav
            className={`
              md:static absolute top-20 left-0 right-0 
              md:bg-transparent bg-primary 
              md:p-0 p-4 transition-all duration-300 ease-in-out
              ${mblMenu ? "block" : "hidden"} md:block
            `}
          >
            <ul className="flex md:flex-row flex-col gap-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`${pathname === "/" ? "text-[#004361] hover:text-[#34b4fc] " : "text-title hover:text-primary"} text-md font-bold md:p-0 transition-all duration-300 ease-in-out`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

       
      </div>
    </header>
  );
};

export default Header;
