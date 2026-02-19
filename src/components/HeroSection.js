import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { column1, column2, column3 } from "../data/images";

/* Fix default marker icon issue */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const defaultPosition = [12.9105, 77.5857];

const HeroSection = () => {
  const [location, setLocation] = useState(
    "JP Nagar 7th Phase, Bengaluru"
  );
  const [searchText, setSearchText] = useState("");
  const [markerPosition, setMarkerPosition] = useState(defaultPosition);

  /* Handle Map Click */
  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        if (data.display_name) {
          setLocation(data.display_name);
        }
      },
    });

    return <Marker position={markerPosition} />;
  }

  /* Handle Search */
  const handleSearch = async () => {
    if (!searchText) return;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchText}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      setMarkerPosition([lat, lon]);
      setLocation(data[0].display_name);
    }
  };


  return (
 
  <div className="min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-16 flex items-center">

  <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">

    {/* <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8"> */}


    {/* ================= LEFT ================= */}
    <div className="bg-[#E9EEF3] rounded-3xl p-6 relative overflow-hidden 
                    w-full lg:w-1/2">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="flex flex-col gap-3">
          {column1.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-2xl object-cover w-full h-40"
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {column2.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-2xl object-cover w-full h-52"
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {column3.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-2xl object-cover w-full h-36"
            />
          ))}
        </div>

      </div>

      {/* Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-48 
                      bg-gradient-to-t from-[#E9EEF3] via-[#E9EEF3]/90 
                      via-[#E9EEF3]/70 to-transparent 
                      rounded-b-3xl" />

      {/* Text */}
      <div className="absolute bottom-0 left-6 right-6 pb-6">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-snug">
          Land to Logistics <br />
          India’s Platform for Land, Industrial, and Logistics Real Estate
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Search | Select | Connect
        </p>
      </div>

    </div>

    {/* ================= RIGHT ================= */}
    <div className="bg-white rounded-3xl shadow-lg p-6 
                    w-full sm:w-[400px] lg:w-[420px]">

      <MapContainer
        center={markerPosition}
        zoom={14}
        style={{ height: "240px", width: "100%" }}
        className="rounded-2xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>

      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search for location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full px-5 py-3 rounded-full bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold text-lg text-gray-800">
          {location.split(",")[0]}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {location}
        </p>
      </div>

      <button
        onClick={handleSearch}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 
                   text-white font-semibold py-3 rounded-full 
                   transition duration-300"
      >
        Pin your location
      </button>

    </div>

  </div>

</div>

);

};

export default HeroSection;
