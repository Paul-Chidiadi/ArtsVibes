import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div id="top" className="w-full px-8 py-7 md:px-20 md:py-28 mt-12">
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Shortlisted Entries
        </h1>

        <div className="w-full flex items-center justify-center py-12">
          <a href="/labari/winner">
            <Image
              className="w-full md:w-96"
              src="/Frame 38556.png"
              width={660}
              height={430}
              quality={100}
              alt="line-image"
            />
          </a>
        </div>

        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Entries
        </h1>

        <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
          <a href="/labari/entryone">
            <Image
              className="w-full md:w-96"
              src="/Frame 38555.png"
              width={660}
              height={430}
              quality={100}
              alt="line-image"
            />
          </a>
          <a href="/labari/entrytwo">
            <Image
              className="w-full md:w-96"
              src="/Frame 38554.png"
              width={660}
              height={430}
              quality={100}
              alt="line-image"
            />
          </a>
          <a href="/labari/entrythree">
            <Image
              className="w-full md:w-96"
              src="/Frame 38557.png"
              width={660}
              height={430}
              quality={100}
              alt="line-image"
            />
          </a>
          <Image
            className="w-full md:w-96"
            src="/Frame 38558.png"
            width={660}
            height={430}
            quality={100}
            alt="line-image"
          />
        </div>
      </div>

      <div className="w-full flex items-start justify-end py-5 pr-11 md:py-10 md:pr-24">
        <a href="#top">
          <Image
            className="cursor-pointer w-10 md:w-14"
            src="/Frame 179.png"
            width={56}
            height={56}
            quality={100}
            alt="top-image"
          />
        </a>
      </div>
    </>
  );
}
