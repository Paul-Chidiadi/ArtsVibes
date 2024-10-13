import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div
        id="top"
        className="relative w-full px-8 py-7 md:px-20 md:py-28 mt-12"
      >
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Bridging the Gaps
        </h1>

        <h4 className="w-full font-lato font-bold text-xl md:text-4xl text-black text-center mt-10">
          ABRAHAM GAM LUCAS
        </h4>

        <p className="w-full font-lato font-medium text-lg text-black text-left mt-10">
          These differences differ to no understanding of it <br></br> Fear
          clothes these gaps <br></br> So we attack these misunderstanding from
          the position<br></br> of defence<br></br> Seeing ourselves through the
          mirrow of conflict<br></br> Peace between these gaps feels like taking
          poison<br></br> Our today can curse our tomorrow or cause reverence
          <br></br> for the past and future <br></br> Religion, race and
          ethnicity confine us to be who they<br></br>
          want us to be <br></br> But this bridge frees us <br></br> Not all
          bridges are bridging the gaps <br></br> Some bridges are burnt to
          bridge the gap<br></br> Because the foundation of such bridges are
          debilitated
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
          src="/avatar.png"
          width={250}
          height={250}
          quality={100}
          alt="user"
        />
      </div>
    </>
  );
}
