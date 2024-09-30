"use client"; // Ensure this component is treated as a client component

import { AuthContext } from "@/AuthContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger and close icons

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { token, login, logout } = useContext(AuthContext);
  console.log(token, "helloo")
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">DAKIEOBLOG</div>

        {/* Menu items (visible on larger screens) */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/sportnews" className="hover:text-gray-300">Sport</Link></li>
          <li><Link href="/politcsnews" className="hover:text-gray-300">Politics</Link></li>
          <li><Link href="/businessnews" className="hover:text-gray-300">Business</Link></li>
          <li><Link href="/entertainment" className="hover:text-gray-300">Entertainment</Link></li>
          <li><Link href="/investigation" className="hover:text-gray-300">Investigation</Link></li>
          {
            token && (
              <li><Link href="/post" className="hover:text-gray-300">Post News</Link></li>

            )
          }
        </ul>

        {/* Hamburger icon (visible on smaller screens) */}
        <div className="md:hidden" onClick={toggleNav}>
          {!navOpen ? (
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          ) : (
            <AiOutlineClose className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile menu (visible on smaller screens) */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-700 space-y-4 p-6">
          <li><Link href="/" className="hover:text-gray-300" onClick={closeNav}>Home</Link></li>
          <li><Link href="/sportnews" className="hover:text-gray-300" onClick={closeNav}>Sport</Link></li>
          <li><Link href="/politcsnews" className="hover:text-gray-300" onClick={closeNav}>Politics</Link></li>
          <li><Link href="/businessnews" className="hover:text-gray-300" onClick={closeNav}>Business</Link></li>
          <li><Link href="/entertainment" className="hover:text-gray-300" onClick={closeNav}>Entertainment</Link></li>
          <li><Link href="/investigation" className="hover:text-gray-300" onClick={closeNav}>Investigation</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
