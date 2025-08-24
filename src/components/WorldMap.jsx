import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
  
  return (
    <div style={{ margin: "auto", width: "100%", height: "600px" }}>
     <VectorMap
  map={worldMill}
  containerStyle={{
    width: "100%",
    height: "600px",
  }}
  backgroundColor="#d5d1d1ff"
  regionStyle={{
    initial: {
      fill: "#ffffff",       // fill color
      "fill-opacity": 1,
      stroke: "#ffffff",     // make stroke same as fill
      "stroke-width": 0,     // hide borders
      "stroke-opacity": 0,   // ensure no visible stroke
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
      stroke: "#ffffff",     // still no border on hover
      "stroke-width": 0,
    },
  }}
  series={{
    regions: [
      {
        values: countries,
        min: 0,
        max: 100,
        attribute: "fill",
        scale: ["#ffffff"],   // solid fill
      },
    ],
  }}
  markers={missingCountries}
  markerStyle={{
    initial: {
      fill: "red",
      stroke: "none",
    },
  }}
/>

    </div>
  );
}

export default WorldMap;
