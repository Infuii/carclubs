const Sponsors = () => {
  return (
    <div className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">
          2024 Premier Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/4 p-4">
            <img
              src="sponsor.png"
              alt="Sponsor 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/4 p-4">
            <img
              src="sponsor2.png"
              alt="Sponsor 2"
              className="w-full h-auto object-cover"
            />
          </div>{" "}
          {/* div */}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
