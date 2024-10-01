import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <h1 className="text-primary md:text-lg lg:text-9xl text-center w-full font-normal font-gothic mb-4 pb-3 relative z-10">
          About Us
        </h1>
        <p className="text-white md:text-lg lg:text-2xl text-center w-5/12 font-normal font-lato relative z-10">
          Fostering a dynamic community that celebrates diversity, innovation,
          and the transformative power of the arts in northern Nigeria and
          beyond
        </p>
      </div>

      <div className="flex w-full py-10 items-center justify-center gap-24 border-b border-gray-400">
        <a>
          <Image
            className="cursor-pointer"
            src="/instagram.png"
            width={45}
            height={45}
            quality={100}
            alt="instagram"
          />
        </a>
        <a>
          <Image
            className="cursor-pointer"
            src="/twitter.png"
            width={45}
            height={45}
            quality={100}
            alt="twitter"
          />
        </a>
      </div>

      <div className="w-full px-8 py-32 md:px-20">
        <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark">
          About Us
        </h1>

        <p className=" w-full font-lato text-xl textr-black italic mt-12">
          ARTS & VIBES is a platform that brings a host of multidisciplinary
          artists in the northern part of Nigeria together, bridging gaps and
          ensuring a space for the next generation of artists to explore, earn,
          and find their own rhythm through collaboration and experimentation.
          The idea that is Arts & Vibes was inspired by Kaduna, a state in the
          northern part of Nigeria, which is known for the commercialization of
          its budding artistic and literary scene.
        </p>

        <p className=" w-full font-lato text-xl textr-black italic mt-12">
          Hence, Art is a prominent thing for stripping people of their inherent
          social labels and offering true unification, in spite of class,
          status, and tribe. Our goal is to build an identity around publicizing
          the excellence of Northern Arts and Culture both in Nigeria and the
          world at Large.
        </p>
      </div>

      <div className="w-full px-8 py-5 md:px-20">
        <h1 className="w-full p-4 font-gothic text-8xl text-black text-center">
          MEET THE TEAM
        </h1>

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

      <div className="w-full flex items-start justify-end py-10 pr-24">
        <a href="#top">
          <Image
            className="cursor-pointer"
            src="/Frame 179.png"
            width={60}
            height={60}
            quality={100}
            alt="top-image"
          />
        </a>
      </div>
    </>
  );
}
