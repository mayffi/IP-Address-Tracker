import React from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

function MapArea({ latitude, longitude }) {
  return (
    <div className="map-area">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{height:"300px"}}
      > <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[latitude,longitude]}/></MapContainer>
     
    </div>
  );
}

export default MapArea;
