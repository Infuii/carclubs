const images = Array.from({ length: 40 }, (_, index) => `cars${index + 1}.jpg`);

const CarImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {images.map((src, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={src}
              alt={`Car ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-md"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImageGallery;
