import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { places } from "../../constants/options";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[40px] text-center mt-16">
        <span className="text-[#f56551] text-[50px]">
          From Dreams to Destinations:
        </span>{" "}
        <br /> AI Creates Your Ideal Journey
      </h1>
      <p className="text-xl text-center text-gray-500">
        From dream destinations to custom-crafted experiences, we design travel
        that matches your style. <br /> Your next adventure starts here with tailored
        itineraries!
      </p>

      <Link to={"/create-trip"} className="mt-10">
        <Button className="text-white bg-black hover:text-black hover:bg-white font-bold rounded-[5px] transition-all duration-900 ease-in-out">
          Get Started
        </Button>
      </Link>

      <div>
        <h1 className="font-bold text-[22px] mt-16">
          Top Must-Visit Iconic Destinations Around the World:-
        </h1>
        <div className="overflow-hidden pb-20">
          <div className="grid grid-cols-3 gap-5 mt-5">
            {places.map((place, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl hover:shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl">{place.name}</h3>
                  <p className="text-gray-500 mt-2">{place.description}</p>
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
