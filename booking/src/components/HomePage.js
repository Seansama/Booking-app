import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-11 flex items-center">
      <input
        type="text"
        placeholder="Search hotels"
        className="w-10/12 ml-6 py-2 px-4 rounded-full border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="ml-5 py-2 px-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Search
      </button>
    </form>
  );
}


function HomePage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data.record.hotels))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query) => {
    // Filter the list of hotels based on the query string
    const filteredHotels = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update the state with the filtered list of hotels
    setHotels(filteredHotels);
  };
  const Card = ({ hotel }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };

    const handleBookClick = () => {
      setIsBooked(true);
      alert(`${hotel.name} has been successfully booked`);
    };

    return (
      <div className="bg-white mt-9 rounded-lg shadow-lg">
        <img
          className="w-full h-64 rounded-t-lg object-cover"
          src={hotel.image}
          alt={hotel.name}
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">{hotel.name}</h4>
            <div className="like">
              <i
                className={`fas fa-heart${
                  isLiked ? " active text-red-500" : ""
                }`}
                onClick={handleLikeClick}
              ></i>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            ⭐ {hotel.rating} {hotel.hotelClass}
          </p>
          <p className="text-gray-600 text-sm mt-2">{hotel.description}</p>
          <p className="text-gray-600 text-sm mt-2">{hotel.additional}</p>
          <p className="text-lg font-medium mt-4">
            <b>{hotel.price}</b> / night
          </p>
          <button
            className={`mt-4 py-2 px-4 rounded-full text-white font-medium ${
              isBooked
                ? "bg-red-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={handleBookClick}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Book"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-1   py-10 flex">
      <Navbar />

      <div
        className="w-full md:w-3/4 lg:w-3/4 flex-1 flex-grow"
        style={{ marginRight: "26%" }}
      >
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-wrap ">
          {hotels.map((hotel, index) => (
            <div key={index} className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
              <Card hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed mt-7  right-72 h-screen w-1/4">
        {/* your map component goes here */}
      </div>
    </div>
  );
}

export default HomePage;
