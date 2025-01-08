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

  // Handle when suggestions are fetched
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    fetchPlaces(value);
  };

  // Handle clearing the suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  // Handle input change
  const onChange = (
    _event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setPlace(newValue);
  };

  // Define input props for Autosuggest component
  const inputProps = {
    placeholder: "Search a place for your trip",
    value: place,
    onChange,
  };

  // Render each suggestion in the list
  interface Suggestion {
    display_name: string;
  }

  const renderSuggestion = (suggestion: Suggestion) => {
    return <div>{suggestion.display_name}</div>;
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice ?
          </h2>

          <Autosuggest
            suggestions={suggestionsList}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={(suggestion) => suggestion.display_name} // Use display_name for showing full address
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={{
              input:
                "flex h-9 w-full shadow-md border border-gray-300 px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              suggestionsContainerOpen:
                "border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto bg-white",
              suggestion: "p-2 text-sm text-gray-500 hover:bg-gray-200",
              suggestionHighlighted: "bg-blue-100",
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip ?
          </h2>
          <Input
            className="shadow-md border border-gray-300"
            placeholder={"Ex. 3"}
            type="number"
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end py-10">
          <Button className="text-white bg-black hover:text-black hover:bg-white font-bold rounded-[5px]">Genrate Trip</Button>
        </div>

      </div>
    </div>
  );
}

export default CreateTrip;
