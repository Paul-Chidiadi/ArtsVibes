"use client";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <footer className="w-full h-fit bg-footer py-20 px-8 md:px-20 lg:px-28">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <div className="flex-col items-start justify-between">
            <h1 className="text-white md:text-lg lg:text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              QUICK LINKS
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Home
              </a>
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                About Us
              </a>
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Gallery
              </a>
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Labari Prize
              </a>
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Contact
              </a>
            </div>
          </div>
          <div className="flex-col items-start justify-between">
            <h1 className="text-white md:text-lg lg:text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              LEGALS
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Terms and Agreement
              </a>
              <a className="text-white md:text-base lg:text-xl font-normal font-lato mb-4 hover:text-primary cursor-pointer block">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex-col items-start justify-between">
            <h1 className="text-white md:text-lg lg:text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              CONNECT
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <div className="flex items-center justify-start gap-5 mb-4">
                <Image
                  className="hover:w-12 cursor-pointer"
                  src="/Group 64.png"
                  width={45}
                  height={45}
                  quality={100}
                  alt="instagram"
                />
                <Image
                  className="hover:w-12 cursor-pointer"
                  src="/Group 61.png"
                  width={45}
                  height={45}
                  quality={100}
                  alt="twitter"
                />
              </div>
              <h3 className="text-white md:text-base lg:text-xl font-normal font-lato mb-4">
                artxvibes@gmail.com
              </h3>
              <h3 className="text-white md:text-base lg:text-xl font-normal font-lato mb-4">
                +2348186319784
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-between w-full mt-14 md:flex-row">
          <Image
            className="w-28 md:w-48 lg:w-60"
            src="/arts-vibes-logo-2.png"
            width={240}
            height={120}
            quality={100}
            alt="Art and Vibes Logo"
          />

          <div className="flex-col items-center justify-start">
            <h4 className="text-white text-base lg:text-xl font-normal font-lato mb-2">
              We will love to reach you! Subscribe to get
            </h4>
            <div className="flex items-center justify-between w-full bg-white px-3 py-2 rounded-lg">
              <input
                className=" flex-1 border-none outline-none pr-5 py-1"
                type="email"
                placeholder="Your Email..."
              />
              <button className="bg-primary px-5 py-2 rounded-lg font-medium text-black cursor-pointer hover:text-faintBlack">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between w-full mt-14 lg:flex-row">
          <h4 className="text-white text-base lg:text-xl font-normal font-lato">
            © 2024 ARTS&VIBES All rights reserved.
          </h4>
          <div className="flex items-center justify-between gap-8">
            <h4 className="text-white text-base lg:text-xl font-normal font-lato hover:text-primary cursor-pointer">
              Terms & Agreements
            </h4>
            <h4 className="text-white text-base lg:text-xl font-normal font-lato hover:text-primary cursor-pointer">
              Privacy Policy
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
