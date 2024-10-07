import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div id="top" className="w-full px-8 py-7 md:px-20 md:py-28 mt-12">
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Who should we blame for the rotten fruits?
        </h1>

        <h4 className="w-full font-lato font-bold text-4xl text-black text-center mt-10">
          ZAYNAB ILLIASU BOB
        </h4>

        <p className="w-full font-lato font-medium text-lg text-black text-left mt-10">
          i was never meant to say anything. <br></br> i was supposed to watch
          the fruits <br></br> grow in the garden full of snakes. <br></br> i
          was bitten today. <br></br>
          yesterday, <br></br> i took a cyborg to my country <br></br> for
          sightseeing & told him to zip <br></br> his mouth about the rotten{" "}
          <br></br> fruits. his cheeks still hold <br></br> a warning tag from
          the last visit. <br></br> at the lab, wanting to hide the scar,{" "}
          <br></br> i told the prosthetic to cover <br></br> the cyborg’s cheeks
          with my country's <br></br> coat of arm—the eagle on the top <br></br>{" "}
          & the two horses posing on both sides. <br></br> i understand little
          about dishonesty <br></br> but i know the genesis of surviving{" "}
          <br></br> in the realm of a political nightmare <br></br> is to eat
          from the rotten fruits <br></br> or embrace the holiness of silence.{" "}
          <br></br> i & the cyborg—since we arrived <br></br> my country, have
          been fasting,<br></br> abstaining from our blue-coated tongue.
          <br></br> when it was time for the cyborg <br></br> to depart home, i
          formatted his memory <br></br> because the ears between politics &
          truth <br></br> is deaf & i do not want another cyborg's chip to rust.
          <br></br> i swear, i do not want to blame my countrymen<br></br> but
          who hasn’t eaten from the garden, me?
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
      </div>
    </>
  );
}
