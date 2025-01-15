export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A Solo Traveler on a journey",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵",
    people: "6 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Economy",
    desc: "Budget Friendly",
    icon: "💵",
  },
  {
    id: 2,
    title: "Standard",
    desc: "Moderate Budget",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "High End Experience",
    icon: "💸",
  },
];

export const places = [
  {
    id: 1,
    name: "Santorini",
    image:
      "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A picturesque Greek island known for its whitewashed buildings and stunning sunsets.",
  },
  {
    id: 2,
    name: "Great Wall of China",
    image:
      "https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A historic fortification stretching thousands of miles, showcasing ancient Chinese engineering.",
  },
  {
    id: 3,
    name: "Machu Picchu",
    image:
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A breathtaking Incan citadel located high in the Andes Mountains of Peru.",
  },
  {
    id: 4,
    name: "Grand Canyon",
    image:
      "https://images.pexels.com/photos/569202/pexels-photo-569202.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A vast natural wonder in Arizona, USA, carved by the Colorado River over millions of years.",
  },
  {
    id: 5,
    name: "Sydney Opera House",
    image:
      "https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A world-renowned architectural masterpiece located in Sydney, Australia.",
  },
  {
    id: 6,
    name: "Taj Mahal",
    image:
      "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A UNESCO World Heritage Site in India, celebrated for its stunning marble architecture.",
  },
  {
    id: 7,
    name: "Eiffel Tower",
    image:
      "https://images.pexels.com/photos/1060791/pexels-photo-1060791.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "An iconic symbol of Paris, France, known for its stunning architecture and panoramic views.",
  },
  {
    id: 8,
    name: "Niagara Falls",
    image:
      "https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A group of massive waterfalls located on the border of Ontario, Canada, and New York, USA.",
  },
  {
    id: 9,
    name: "Mount Fuji",
    image:
      "https://images.pexels.com/photos/2451043/pexels-photo-2451043.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Japan's iconic volcano, a popular destination for hikers and photographers alike.",
  },
  {
    id: 10,
    name: "Pyramids of Giza",
    image:
      "https://images.pexels.com/photos/2445852/pexels-photo-2445852.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Ancient Egyptian pyramids that are among the Seven Wonders of the Ancient World.",
  },
  {
    id: 11,
    name: "Venice",
    image:
      "https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A romantic city in Italy known for its canals, gondolas, and historic architecture.",
  },
  {
    id: 12,
    name: "Banff National Park",
    image:
      "https://images.pexels.com/photos/30053844/pexels-photo-30053844/free-photo-of-winter-landscape-of-banff-gondola-area.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Canada's oldest national park, featuring stunning mountain landscapes and turquoise lakes.",
  },
];

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
