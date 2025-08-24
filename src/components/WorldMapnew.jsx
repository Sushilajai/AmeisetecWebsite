import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { motion } from "framer-motion";


// GeoJSON for the world map
const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
  { name: "Mumbai, Maharashtra, India, symphony IT park in chandivali", coordinates: [72.8777, 19.076] },
  { name: "Ahmedabad, India", coordinates: [72.58727, 23.02579] },
  { name: "Delhi, India", coordinates: [77.23149, 28.65195] },
  { name: "Amsterdam, North Holland, Netherlands", coordinates: [4.88969, 52.37403] },
];



// Dynamic markers: lat, lng, size
// const markers = [
//   { name: "USA", coordinates: [-95.7129, 37.0902], size: 20 },
//   { name: "Brazil", coordinates: [-51.9253, -14.235], size: 18 },
//   { name: "India", coordinates: [78.9629, 20.5937], size: 15 },
//   { name: "Australia", coordinates: [133.7751, -25.2744], size: 18 },
//   { name: "Russia", coordinates: [105.3188, 61.524], size: 15 },
//   { name: "South Africa", coordinates: [22.9375, -30.5595], size: 16 },
//     // { name: "Mumbai, Maharashtra, India, symphony IT park in chandivali", coordinates: [-19.07283, -72.88261], size: 20 },
//     // { name: "Ahmedabad, India	", coordinates: [23.02579, 72.58727], size: 18 },
//     // { name: "Delhi, India", coordinates: [28.65195, 77.23149], size: 15 },
//     // { name: "Amsterdam, North Holland, Netherlands", coordinates: [52.37403, 4.88969], size: 18 },
// ];

export default function WorldMapnew() {
  return (
    <div
  // // style={{
  // //   backgroundColor: "#f0f0f0",
  // //   backgroundSize: "cover",      // or "contain"
  // //   backgroundPosition: "center",
  // //   backgroundRepeat: "no-repeat",
  // //       height: "100vh",
  // //   width: "100%",

  // }}
>

        <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 150 }}
      style={{ width: "100%", height: "500px" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#E0E0E0"
              stroke="none"
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          {/* Blinking circle using framer-motion */}
          <motion.circle
            r={6}
            fill="red"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <title
            textAnchor="middle"
            y={-12}
            style={{ fontFamily: "system-ui", fill: "#333", fontSize: "10px" }}
          >
            {name}
          </title>
        </Marker>
      ))}
    </ComposableMap>

    </div>
  );
}
