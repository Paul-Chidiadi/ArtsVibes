import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div
        id="top"
        className="relative w-full px-8 py-7 md:px-20 md:py-28 mt-12"
      >
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Let's Make Magic together
        </h1>

        <h4 className="w-full font-lato font-bold text-xl md:text-4xl text-black text-center mt-10">
          EZINNE IGBOKWE
        </h4>

        <p className="w-full font-lato font-medium text-lg text-black text-left mt-10">
          The thin line between love and hate pitched <br></br> Its tent in your
          eyes on the day the phoenix <br></br> Broke its wings and fell from
          the clouds, lying<br></br>
          Just two metres from the barricades of your heart. <br></br> I
          remember you crushing little rocks against your <br></br> Shadowed
          cave of a body in a bid to exonerate your <br></br> Conscience from
          the flames of a mass of dancing fire. <br></br> My mother used to tell
          me that hatred is no friend of <br></br>
          Any man. Now I not only immerse myself in the ice lakes <br></br> Of
          the territory, I also steal some warmth from the fireplace; <br></br>{" "}
          I not only enjoy the swish and swoops of the tingling air, I also{" "}
          <br></br> Communicate with the ancient pillars of the earth. These
          four <br></br> Elements altogether no longer bear grudges with one
          another in <br></br> My world, just like the way the words from my
          poetry hug and <br></br> Stick to the corners of your smile. I was the
          art in all your science <br></br> Projects. Our worlds liased and we
          were ready to make magic together
        </p>

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

        <Image
          className="hidden absolute md:block bottom-3 right-3"
          src="/Frame 38552.png"
          width={300}
          height={300}
          quality={100}
          alt="user"
        />
      </div>
    </>
  );
}
