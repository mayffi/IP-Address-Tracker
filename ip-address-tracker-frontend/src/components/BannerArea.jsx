import React, { useContext} from "react";
import { IpContext } from "../IpContext";

//Setlocation and error are called as props to this component
function BannerArea({setLocation,setError}) {
    const{ip,setIP,handleSearch}=useContext(IpContext);
   

    const handleInputChange = (e) => {
    setIP(e.target.value);
     
    }

   
  return (
    <>
    <div
      className="banner-container"
      style={{
        background: "url(/assets/images/pattern-bg-desktop.png)",
        backgroundPosition: "center top",
      }}
    >
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="ipaddress" id="ipaddress" value={ip} onChange={handleInputChange} />
        <button className="input-button">&gt;</button>
      </form>
    </div>
    
    </>
  );
}

export default BannerArea;
