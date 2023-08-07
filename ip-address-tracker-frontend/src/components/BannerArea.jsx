import React, { useContext} from "react";
import { IpContext } from "../IpContext";

//Setlocation and error are called as props to this component
function BannerArea({setLocation,setError}) {
    const{ip,setIP,handleSearch}=useContext(IpContext);
    console.log(ip)

    // const fetchResults = async () => {
    //     await fetch(`http://localhost:3001/ipaddress/country,city?ipAddress=${ip}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         setLocation(data)       
    //      })
    
    //       .catch((error) => {
    //         setError("There was an error while fetching the IP location")
    //         console.log("error", error);
    //       });
    //   }
    const handleInputChange = (e) => {
        if(!ip === null) return
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
