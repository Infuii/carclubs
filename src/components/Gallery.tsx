import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Link to="/gallery">
        <button className="relative group bg-white outline-none border-0 active:border-0">
          <img
            src="galleryPhoto.png"
            alt="Gallery"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-active:border-0"
          />
        </button>
      </Link>
    </div>
  );
};

export default Gallery;
