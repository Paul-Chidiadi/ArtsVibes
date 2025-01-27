"use client";

import { useState } from "react";
import Image from "next/image";

interface PropType {
  isWinner: boolean;
  author: string;
  bio: string;
  title: string;
  year: number;
  id: number;
  image: string;
}

export default function EntryCard({
  isWinner,
  author,
  bio,
  title,
  year,
  id,
  image,
}: PropType) {
  return (
    <a
      href={`/labari/entry?year=${year}&id=${id}`}
      className="bg-primary p-6 md:p-8 rounded-xl shadow-lg w-80 md:w-96"
    >
      {/* Winner Tag */}
      {isWinner && (
        <div className="text-right">
          <span className="text-black text-sm font-bold italic">Winner</span>
        </div>
      )}

      {/* Author */}
      <h1 className="text-black font-gothic text-sm uppercase text-center md:text-base font-bold mt-2">
        {author}
      </h1>

      {/* Bio */}
      <p className="md:h-[100px] overflow-hidden text-black text-center text-xs md:text-xs mt-2">
        {bio}
      </p>

      {/* Subtitle */}
      <p className="text-black text-center text-md font-bold md:text-lg mt-2">
        {title}
      </p>

      {/* Image */}
      <div className="flex items-center justify-center mt-2">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-black">
          <Image
            src={image}
            alt="Winner"
            width={660}
            height={430}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-end -mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-8 h-8 text-black"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l-1.5 1.5 8.25 8.25h-18.75v3h18.75l-8.25 8.25 1.5 1.5 11-11z" />
        </svg>
      </div>
    </a>
  );
}
