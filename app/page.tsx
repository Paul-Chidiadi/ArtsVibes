import Image from "next/image";
import Swiper from "../components/swiper";

export default function Home() {
  return (
    <>
      {/* UPCOMING EVENTS */}
      <div
        id="top"
        className="w-full bg-notify px-8 py-8 md:py-8 md:px-20 mt-12"
      >
        <div className="w-full flex flex-col justify-start gap-10 lg:flex-row lg:justify-center lg:items-center">
          <div className="flex-1">
            <Swiper />
          </div>

          <div className="flex-1">
            <h1 className="font-lato font-bold text-black text-xl md:text-3xl">
              {/* <i className="bx bxs-bell bx-tada text-3xl md:text-5xl font-bold text-footer"></i> */}
              {"  "}
              Labari Prize for Poetry 2024
            </h1>

            <p className="w-full font-lato text-base md:text-xl text-black italic mt-5">
              <span className="font-semibold">"Mindscapes of the North"</span>{" "}
              invites us to reveal the complex layers of thoughts, emotions, and
              lived experiences of Arewa. It encourages poets to explore the
              collective cultural identity shaped by shared beliefs,
              experiences, and ideologies.
            </p>
            <a
              href="/labari"
              className="flex w-fit mt-5 items-center justify-center bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-base cursor-pointer hover:text-faintBlack"
            >
              VIEW SHORTLISTED ENTRIES
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[url('/Rectangle 117.png')] bg-secondary bg-no-repeat bg-contain bg-center h-fit w-full flex flex-col hsp:flex-row justify-center items-center px-8 py-28 md:py-28 md:px-20 gap-10">
        <div className="w-full hsp:w-1/2 flex flex-col justify-start items-start">
          <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark">
            WE EMPOWER
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

          <div className="w-fit flex flex-col md:flex-row items-start md:items-center justify-start gap-4 mt-6">
            <a
              href="/about"
              className="flex flex-row items-center justify-center gap-2 md:gap-5 bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-base md:text-lg cursor-pointer hover:text-faintBlack"
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
              href="https://youtube.com/@theartsandvibes?si=p5qkCsp84L5hXqV6"
              className="flex flex-row items-center justify-center gap-2 md:gap-5 bg-white px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-base md:text-lg cursor-pointer hover:text-faintBlack"
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

        <div className="hidden mt-6 md:mt-0 lg:grid grid-cols-2 gap-2">
          <Image
            className="w-72 h-64 object-cover rounded-lg"
            src="/heroimage4.JPG"
            width={200}
            height={100}
            quality={100}
            alt="team"
          />
          <Image
            className="w-72 h-64 object-cover rounded-lg"
            src="/heroimage5.JPG"
            width={200}
            height={100}
            quality={100}
            alt="team"
          />
          <Image
            className="w-72 h-64 object-cover rounded-lg"
            src="/heroimage6.JPG"
            width={200}
            height={100}
            quality={100}
            alt="team"
          />
          <Image
            className="w-72 h-64 object-cover rounded-lg"
            src="/heroimage8.JPG"
            width={200}
            height={100}
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

      <h1 className="w-full flex justify-center items-center text-center text-black font-gothic gap-2 mt-10 md:mt-40">
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

      <div className="h-fit w-full flex flex-col hsp:flex-row justify-start items-center px-8 py-10 md:py-28 hsp:py-7 md:px-20">
        <div className="w-full hsp:w-1/2 flex flex-col justify-start items-start">
          <h1 className="w-fit bg-primary px-4 py-1 rounded-lg font-gothic font-medium text-black text-lg shadow-custom-dark mt-3 md:mt-11">
            Who we are?
          </h1>

          <p className="w-full font-lato text-base md:text-2xl text-black mt-11">
            Arts & Vibes was founded in 2021, with a goal of bringing writers
            and poets together to share, exchange and build community. Now, Arts
            & Vibes has grown into a platform that is home to arts of many
            disciplines, including visual and performing arts, with workshop and
            initiatives that can further empower the artists and youth in
            northern Nigeria and beyond.
          </p>
        </div>

        <div className="hidden hsp:w-1/2 md:flex md:w-full justify-center items-start py-12">
          <Image
            className="w-4/5"
            src="/Group 34700.png"
            width={138}
            height={137}
            quality={100}
            alt="team"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-5 px-8 py-8 md:py-20 md:px-20">
        <Image
          className="w-7 h-auto md:w-11"
          src="/Frame 38562.png"
          width={44}
          height={25}
          quality={100}
          alt="line"
        />
        <p className="font-lato text-black text-base w-full md:w-2/5">
          So come and discover the art of vibing with us, and let us help you
          create a home that’s truly inspiring.{" "}
        </p>
      </div>

      <div className="w-full flex items-center justify-start py-12">
        <Image
          className="w-0 md:w-96"
          src="/Line 35.png"
          width={250}
          height={100}
          quality={100}
          alt="line-image"
        />
      </div>

      <div className="bg-[url('/Rectangle 118.png')] bg-white bg-no-repeat bg-contain bg-center h-fit w-full px-8 py-8 md:py-28 md:px-20">
        <div className="w-full flex items-center justify-end">
          <Image
            className="w-0 md:w-96 -mr-20 -mb-24"
            src="/Line 36.png"
            width={250}
            height={100}
            quality={100}
            alt="line-image"
          />
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
            EVENTS
          </span>
        </h1>
        <p className="font-lato text-black text-base w-full text-center">
          To participate you need to register for the event
        </p>

        <div className="flex flex-wrap gap-6 w-full justify-evenly items-start py-12 mt-8 md:mt-10">
          <Image
            className="flex-1 rounded-2xl"
            src="/image 68-2.png"
            width={335}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className="flex-1 rounded-2xl"
            src="/image 68.png"
            width={335}
            height={150}
            quality={100}
            alt="team"
          />
          <Image
            className="flex-1 rounded-2xl"
            src="/image 68-1.png"
            width={335}
            height={150}
            quality={100}
            alt="team"
          />
        </div>
      </div>

      {/* BRANDS */}
      <div className="flex flex-wrap gap-6 w-full justify-evenly items-start mt-8 md:mt-10 px-8 py-8 md:py-12 md:px-20">
        <Image
          className="flex-1"
          src="/Clean tech-3.png"
          width={335}
          height={150}
          quality={100}
          alt="brands"
        />
        <Image
          className="flex-1"
          src="/image 25.png"
          width={335}
          height={150}
          quality={100}
          alt="brands"
        />
        <Image
          className="flex-1"
          src="/Clean tech-1.png"
          width={335}
          height={150}
          quality={100}
          alt="brands"
        />
        <Image
          className="flex-1"
          src="/Clean tech-2.png"
          width={335}
          height={150}
          quality={100}
          alt="brands"
        />
      </div>

      <div className="w-full px-8 py-5 md:px-20">
        <h1 className="relative w-full text-3xl md:py-4 font-gothic md:text-5xl lg:text-8xl text-black text-center">
          WE CREATE
          <Image
            className="absolute hidden md:block bottom-0 w-1/5 md:w-1/3 md:-bottom-3 right-1/4"
            src="/Line 39.png"
            width={250}
            height={100}
            quality={100}
            alt="line-image"
          />
        </h1>
        <h1 className="relative w-full text-3xl md:py-4 font-gothic md:text-5xl lg:text-8xl text-black text-center">
          THEREFORE WE ART
          <Image
            className="absolute hidden md:block bottom-0 w-1/5 md:w-1/3 md:-bottom-3 right-1/4"
            src="/Line 39.png"
            width={250}
            height={100}
            quality={100}
            alt="line-image"
          />
        </h1>
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
