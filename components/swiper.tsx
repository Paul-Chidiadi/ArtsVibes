"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons from react-icons

const CustomSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    // { id: 1, image: "/slider-1.jpeg" },
    { id: 2, image: "/slider-2.jpeg" },
    { id: 3, image: "/slider-3.jpeg" },
    { id: 4, image: "/slider-4.jpeg" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`relative w-full h-fit flex items-center justify-center mt-5`}
    >
      <Image
        className="w-fit"
        src={slides[currentSlide].image}
        width={250}
        height={100}
        quality={100}
        alt="line-image"
      />

      <button
        onClick={prevSlide}
        className="absolute left-5 text-primary w-fit h-fit p-2 rounded-full bg-white flex items-center justify-center"
        aria-label="Previous Slide" // Accessibility label
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 text-primary w-fit h-fit p-2 rounded-full bg-white flex items-center justify-center"
        aria-label="Next Slide" // Accessibility label
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default CustomSlider;
