import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div
        id="top"
        className="bg-[url('/gallerybg.png')] bg-cover bg-center bg-no-repeat h-fit w-full flex flex-col justify-center items-center gap-10 relative mt-0 md:mt-20 mb-20 px-8 py-28 md:py-28 md:px-20"
      >
        <h1 className="w-full font-gothic font-medium text-black text-center text-3xl md:text-6xl">
          OVER THE YEARS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 w-full">
          <Image
            className="h-60 md:h-80 object-cover rounded-lg"
            src="/gallery.png"
            width={244}
            height={320}
            quality={100}
            alt="team"
          />
          <Image
            className="h-60 md:h-80 object-cover rounded-lg"
            src="/gallery3.png"
            width={244}
            height={320}
            quality={100}
            alt="team"
          />
          <Image
            className="h-60 md:h-80 object-cover rounded-lg"
            src="/gallery2.png"
            width={244}
            height={320}
            quality={100}
            alt="team"
          />
        </div>
      </div>
    </>
  );
}
