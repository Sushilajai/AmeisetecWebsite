import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import WorldMap from "./WorldMapnew";
export const MapComponent = (props) => {


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC9yhpYtvqtomYmADVy5zjRzL4kDUiQyFc', // Replace with your actual API key
  });

  const mapContainerStyle = {
    // width: '100vw',
    height: '70vh',
    color: "#746855",
  };

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  }
];

  const ind = {
    lat: 20, // Example coordinates
    lng: 78,
  };
const mum = {
    lat: 19, // Example coordinates
    lng: 73,
  };
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div id='MapComponent' className="text-center" style={{padding: '100px'}}>
      <div className="container">
        <div className="section-title">
          <h2>Global Presence</h2>
        </div>
        <div className="row">
    {/* <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={ind}
      zoom={3}
      // styles={mapStyle}
    >
      <Marker position={ind} title='India'/>
      <Marker position={mum} title='Mumbai' />
      </GoogleMap> */}
        <div style={{ width: "100%", height: "100vh" }}>
        <WorldMap />
        </div>

    </div>
    </div>
    </div>
  );
};

// export default MapComponent;
