import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="w-full h-fit flex justify-between items-center gap-9 px-8 py-8 md:py-8 md:px-20 mt-40">
        <div className="flex-1 gap-8">
          <h3 className="w-full py-4 font-gothic text-xl md:text-3xl text-black text-left">
            We would love to hear from you
          </h3>
          <form className="w-full flex flex-col justify-start items-start gap-5">
            <div className="w-full flex flex-col gap-3">
              <label className="font-gothic font-semibold text-left text-base text-black">
                Full name
              </label>
              <input
                className="w-full h-11 px-3 rounded-sm outline-none bg-input font-poppins font-normal text-madeinblacc text-sm"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="font-gothic font-semibold text-left text-base text-black">
                Email
              </label>
              <input
                className="w-full h-11 px-3 rounded-sm outline-none bg-input font-poppins font-normal text-madeinblacc text-sm"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="font-gothic font-semibold text-left text-base text-black">
                Contact Us
              </label>
              <input
                className="w-full h-11 px-3 rounded-sm outline-none bg-input font-poppins font-normal text-madeinblacc text-sm"
                type="+234"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="font-gothic font-semibold text-left text-base text-black">
                Your message
              </label>
              <textarea
                className="w-full h-48 px-3 rounded-sm outline-none bg-input font-poppins font-normal text-madeinblacc text-sm"
                placeholder="Enter Text here"
              ></textarea>
            </div>
            <a
              href="#"
              className="hidden lg:flex items-center justify-center bg-primary px-4 py-1 border-2 border-black rounded-lg font-lato font-medium text-black text-lg cursor-pointer hover:text-faintBlack"
            >
              Send a message
            </a>
          </form>
        </div>
        <div className="bg-[url('/_DSF5348.jpg')] bg-cover bg-center bg-no-repeat h-[520px] w-1/2 border-[20px] border-primary rounded-tl-full flex flex-col justify-center items-center gap-10 relative px-8 py-28"></div>
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
