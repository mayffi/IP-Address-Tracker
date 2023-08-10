import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"
import { IpContext } from "../IpContext";


function MapArea() {
  const {location} = useContext(IpContext);
  const [center, setCenter] = useState()
  // console.log(location?.location.lng)
  // AIzaSyBxHQ7TG6tAYxrhM-rfxfrXr2nK8LtlUKA
  
// Leaflet.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerRetina,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow
// });
useEffect(()=>{
  setCenter(location)
},[location])

const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
   useEffect(() => {
     map.setView([lat, lng]);
   }, [lat, lng]);
   return null;
 }




  return (
    !!location && center ? (
      <div className="map-area">
      <MapContainer
      center={[center.location.lat, center.location.lng]}
        zoom={7}
        scrollWheelZoom={true}
        className="map-container"
      >   <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
    <Marker  position={[location.location.lat, location.location.lng]} icon={new Leaflet.Icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconRetinaUrl: markerRetina
    })}/>
    <RecenterAutomatically lat={location.location.lat} lng={location.location.lng}/>
    </MapContainer>
    </div>):(<></>)
    
   
  );
}

export default MapArea;
