import { Link } from "react-router-dom";
import { places } from "../../constants/options";

function Hero() {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-56 gap-9">
      <h1 className="font-extrabold text-[30px] md:text-[40px] text-center mt-10 md:mt-16">
        <span className="text-[#f56551] text-[36px] md:text-[50px]">
          From Dreams to Destinations:
        </span>{" "}
        <br /> AI Creates Your Ideal Journey
      </h1>
      <p className="text-base md:text-xl text-center text-gray-500">
        From dream destinations to custom-crafted experiences, we design travel
        that matches your style. <br className="hidden md:block" />
        Your next adventure starts here with tailored itineraries!
      </p>

      <Link to={"/create-trip"} className="mt-5 md:mt-10">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center"
        >
          Get Started
        </button>
      </Link>

      <div className="w-full">
        <h1 className="font-bold text-[18px] md:text-[22px] mt-10 md:mt-16 text-center md:text-left">
          Top Must-Visit Iconic Destinations Around the World:
        </h1>
        <div className="overflow-hidden pb-10 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {places.map((place, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl hover:shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg md:text-xl">{place.name}</h3>
                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
