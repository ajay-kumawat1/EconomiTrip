import { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { Input } from "../components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/options";
import { toast } from "sonner";
import { chatSession } from "../service/AIModel";

function CreateTrip() {
  const [place, setPlace] = useState("");
  const [suggestionsList, setSuggestionsList] = useState<Place[]>([]);

  const [formData, setFormData] = useState<FormData>({});

  interface FormData {
    [key: string]: string;
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  interface Place {
    display_name: string;
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
    handleInputChange("Location", newValue);
  };

  const inputProps = {
    placeholder: "Search a place for your trip",
    value: place,
    onChange,
  };

  const onGenerateTrip = async () => {
    if (
      (Number(formData?.Duration) > 5 && !formData?.Location) ||
      !formData?.Budget ||
      !formData?.Traveller
    ) {
      toast("Please fill all the fields");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.Location)
      .replace("{duration}", formData?.Duration)
      .replace("{budget}", formData?.Budget)
      .replace("{traveller}", formData?.Traveller)
      .replace("{totalDays}", formData?.Duration);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };

  const renderSuggestion = (suggestion: Place) => {
    return <div>{suggestion.display_name}</div>;
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-56 mt-10">
      <h1 className="font-extrabold text-[#f56551] text-center text-[36px] md:text-[40px]">
        Dream Big, Spend Small with AI Travel Plans 🗺️💸
      </h1>
      <p className="mt-3 text-gray-500 text-center text-[17px]">
        Tell us what you love, and let our planner create an unforgettable trip.
        It’s time to explore in style!
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {/* Destination */}
        <div className="relative">
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
                "absolute top-full left-0 right-0 border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto bg-white z-10",
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
            onChange={(e) => handleInputChange("Duration", e.target.value)}
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
                onClick={() => handleInputChange("Budget", item.title)}
                className={`p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition duration-300
                  ${
                    formData?.Budget === item.title
                      ? "bg-blue-100 shadow-lg"
                      : ""
                  }  
                `}
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
                onClick={() => handleInputChange("Traveller", item.people)}
                className={`p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition duration-300
                  ${
                    formData?.Traveller === item.people
                      ? "bg-blue-100 shadow-lg"
                      : ""
                  }  
                `}
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
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center"
            onClick={onGenerateTrip}
          >
            Genrate Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
