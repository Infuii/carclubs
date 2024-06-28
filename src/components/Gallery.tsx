// import { useState, useEffect, useRef } from "react";

// const images = ["car1.JPG", "car2.jpg", "car3.jpeg", "car4.jpeg", "car5.jpeg"];

const Gallery = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const intervalRef = useRef<null>(null);
  // const time = 3000;

  // const clearExistingInterval = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //   }
  // };

  // const handleClickLeft = () => {
  //   clearExistingInterval();
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  // const handleClickRight = () => {
  //   clearExistingInterval();
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // useEffect(() => {
  //   (intervalRef.current as unknown) = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, time);
  //   return () => clearExistingInterval();
  // }, [currentIndex]);

  // useEffect(() => {
  //   clearExistingInterval();
  //   (intervalRef.current as unknown) = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, time);
  // }, [currentIndex]);

  return (
    // <div
    //   id="gallery"
    //   className="relative w-full max-w-7xl mx-auto overflow-hidden"
    // >
    //   <div
    //     className="flex transition-transform duration-1000 ease-in-out"
    //     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //   >
    //     {images.map((image, index) => (
    //       <div key={index} className="w-full flex-shrink-0">
    //         <img
    //           src={image}
    //           alt={`Carousel ${index}`}
    //           className="w-full h-64 sm:h-96 object-cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="absolute inset-0 flex items-center justify-between px-4">
    //     <button
    //       onClick={() => handleClickLeft()}
    //       className="p-2 bg-black bg-opacity-50 text-white rounded-full"
    //     >
    //       &#10094;
    //     </button>
    //     <button
    //       onClick={() => handleClickRight()}
    //       className="p-2 bg-black bg-opacity-50 text-white rounded-full"
    //     >
    //       &#10095;
    //     </button>
    //   </div>
    // </div>
    <div
      className="flex justify-center items-center w-full bg-white opacity-100 p-4"
      id="gallery"
    >
      <button className="relative group bg-white outline-none border-0 active:border-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img
          src="galleryPhoto.png"
          alt="Gallery"
          className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-active:border-0"
        />
      </button>
    </div>
  );
};

export default Gallery;
