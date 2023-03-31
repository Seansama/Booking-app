import React, { useEffect } from "react";

function MapPage() {
  const apiKey = "AIzaSyCB0vxEzRh1X22DFnwYo1aZqo0GpRrZ0rw";

  useEffect(() => {
    function initMap() {
      // The location of Nairobi
      const options = {
        zoom: 13,
        center: { lat: -1.291926, lng: 36.81923 },
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

export default MapPage;
