// import React from "react";
// import { useState } from "react";
// import { column1, column2, column3 } from "../data/images";

// const HeroSection = () => {
//      const [location, setLocation] = useState("JP Nagar 7th Phase, Bangalore");

//   // Encode location for URL
//   const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
//     location
//   )}&output=embed`;

//   return (
//     <div className="bg-gray-100 lg:h-screen lg:overflow-hidden min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-0">

//         <div className="grid lg:grid-cols-2 gap-8 items-center">

//           {/* LEFT */}
//           <div className="bg-[#E9EEF3] rounded-3xl p-4 relative overflow-hidden">

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

//               {/* Column 1 */}
//               <div className="flex flex-col gap-2">
//                 {column1.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-32 sm:h-40"
//                   />
//                 ))}
//               </div>

//               {/* Column 2 */}
//               <div className="flex flex-col gap-2">
//                 {column2.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-44 sm:h-56"
//                   />
//                 ))}
//               </div>

//               {/* Column 3 */}
//               <div className="flex flex-col gap-2">
//                 {column3.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-32 sm:h-40"
//                   />
//                 ))}
//               </div>

//             </div>

//             {/* Fade */}
//             <div className="absolute bottom-0 left-0 w-full h-48 
//               bg-gradient-to-t 
//               from-[#E9EEF3] via-[#E9EEF3]/90 via-[#E9EEF3]/70 to-transparent">
//             </div>

//             {/* Text */}
//             <div className="absolute bottom-0 left-6 right-6 pb-4">
//               <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">
//                 Land to Logistics <br />
//                 India’s Platform for Land, Industrial, and Logistics Real Estate
//               </h1>
//               <p className="mt-1 text-gray-500 text-sm">
//                 Search | Select | Connect
//               </p>
//             </div>

//           </div>

//           {/* RIGHT stays same */}

//              {/* <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6">

//             <div className="rounded-2xl overflow-hidden h-160 sm:h-52">
//               <iframe
//                 title="map"
//                 width="100%"
//                 height="100%"
//                 loading="lazy"
//                 allowFullScreen
//                 src="https://www.google.com/maps?q=JP%20Nagar%207th%20Phase%20Bangalore&output=embed"
//               ></iframe>
//             </div>

//             <input
//               type="text"
//               placeholder="Search for location"
//               className="w-full mt-4 px-5 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <div className="mt-4 border-t pt-3">
//               <h3 className="font-semibold text-base text-gray-800">
//                 JP Nagar 7th Phase
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 JP Nagar 7th Phase, Bengaluru, Karnataka, India
//               </p>
//             </div>

//             <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-300">
//               Pin your location
//             </button>

//           </div> */}

//           <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6">

//             {/* Dynamic Map */}
//             <div className="rounded-2xl overflow-hidden h-64 sm:h-72">
//               <iframe
//                 title="map"
//                 width="100%"
//                 height="100%"
//                 loading="lazy"
//                 allowFullScreen
//                 src={mapSrc}
//               ></iframe>
//             </div>

//             {/* Search Input */}
//             <input
//               type="text"
//               placeholder="Search for location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full mt-4 px-5 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Dynamic Location Text */}
//             <div className="mt-4 border-t pt-3">
//               <h3 className="font-semibold text-base text-gray-800">
//                 {location.split(",")[0]}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 {location}
//               </p>
//             </div>

//             <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-300">
//               Pin your location
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { column1, column2, column3 } from "../data/images";

// /* Fix default marker icon issue */
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// const defaultPosition = [12.9105, 77.5857];

// const HeroSection = () => {
//   const [location, setLocation] = useState(
//     "JP Nagar 7th Phase, Bengaluru"
//   );

//   const [markerPosition, setMarkerPosition] = useState(defaultPosition);

//   /* Component to handle map click */
//   function LocationMarker() {
//     useMapEvents({
//       click: async (e) => {
//         const { lat, lng } = e.latlng;
//         setMarkerPosition([lat, lng]);

//         // Reverse Geocoding (FREE - OpenStreetMap)
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
//         );
//         const data = await response.json();

//         if (data.display_name) {
//           setLocation(data.display_name);
//         }
//       },
//     });

//     return <Marker position={markerPosition} />;
//   }

//   return (
//     <div
//       className="bg-gray-100 
//                  lg:h-screen lg:overflow-hidden 
//                  min-h-screen flex items-center justify-center"
//     >
//       <div className="w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-0">

//         <div className="grid lg:grid-cols-2 gap-8 items-center">

//           {/* ================= LEFT ================= */}
//           <div className="bg-[#E9EEF3] rounded-3xl p-4 relative overflow-hidden">

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

//               {/* Column 1 */}
//               <div className="flex flex-col gap-2">
//                 {column1.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-32 sm:h-40"
//                   />
//                 ))}
//               </div>

//               {/* Column 2 */}
//               <div className="flex flex-col gap-2">
//                 {column2.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-44 sm:h-56"
//                   />
//                 ))}
//               </div>

//               {/* Column 3 */}
//               <div className="flex flex-col gap-2">
//                 {column3.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt=""
//                     className="rounded-2xl object-cover w-full h-32 sm:h-40"
//                   />
//                 ))}
//               </div>

//             </div>

//             {/* Fade Overlay */}
//             <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#E9EEF3] via-[#E9EEF3]/90 via-[#E9EEF3]/70 to-transparent" />

//             {/* Text */}
//             <div className="absolute bottom-0 left-6 right-6 pb-4">
//               <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">
//                 Land to Logistics <br />
//                 India’s Platform for Land, Industrial, and Logistics Real Estate
//               </h1>
//               <p className="mt-1 text-gray-500 text-sm">
//                 Search | Select | Connect
//               </p>
//             </div>

//           </div>

//           {/* ================= RIGHT ================= */}
//           <div className="bg-white rounded-3xl shadow-lg p-6">

//             {/* Leaflet Map */}
//             <MapContainer
//               center={defaultPosition}
//               zoom={14}
//               style={{ height: "350px", width: "100%" }}
//               className="rounded-2xl"
//             >
//               <TileLayer
//                 attribution="&copy; OpenStreetMap contributors"
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <LocationMarker />
//             </MapContainer>

//             {/* Dynamic Location Info */}
//             <div className="mt-6 border-t pt-4">
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {location.split(",")[0]}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 {location}
//               </p>
//             </div>

//             <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-300">
//               Pin your location
//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


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
    <div
      className="bg-gray-100 
                 lg:h-screen lg:overflow-hidden 
                 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-0">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ================= LEFT ================= */}
          <div className="bg-[#E9EEF3] rounded-3xl p-4 relative overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              <div className="flex flex-col gap-2">
                {column1.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="rounded-2xl object-cover w-full h-42 sm:h-40"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {column2.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="rounded-2xl object-cover w-full h-44 sm:h-56"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {column3.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="rounded-2xl object-cover w-full h-32 sm:h-40"
                  />
                ))}
              </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#E9EEF3] via-[#E9EEF3]/90 via-[#E9EEF3]/70 to-transparent" />

            <div className="absolute bottom-0 left-6 right-6 pb-4">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">
                Land to Logistics <br />
                India’s Platform for Land, Industrial, and Logistics Real Estate
              </h1>
              <p className="mt-1 text-gray-500 text-sm">
                Search | Select | Connect
              </p>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="bg-white rounded-3xl shadow-lg p-6">

            {/* Map */}
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

            {/* 🔍 Search Field */}
            <div className="relative mt-6">
              <input
                type="text"
                placeholder="Search for location"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full px-5 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dynamic Location Info */}
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
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              Pin your location
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
