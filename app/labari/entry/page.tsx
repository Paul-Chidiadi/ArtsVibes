"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { entry2023, entry2024 } from "@/lib/data";
import { Suspense } from "react";
import MetaTags from "@/components/metaTags";
import AuthorProfile from "@/components/authorProfile";
import { Metadata } from "next";

export default function Page() {
  return (
    <Suspense>
      <Labari />
    </Suspense>
  );
}

// Add generateMetadata function
async function generateMetadata(): Promise<Metadata> {
  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const id = searchParams.get("id");
  const data = year === "2024" ? entry2024 : entry2023;
  const actualItem = data && data.filter((item) => item.id === Number(id))[0];

  return {
    title: `${actualItem.author}'s Arts and Vibes Profile`,
    description: actualItem.bio,
    openGraph: {
      title: `${actualItem.author}'s Profile`,
      description: actualItem.bio,
      images: [
        {
          url: `https://www.artsandvibes.com/${actualItem.image}`,
          width: 1200,
          height: 630,
        },
      ],
      url: `https://www.artsandvibes.com/labari/entry?year=${year}&${actualItem.id}`,
      siteName: "Arts and Vibes",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${actualItem.author}'s Profile`,
      description: actualItem.bio,
      images: [`https://www.artsandvibes.com/${actualItem.image}`],
    },
    other: {
      "og:type": "profile",
      "profile:username": actualItem.author,
    },
  };
}

function Labari() {
  const searchParam = useSearchParams();
  const year = searchParam.get("year");
  const id = searchParam.get("id");

  const data = year === "2024" ? entry2024 : entry2023;
  const actualItem = data && data.filter((item) => item.id === Number(id))[0];

  return (
    <>
      {/* <MetaTags
        title={`${actualItem.author}'s Arts and Vibes Profile`}
        description={actualItem.bio}
        imageUrl={`https://www.artsandvibes.com/${actualItem.image}`}
        url={`https://www.artsandvibes.com/labari/entry?year=${year}&id=${actualItem.id}`}
        username={actualItem.author}
      /> */}

      <div
        id="top"
        className="relative w-full px-8 py-7 md:px-20 md:py-28 mt-12"
      >
        <h1 className="w-full p-4 font-gothic text-2xl md:text-6xl uppercase text-black text-center">
          {actualItem && actualItem.title}
        </h1>

        <h4 className="w-full font-lato font-bold text-2xl md:text-3xl text-black text-center mt-5 md:mt-10">
          {actualItem && actualItem.author}
        </h4>

        <p className="w-full font-lato font-medium text-[10px] md:text-lg text-black text-left mt-5 md:mt-10 whitespace-pre-wrap">
          {actualItem && actualItem.content}
        </p>

        <AuthorProfile
          author={actualItem.author}
          image={actualItem.image}
          bio={actualItem.bio}
        />

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
        {/* <div className="hidden absolute md:block rounded-full md:w-[250px] md:h-[250px] overflow-hidden bottom-3 right-3">
          <Image
            src={actualItem && actualItem.image}
            alt="user"
            width={250}
            height={250}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </>
  );
}
