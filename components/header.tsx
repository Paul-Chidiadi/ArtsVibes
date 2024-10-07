"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-8 py-4 bg-white md:px-20  md:rounded-b-3xl z-50">
        <a href="/">
          <Image
            className="w-24 h-auto md:w-24 lg:w-40"
            src="/arts-vibes-logo.png"
            width={100}
            height={100}
            quality={100}
            alt="Art and Vibes Logo"
          />
        </a>

        {/* MENU ITEMS AT LARGE SCREEN */}
        <div className="hidden lg:flex items-center justify-between w-2/5">
          <a
            href="/"
            className="hover:text-black cursor-pointer font-lato font-medium text-faintBlack text-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-black cursor-pointer font-lato font-medium text-faintBlack text-lg"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-black cursor-pointer font-lato font-medium text-faintBlack text-lg"
          >
            Events
          </a>
          <a
            href="/gallery"
            className="hover:text-black cursor-pointer font-lato font-medium text-faintBlack text-lg"
          >
            Gallery
          </a>
          <a
            href="#"
            className="hover:text-black cursor-pointer font-lato font-medium text-faintBlack text-lg"
          >
            Labari Prize
          </a>
        </div>
        {/* MENU ITEMS AT SMALL SCREEN */}
        {showMenu && (
          <div
            className={`absolute flex flex-col items-start justify-start gap-3 w-full h-fit top-full left-0 py-4 px-8 md:px-20 bg-footer z-50 transition-all duration-5000 ease-linear transform ${
              showMenu
                ? "opacity-100 translate-y-"
                : "opacity-0 translate-y-full"
            } lg:hidden`}
          >
            <a
              href="/"
              className="hover:text-black cursor-pointer font-lato font-medium text-white text-base"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-black cursor-pointer font-lato font-medium text-white text-base"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-black cursor-pointer font-lato font-medium text-white text-base"
            >
              Events
            </a>
            <a
              href="#"
              className="hover:text-black cursor-pointer font-lato font-medium text-white text-base"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-black cursor-pointer font-lato font-medium text-white text-base"
            >
              Labari Prize
            </a>
            <a
              href="mailto:"
              className="flex items-center justify-center bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-base cursor-pointer hover:text-faintBlack"
            >
              Contact
            </a>
          </div>
        )}

        <a
          href="mailto:"
          className="hidden lg:flex items-center justify-center bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-lg cursor-pointer hover:text-faintBlack"
        >
          Contact
        </a>
        {/* MENU BUTTONS */}
        <div onClick={toggleMenu} className="lg:hidden">
          {!showMenu && <i className="bx bx-menu text-2xl text-black"></i>}
          {showMenu && <i className="bx bx-x text-2xl text-black"></i>}
        </div>
      </nav>
    </>
  );
}
