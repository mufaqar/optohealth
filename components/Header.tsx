"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ContactForm from "./contact/ContactForm";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "What is Opto", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="py-3.5 relative z-50 bg-white shadow-xl">
        <div className="container mx-auto px-4 flex flex-row gap-5 items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link href="/" className="inline-flexs">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={85}
                height={81}
              />
            </Link>
          </div>

          {/* Menu */}
          <div>
            {/* Mobile menu button */}
            <button
              onClick={() => setMblMenu(!mblMenu)}
              className={`${pathname === "/" ? "text-primary " : "text-title"
                } text-3xl md:hidden inline-flex items-center justify-center`}
            >
              {mblMenu ? <IoMdClose /> : <FaBars />}
            </button>

            {/* Nav */}
            <nav
              className={`
              md:static absolute top-20 left-0 right-0 
              md:bg-transparent bg-white 
              md:p-0 p-4 transition-all duration-300 ease-in-out
              ${mblMenu ? "block" : "hidden"} md:block
            `}
            >
              <ul className="flex md:flex-row flex-col gap-7">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item?.href}
                      className={`${pathname === item?.href
                        ? "text-secondary"
                        : ""
                        } text-base text-primary hover:text-secondary font-bold md:p-0 transition-all duration-300 ease-in-out`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-base text-primary hover:text-secondary font-bold md:p-0 transition-all duration-300 ease-in-out"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 h-full w-full py-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <ContactForm setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
