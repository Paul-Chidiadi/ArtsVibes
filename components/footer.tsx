"use client";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <footer className="w-full h-fit bg-footer py-20 px-28">
        <div className="flex items-start justify-between w-full">
          <div className="flex-col items-start justify-between">
            <h1 className="text-white text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              QUICK LINKS
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Home
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                About Us
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Gallery
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Labari Prize
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Contact
              </h3>
            </div>
          </div>
          <div className="flex-col items-start justify-between">
            <h1 className="text-white text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              LEGALS
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Terms and Agreement
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                Privacy Policy
              </h3>
            </div>
          </div>
          <div className="flex-col items-start justify-between">
            <h1 className="text-white text-2xl font-normal font-gothic mb-4 pb-3 border-b-4">
              CONNECT
            </h1>
            <div className="flex-col items-start justify-between gap-5 pl-3">
              <div className="flex items-center justify-start gap-5 mb-4">
                <Image
                  src="/Group 64.png"
                  width={45}
                  height={45}
                  quality={100}
                  alt="instagram"
                />
                <Image
                  src="/Group 61.png"
                  width={45}
                  height={45}
                  quality={100}
                  alt="twitter"
                />
              </div>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                artxvibes@gmail.com
              </h3>
              <h3 className="text-white text-xl font-normal font-lato mb-4">
                +2348186319784
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between w-full mt-14">
          <Image
            src="/arts-vibes-logo-2.png"
            width={280}
            height={120}
            quality={100}
            alt="Art and Vibes Logo"
          />

          <div className="flex-col items-center justify-start">
            <h4 className="text-white text-xl font-normal font-lato mb-2">
              We will love to reach you! Subscribe to get
            </h4>
            <div className="flex items-center justify-between w-full bg-white px-3 py-2 rounded-lg">
              <input
                className=" flex-1 border-none outline-none px-5 py-2"
                type="email"
                placeholder="Your Email..."
              />
              <button className="bg-primary px-5 py-2 rounded-lg font-medium text-black cursor-pointer hover:text-faintBlack">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between w-full mt-14">
          <h4 className="text-white text-xl font-normal font-lato">
            © 2024 ARTS&VIBES All rights reserved.
          </h4>
          <div className="flex items-center justify-between gap-8">
            <h4 className="text-white text-xl font-normal font-lato">
              Terms & Agreements
            </h4>
            <h4 className="text-white text-xl font-normal font-lato">
              Privacy Policy
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
