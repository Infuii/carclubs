import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div
      className="flex justify-center items-center py-10 bg-white"
      id="gallery"
    >
      <Link to="/gallery">
        <button className="relative group bg-white outline-none border-0 active:border-0 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <img
            src="galleryPhoto.png"
            alt="Gallery"
            className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-active:border-0"
          />
        </button>
      </Link>
    </div>
  );
};

export default Gallery;
