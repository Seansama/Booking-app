import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

 

function Map() {
  const apiKey = "YOUR_API_KEY";

  useEffect(() => {
    function initMap() {
      const nairobi = { lat: -1.291926, lng: 36.81923 };
      const zoom = 13;
      
      // Get the center and zoom from local storage
      const center = JSON.parse(localStorage.getItem("center"));
      const storedZoom = localStorage.getItem("zoom");
      const storedZoomLevel = storedZoom ? parseFloat(storedZoom) : zoom;

      const options = {
        zoom: storedZoomLevel,
        center: center || nairobi,
      };

      // The map, centered at Nairobi
      const map = new window.google.maps.Map(
        document.getElementById("map"),
        options
      );

      // add marker function
      const url = "https://api.jsonbin.io/v3/b/6421a4c8ace6f33a22fe2d30";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const hotels = data.record.hotels;
          hotels.forEach((hotel) => {
            addMarker(hotel, map);
          });
        });

      function addMarker(hotel, map) {
        const marker = new window.google.maps.Marker({
          position: hotel.coords,
          map: map,
        });

        // add an info window to the marker
        if (hotel.name) {
          const infowindow = new window.google.maps.InfoWindow({
            content: `
              <div class="flex items-center gap-4 p-4">
                <div class="w-24 h-24">
                  <img src="${hotel.image}" class="object-cover w-full h-full rounded-lg" alt="${hotel.name}">
                </div>
                <ul class="text-sm list-disc list-inside">
                  <li><h5 class="font-medium">${hotel.name}</h5></li>
                  <li class="text-gray-500">⭐ ${hotel.rating} ${hotel.class}</li>
                </ul>
              </div>
            `,
          });

          marker.addListener("mouseover", function () {
            infowindow.open(map, marker);
          });

          marker.addListener("mouseout", function () {
            infowindow.close();
          });
        }
      }
      
      // Save the map center and zoom to local storage
      // google.maps.event.addListener(map, "center_changed", function () {
      //   localStorage.setItem("center", JSON.stringify(map.getCenter()));
      // });

      // google.maps.event.addListener(map, "zoom_changed", function () {
      //   localStorage.setItem("zoom", map.getZoom().toString());
      // });
    }

    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&v=weekly`;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, [apiKey]);

  return <div id="map" style={{ height: "900px", width:"758px" }}></div>;
}


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
<div
  className="container mx-1   py-10 flex"

>
  <Navbar />
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
     <div className="fixed mt-7  right-72 h-screen w-1/4">
       {/* your map component goes here */}
       <Map />
     </div>
   </div>
 );
}


export default HomePage;