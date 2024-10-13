import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div
        id="top"
        className="bg-[url('/gallerybg.png')] bg-cover bg-center bg-no-repeat h-fit w-full flex flex-col justify-center items-center gap-10 relative mt-0 md:mt-20 mb-20 px-8 py-28 md:py-28 md:px-20"
      ></div>
    </>
  );
}
