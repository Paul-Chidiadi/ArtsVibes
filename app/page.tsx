import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/Rectangle 117.png')] bg-secondary bg-no-repeat bg-contain bg-center h-fit w-full flex flex-col hsp:flex-row justify-start items-center px-8 py-28 md:py-28 hsp:py-7 md:px-20">
        <div className="w-full hsp:w-1/2 flex flex-col justify-start items-start">
          <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark">
            EMPOWERING
          </h1>
          <h1 className="w-fit py-4 font-gothic text-2xl md:text-5xl text-black text-left">
            Northern Artists To Showcase Their Talent{" "}
            <span className="inline-flex">
              <Image
                // className="inline-flex"
                src="/Line 35.png"
                width={200}
                height={100}
                quality={100}
                alt="line-image"
              />
            </span>
          </h1>

          <p className="w-full font-lato text-base md:text-xl text-black mt-4">
            To create the largest community of creatives looking for an outlet
            to create, collaborate and have creative discourse that can drive
            social and behavioural change.
          </p>

          <div className="w-fit flex items-center justify-start gap-4 mt-6">
            <a
              href="/about"
              className="flex flex-row items-center justify-center gap-5 bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-lg cursor-pointer hover:text-faintBlack"
            >
              About us{" "}
              <Image
                className="w-2 h-auto md:w-3"
                src="/Vector 2.png"
                width={12}
                height={12}
                quality={100}
                alt="Arrow"
              />
            </a>
            <a
              href="#"
              className="flex flex-row items-center justify-center gap-5 bg-white px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-lg cursor-pointer hover:text-faintBlack"
            >
              <Image
                className="w-2 h-auto md:w-3"
                src="/Vector.png"
                width={12}
                height={12}
                quality={100}
                alt="Arrow"
              />
              <div>Watch video</div>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap gap-8 hsp:w-1/2 justify-evenly items-start py-12">
          <Image
            className=""
            src="/Group 34691.png"
            width={138}
            height={137}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/Group 34694.png"
            width={241}
            height={240}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/Group 34695.png"
            width={328}
            height={326}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/Group 34696.png"
            width={210}
            height={209}
            quality={100}
            alt="team"
          />
          <Image
            className=""
            src="/Group 34692.png"
            width={211}
            height={209}
            quality={100}
            alt="team"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between w-4/5 mx-auto my-12 rounded-2xl bg-white p-7">
        <div
          className="flex flex-col justify-start items-start w-fit
      h-fit gap-4"
        >
          <h1 className="font-bold font-lato text-2xl md:text-4xl lg:text-7xl text-black">
            200,000
            <span className="font-lato text-primary text-2xl md:text-4xl lg:text-7xl">
              +
            </span>
          </h1>
          <small className="text-base md:text-lg lg:text-xl font-lato font-medium text-smallColor md:pl-3">
            Social media impression
          </small>
        </div>
        <div
          className="flex flex-col justify-start items-start w-fit
      h-fit gap-4"
        >
          <h1 className="font-bold font-lato text-2xl md:text-4xl lg:text-7xl text-black">
            1000
            <span className="font-lato text-primary text-2xl md:text-4xl lg:text-7xl">
              +
            </span>
          </h1>
          <small className="text-base md:text-lg lg:text-xl font-lato font-medium text-smallColor md:pl-3">
            Attendees
          </small>
        </div>
        <div
          className="flex flex-col justify-start items-start w-fit
      h-fit gap-4"
        >
          <h1 className="font-bold font-lato text-2xl md:text-4xl lg:text-7xl text-black">
            60
            <span className="font-lato text-primary text-2xl md:text-4xl lg:text-7xl">
              +
            </span>
          </h1>
          <small className="text-base md:text-lg lg:text-xl font-lato font-medium text-smallColor md:pl-3">
            Artist
          </small>
        </div>
      </div>

      <h1 className="w-full flex justify-center items-center text-center text-black font-gothic gap-2">
        <Image
          className="w-7 h-auto md:w-11"
          src="/Frame 38562.png"
          width={44}
          height={25}
          quality={100}
          alt="line"
        />
        <span className="text-center text-black font-gothic text-2xl md:text-6xl">
          About Us
        </span>
      </h1>

      <div className="h-fit w-full flex flex-col hsp:flex-row justify-start items-center px-8 py-28 md:py-28 hsp:py-7 md:px-20">
        <div className="w-full hsp:w-1/2 flex flex-col justify-start items-start">
          <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark mt-11">
            Who we are?
          </h1>

          <p className="w-full font-lato text-base md:text-xl text-black mt-11">
            Arts & Vibes was founded in 2021, with a goal of bringing writers
            and poets together, to share, exchange and build community. Now,
            Arts & Vibes has grown to platform that gives home to arts of many
            disciplines including visual and performing with workshop and
            initiatives that can further empower the artists and youth in
            northern Nigeria and beyond.
          </p>
        </div>
      </div>
    </>
  );
}
