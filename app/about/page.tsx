import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <h1 className="text-primary text-5xl md:text-8xl lg:text-9xl text-center w-full font-normal font-gothic mb-4 pb-3 relative z-10">
          About Us
        </h1>
        <p className="text-white text-xl px-5 md:text-2xl text-center w-full lg:w-5/12 font-normal font-lato relative z-10">
          Fostering a dynamic community that celebrates diversity, innovation,
          and the transformative power of the arts in northern Nigeria and
          beyond
        </p>
      </div>

      <div className="flex w-full py-10 items-center justify-center gap-7 md:gap-24 border-b border-gray-400">
        <a>
          <Image
            className="cursor-pointer w-8 md:w-11"
            src="/instagram.png"
            width={45}
            height={45}
            quality={100}
            alt="instagram"
          />
        </a>
        <a>
          <Image
            className="cursor-pointer w-8 md:w-11"
            src="/twitter.png"
            width={45}
            height={45}
            quality={100}
            alt="twitter"
          />
        </a>
      </div>

      <div className="w-full px-8 py-12 md:py-20 md:px-20">
        <div className="w-full flex items-center justify-end py-12">
          <Image
            className="w-0 md:w-80 -mr-20"
            src="/Line 36.png"
            width={250}
            height={100}
            quality={100}
            alt="line-image"
          />
        </div>

        <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark">
          About Us
        </h1>

        <p className="w-full font-lato text-base md:text-xl text-black italic mt-12">
          ARTS & VIBES is a platform that brings a host of multidisciplinary
          artists in the northern part of Nigeria together, bridging gaps and
          ensuring a space for the next generation of artists to explore, earn,
          and find their own rhythm through collaboration and experimentation.
          The idea that is Arts & Vibes was inspired by Kaduna, a state in the
          northern part of Nigeria, which is known for the commercialization of
          its budding artistic and literary scene.
        </p>

        <p className=" w-full font-lato text-base md:text-xl text-black italic mt-12">
          Hence, Art is a prominent thing for stripping people of their inherent
          social labels and offering true unification, in spite of class,
          status, and tribe. Our goal is to build an identity around publicizing
          the excellence of Northern Arts and Culture both in Nigeria and the
          world at Large.
        </p>

        <div className="w-full flex items-center justify-start py-12">
          <Image
            className="w-0 md:w-80 -ml-20"
            src="/Line 35.png"
            width={250}
            height={100}
            quality={100}
            alt="line-image"
          />
        </div>
      </div>

      <div className="w-full px-8 py-5 md:px-20">
        <h1 className="w-full p-4 font-gothic text-5xl md:text-8xl text-black text-center">
          MEET THE TEAM
        </h1>

        <div className="w-full flex items-center justify-end py-12">
          <Image
            className="w-0 md:w-80 -mr-20"
            src="/Line 35.png"
            width={350}
            height={100}
            quality={100}
            alt="line-image"
          />
        </div>

        <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
          <Image
            className=""
            src="/HAMID-1.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-2.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-3.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-4.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-5.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-6.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-7.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-8.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID-9.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/HAMID.png"
            width={250}
            height={150}
            quality={100}
            alt="team"
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
