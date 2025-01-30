"use client";

import Image from "next/image";

interface PropType {
  author: string;
  image: string;
  bio: string;
}

export default function AuthorProfile({ author, image, bio }: PropType) {
  return (
    <div className="w-full px-8 py-12 md:px-20 bg-gray-50 mt-3 md:mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={author}
              width={160}
              height={160}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-gothic text-2xl md:text-4xl text-black mb-4">
              About {author}
            </h2>
            <p className="font-lato text-base md:text-lg text-gray-700 whitespace-pre-wrap">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
