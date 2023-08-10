import React, { useContext } from "react";
import { IpContext } from "../IpContext";

function Address() {
  const {location} = useContext(IpContext);

  return !!location ? (
    <div className="address-container">
      <div className="address-details">
        <h3>IP Address</h3>
        <p>{location.ip}</p>
      </div>
      <div className="address-details">
        <h3>Location</h3>
        <p>
          {location.location.city},{location.location.country}
        </p>
      </div>
      <div className="address-details">
        <h3>Timezone</h3>
        <p>UTC {location.location.timezone}</p>
      </div>
      <div className="address-details">
        <h3>ISP</h3>
        <p>{location.isp}</p>
      </div>
    </div>
  ) : (
    <div className="address-container">
      <div className="address-details">
        <h3>IP Address</h3>
      </div>
      <div className="address-details">
        <h3>Location</h3>
      </div>
      <div className="address-details">
        <h3>Timezone</h3>
      </div>
      <div className="address-details">
        <h3>ISP</h3>
      </div>
    </div>
  );
}

export default Address;
