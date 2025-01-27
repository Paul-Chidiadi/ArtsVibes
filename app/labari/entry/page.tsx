"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { entry2023, entry2024 } from "@/lib/data";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Labari />
    </Suspense>
  );
}

function Labari() {
  const searchParam = useSearchParams();
  const year = searchParam.get("year");
  const id = searchParam.get("id");

  const data = year === "2024" ? entry2024 : entry2023;
  const actaualItem = data && data.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <div
        id="top"
        className="relative w-full px-8 py-7 md:px-20 md:py-28 mt-12"
      >
        <h1 className="w-full p-4 font-gothic text-2xl md:text-6xl uppercase text-black text-center">
          {actaualItem && actaualItem.title}
        </h1>

        <h4 className="w-full font-lato font-bold text-2xl md:text-3xl text-black text-center mt-5 md:mt-10">
          {actaualItem && actaualItem.author}
        </h4>

        <p className="w-full font-lato font-medium text-[10px] md:text-lg text-black text-left mt-5 md:mt-10 whitespace-pre-wrap">
          {actaualItem && actaualItem.content}
        </p>

        <div className="w-full flex justify-start items-center gap-5 mt-12">
          <a href="#">
            <Image
              className="hover:w-12 cursor-pointer"
              src="/facebook.png"
              width={45}
              height={45}
              quality={100}
              alt="facebook"
            />
          </a>
          <a href="#">
            <Image
              className="hover:w-12 cursor-pointer"
              src="/linkedin.png"
              width={45}
              height={45}
              quality={100}
              alt="linkedin"
            />
          </a>
          <Image
            className="hover:w-12 cursor-pointer"
            src="/twitter.png"
            width={45}
            height={45}
            quality={100}
            alt="twitter"
          />
        </div>
        <div className="hidden absolute md:block rounded-full md:w-[250px] md:h-[250px] overflow-hidden bottom-3 right-3">
          <Image
            src={actaualItem && actaualItem.image}
            alt="user"
            width={250}
            height={250}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
