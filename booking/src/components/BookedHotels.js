import { useEffect, useState } from "react";
import Navbar from "./navbar";

function BookedHotels() {
  const [bookedHotels, setBookedHotels] = useState([]);

  useEffect(() => {
    fetch("/api/booked_hotels") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setBookedHotels(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteClick = (hotelId) => {
    fetch(`/api/booked_hotels/${hotelId}`, { method: "DELETE" }) // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        const filteredHotels = bookedHotels.filter(
          (hotel) => hotel.id !== hotelId
        );
        setBookedHotels(filteredHotels);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <h1 className="mt-20 text-xl ml-10 cursor-context-menu ">
        Booked Hotels
      </h1>
      {bookedHotels.map((hotel) => (
        <div key={hotel.id} className="bg-white mt-9 rounded-lg shadow-lg">
          <img
            className="w-full h-64 rounded-t-lg object-cover"
            src={hotel.image}
            alt={hotel.name}
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium">{hotel.name}</h4>
              <button
                className="bg-red-500 text-white font-medium px-4 py-2 rounded-full"
                onClick={() => handleDeleteClick(hotel.id)}
              >
                Delete
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              ⭐ {hotel.rating} {hotel.hotelClass}
            </p>
            <p className="text-gray-600 text-sm mt-2">{hotel.description}</p>
            <p className="text-gray-600 text-sm mt-2">{hotel.additional}</p>
            <p className="text-lg font-medium mt-4">
              <b>{hotel.price}</b> / night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookedHotels;
