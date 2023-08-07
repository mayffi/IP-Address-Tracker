import { createContext, useState } from "react";

export const IpContext = createContext();

//the Provider manages the states and provides them to the child components using context
export const IpProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const { ip, setIP } = useState("8.8.8.8");

  const fetchLocationData = async () => {
    setError("");
    //makes the api call to fetch data from the backend
    try {
      const response = await fetch(
        `http://localhost:5000/ipaddress/country,city?ipAddress=${ip}`
    //    `ipaddress/ipAddress={ip}`
      );
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setLocation(data);
        console.log(location)
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fectching data");
    }
  };
  const handleSearch = async(e)=> {
    e.preventDefault();
    await fetchLocationData();
  };

  return(
    <IpContext.Provider value ={{ip,setIP,location,error,handleSearch}}>{children}</IpContext.Provider>
  )
};
