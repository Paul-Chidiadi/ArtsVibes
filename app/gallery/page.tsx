"use client";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  //GALLERY 1.0
  const imageOne = [
    "DSCF6836.jpg",
    "DSCF6837.jpg",
    "DSCF6845.jpg",
    "DSCF6846.jpg",
    "DSCF6847.jpg",
    "DSCF6848.jpg",
    "DSCF6850.jpg",
    "DSCF6852.jpg",
    "DSCF6858.jpg",
    "DSCF6865.jpg",
    "DSCF6867.jpg",
    "DSCF6868.jpg",
    "DSCF6869.jpg",
    "DSCF6871.jpg",
    "DSCF6875.jpg",
    "DSCF6876.jpg",
    "DSCF6879.jpg",
    "DSCF6901.jpg",
    "DSCF6906.jpg",
    "DSCF6907.jpg",
    "DSCF6908.jpg",
    "DSCF6909.jpg",
    "DSCF6914.jpg",
    "DSCF6916.jpg",
    "DSCF6917.jpg",
    "DSCF6919.jpg",
    "DSCF6921.jpg",
    "DSCF6926.jpg",
    "DSCF6927.jpg",
    "DSCF6928.jpg",
    "DSCF6929.jpg",
    "DSCF6931.jpg",
    "DSCF6936.jpg",
    "DSCF6957.jpg",
    "DSCF6762.jpg",
    "DSCF6764.jpg",
    "DSCF6771.jpg",
    "DSCF6772.jpg",
    "DSCF6774.jpg",
    "DSCF6775.jpg",
    "DSCF6776.jpg",
    "DSCF6786.jpg",
    "DSCF6787.jpg",
    "DSCF6788.jpg",
    "DSCF6789.jpg",
    "DSCF6791.jpg",
    "DSCF6803.jpg",
    "DSCF6804.jpg",
    "DSCF6805.jpg",
    "DSCF6807.jpg",
    "DSCF6809.jpg",
    "DSCF6814.jpg",
    "DSCF6819.jpg",
    "DSCF6820.jpg",
    "DSCF6824.jpg",
    "DSCF6827.jpg",
    "DSCF6829.jpg",
    "DSCF6831.jpg",
    "DSCF6832.jpg",
    "DSCF6833.jpg",
    "DSCF6834.jpg",
  ];
  const galleryOne = imageOne.map((name) => ({
    original: `/gallery/${name}`,
    thumbnail: `/gallery/${name}`,
  }));

  //GALLERY 2.0
  const imageTwo = [
    "Arts & Vibes-12.jpg",
    "Arts & Vibes-91.jpg",
    "Arts & Vibes-119.jpg",
    "Arts & Vibes-126.jpg",
    "Arts & Vibes-152.jpg",
    "Arts & Vibes-169.jpg",
    "Arts & Vibes-228.jpg",
    "DSCF6762.jpg",
    "DSCF6771.jpg",
    "DSCF6789.jpg",
    "DSCF6803.jpg",
    "DSCF6814.jpg",
    "DSCF6837.jpg",
    "DSCF6847.jpg",
    "DSCF6936.jpg",
  ];
  const galleryTwo = imageTwo.map((name) => ({
    original: `/gallery2/${name}`,
    thumbnail: `/gallery2/${name}`,
  }));

  //GALLERY 3.0
  const imageThree = [
    "_DSF5356.jpg",
    "_DSF5386.jpg",
    "_DSF5656.jpg",
    "_DSF5699.jpg",
    "_DSF5701.jpg",
    "_DSF5724.jpg",
    "Arts & Vibes-230.jpg",
    "Arts & Vibes-247.jpg",
    "Arts & Vibes-249.jpg",
    "Arts & Vibes-255.jpg",
    "Arts & Vibes-272.jpg",
    "Arts & Vibes-276.jpg",
    "Arts & Vibes-285.jpg",
    "Arts & Vibes-296.jpg",
    "IMG_8811.jpg",
    "IMG_8813.jpg",
    "IMG_8830.jpg",
    "IMG_8845.jpg",
    "IMG_8846.jpg",
    "untitled-23.jpg",
    "untitled-25.jpg",
    "untitled-39.jpg",
    "untitled-43.jpg",
    "untitled-134.jpg",
    "untitled-301.jpg",
    "untitled-304.jpg",
    "untitled-306.jpg",
    "untitled-363.jpg",
    "untitled-371.jpg",
    "untitled-380.jpg",
    "untitled-395.jpg",
    "untitled-451.jpg",
    "untitled-463.jpg",
    "untitled-471.jpg",
    "untitled-479.jpg",
    "untitled-501.jpg",
    "untitled-508.jpg",
    "untitled-513.jpg",
  ];
  const galleryThree = imageThree.map((name) => ({
    original: `/gallery3/${name}`,
    thumbnail: `/gallery3/${name}`,
  }));

  return (
    <>
      <div
        id="top"
        className="w-full mt-0 md:mt-20 mb-20 px-8 py-28 md:py-28 md:px-20"
      >
        <h1 className="w-fit py-4 font-gothic text-2xl md:text-5xl text-black text-left mb-8">
          Bridging Gaps 2023
        </h1>
        <ImageGallery items={galleryThree} />

        <h1 className="w-fit py-4 font-gothic text-2xl md:text-5xl text-black text-left mb-8 mt-10">
          Introspection 2022
        </h1>
        <ImageGallery items={galleryTwo} />

        <h1 className="w-fit py-4 font-gothic text-2xl md:text-5xl text-black text-left mb-8 mt-10">
          Inception 2021
        </h1>
        <ImageGallery items={galleryOne} />
      </div>
    </>
  );
}
