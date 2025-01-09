import { useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { Input } from "../components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from "../constants/options";
import { Button } from "../components/ui/button";

function CreateTrip() {
  const [place, setPlace] = useState("");
  const [suggestionsList, setSuggestionsList] = useState<Place[]>([]);

  // Fetch suggestions from OpenStreetMap Nominatim API
  interface Place {
    display_name: string;
    // Add other relevant fields if needed
  }

  const fetchPlaces = async (query: string): Promise<void> => {
    try {
      if (query.length < 3) {
        setSuggestionsList([]); // Don't search for places if the query is too short
        return;
      }
      const response = await axios.get<Place[]>(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
      );
      setSuggestionsList(response.data);
    } catch (error) {
      console.error("Error fetching places", error);
    }
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    fetchPlaces(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const onChange = (
    _event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setPlace(newValue);
  };

  const inputProps = {
    placeholder: "Search a place for your trip",
    value: place,
    onChange,
  };

  interface Suggestion {
    display_name: string;
  }

  const renderSuggestion = (suggestion: Suggestion) => {
    return <div>{suggestion.display_name}</div>;
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-56 mt-10">
      <h2 className="font-bold text-2xl sm:text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-lg sm:text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {/* Destination */}
        <div>
          <h2 className="text-lg sm:text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <Autosuggest
            suggestions={suggestionsList}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={(suggestion) => suggestion.display_name}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={{
              input:
                "flex h-10 w-full shadow-md border border-gray-300 px-3 py-2 transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 md:text-sm rounded",
              suggestionsContainerOpen:
                "border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto bg-white",
              suggestion: "p-2 text-sm text-gray-500 hover:bg-gray-200",
              suggestionHighlighted: "bg-gray-100",
            }}
          />
        </div>

        {/* Trip Duration */}
        <div>
          <h2 className="text-lg sm:text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            className="shadow-md border border-gray-300 w-full px-3 py-2 rounded"
            placeholder="Ex. 3"
            type="number"
          />
        </div>

        {/* Budget Options */}
        <div>
          <h2 className="text-lg sm:text-xl my-3 font-medium">
            What is your budget?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition duration-300"
              >
                <h2 className="text-3xl sm:text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-md sm:text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Companions */}
        <div>
          <h2 className="text-lg sm:text-xl my-3 font-medium">
            Who do you plan on traveling with?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition duration-300"
              >
                <h2 className="text-3xl sm:text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-md sm:text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Trip Button */}
        <div className="flex justify-center sm:justify-end py-10">
          <Button className="text-white bg-black hover:text-black hover:bg-white font-bold rounded-md transition duration-300">
            Generate Trip
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
