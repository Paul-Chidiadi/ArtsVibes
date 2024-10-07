import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div id="top" className="w-full px-8 py-7 md:px-20 md:py-28 mt-12">
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          The Resilient Symphony of Us
        </h1>

        <h4 className="w-full font-lato font-bold text-xl md:text-4xl text-black text-center mt-10">
          Deborah Usidamen
        </h4>

        <p className="w-full font-lato font-medium text-lg text-black text-left mt-10">
          This is the realm where our souls dance in rhythm to the beat of our
          hearts <br></br> - the inbetween; where expression transverse the
          great divide.<br></br>
          Here, we reach to the sky <br></br> drawing from its unending canvass,
          <br></br> a fabric of hope that is tangible.<br></br> We transcend the
          archaic barriers of the past as it crumbles<br></br> until all that is
          left standing are our bodies and art, small survivors of this
          revolution,<br></br> equal, unbroken and even made whole.<br></br>
          <br></br>
          These waters have swirled for long <br></br> We have listened to its
          agony.<br></br> This is a language we understand,<br></br> one that
          enables us come they way we are,<br></br>
          erasing the chasm of difference <br></br>we become one. <br></br>
          <br></br> With art as mortar, we bridge this gaping hole <br></br>{" "}
          Gently,<br></br> we build a future for our selves and the ones who
          will come before us.
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
