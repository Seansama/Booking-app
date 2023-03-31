import React, { useState, useEffect } from "react";
import MapPage from "./MapPage";


function HomePage() {
 const [hotels, setHotels] = useState([]);


 useEffect(() => {
   fetch("https://api.jsonbin.io/v3/b/6421a4c8ace6f33a22fe2d30")
     .then((response) => response.json())
     .then((data) => setHotels(data.record.hotels))
     .catch((error) => console.error(error));
 }, []);


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
    <div className="bg-white rounded-lg shadow-lg">
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
<div
  className="container mx-1   py-10 flex"

>
  <div
    className="w-full md:w-3/4 lg:w-3/4 flex-1 flex-grow"
    style={{ marginRight: "26%" }}
  >
    <div className="flex flex-wrap ">
      {hotels.map((hotel, index) => (
        <div key={index} className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
          <Card hotel={hotel} />
        </div>
      ))}
    </div>
  </div>
     <div className="fixed top-11 right-72 h-screen w-1/4">
       {/* your map component goes here */}
       <MapPage />
     </div>
   </div>
 );
}


export default HomePage;

