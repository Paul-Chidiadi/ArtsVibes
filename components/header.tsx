"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="relative flex items-center justify-between w-full px-20 py-4 bg-white rounded-b-3xl">
        <Image
          className="w-20 h-auto md:w-24 lg:w-40 "
          src="/arts-vibes-logo.png"
          width={100}
          height={100}
          quality={100}
          alt="Art and Vibes Logo"
        />
        <div className="hidden lg:flex items-center justify-between w-2/5 font-lato font-medium text-faintBlack text-lg">
          <a href="#" className="hover:text-black cursor-pointer">
            Home
          </a>
          <a href="#" className="hover:text-black cursor-pointer">
            About
          </a>
          <a href="#" className="hover:text-black cursor-pointer">
            Events
          </a>
          <a href="#" className="hover:text-black cursor-pointer">
            Gallery
          </a>
          <a href="#" className="hover:text-black cursor-pointer">
            Labari Prize
          </a>
        </div>
        <a
          href="mailto:"
          className="hidden lg:flex items-center justify-center bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-lg cursor-pointer hover:text-faintBlack"
        >
          Contact
        </a>
      </nav>
    </>
  );
}
