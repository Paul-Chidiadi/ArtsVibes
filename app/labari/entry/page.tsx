import Image from "next/image"
import { entry2023, entry2024, entry2025 } from "@/lib/data"
import AuthorProfile from "@/components/authorProfile"
import { Metadata } from "next"
import Script from "next/script"

export default function Page({
  searchParams,
}: {
  searchParams: { year?: string; id?: string }
}) {
  return <Labari searchParams={searchParams} />
}

// Add generateMetadata function
const getDataByYear = (year?: string) => {
  if (year === "2025") return entry2025
  if (year === "2024") return entry2024
  return entry2023
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { year?: string; id?: string }
}): Promise<Metadata> {
  const year = searchParams.year
  const id = searchParams.id
  const data = getDataByYear(year)
  const actualItem = data && data.filter((item) => item.id === Number(id))[0]

  if (!actualItem) {
    return { title: "Labari Prize Entry | Arts and Vibes" }
  }

  return {
    title: `${actualItem.author}'s Arts and Vibes Profile`,
    description: actualItem.bio,
    openGraph: {
      title: `${actualItem.author}'s Arts and Vibes Profile`,
      description: actualItem.bio,
      images: [
        {
          url: `https://www.artsandvibes.com/${actualItem.image}`,
          width: 1200,
          height: 630,
        },
      ],
      url: `https://www.artsandvibes.com/labari/entry?year=${year}&id=${actualItem.id}`,
      siteName: "Arts and Vibes",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${actualItem.author}'s Arts and Vibes Profile`,
      description: actualItem.bio,
      images: [`https://www.artsandvibes.com/${actualItem.image}`],
    },
    other: {
      "og:type": "profile",
      "profile:username": actualItem.author,
    },
  }
}

function Labari({
  searchParams,
}: {
  searchParams: { year?: string; id?: string }
}) {
  const year = searchParams.year
  const id = searchParams.id
  const data = getDataByYear(year)
  const actualItem = data && data.filter((item) => item.id === Number(id))[0]

  if (!actualItem) {
    return (
      <div className="relative w-full px-8 py-7 md:px-20 md:py-28 mt-12 text-center">
        <p className="text-lg text-smallColor">Entry not found.</p>
      </div>
    )
  }

  return (
    <>
      {/* ✅ Google SEO JSON-LD Schema */}
      <Script
        id="json-ld-profile"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: actualItem.author,
            description: actualItem.bio,
            image: `https://www.artsandvibes.com/${actualItem.image}`,
            url: `https://www.artsandvibes.com/labari/entry?year=${year}&id=${actualItem.id}`,
          }),
        }}
      />

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

        <p className="font-lato font-medium text-md md:text-lg text-black text-left mx-auto mt-5 md:mt-10 whitespace-pre-wrap">
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
      </div>
    </>
  )
}
