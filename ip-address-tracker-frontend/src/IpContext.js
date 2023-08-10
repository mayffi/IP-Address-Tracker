import { createContext, useEffect, useState } from "react";

export const IpContext = createContext();

//the Provider manages the states and provides them to the child components using context
export const IpProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [ip, setIP] = useState();

  const fetchLocationData = async () => {
    setError("");
    //makes the api call to fetch data from the backend
    let backendVar =
      "http://localhost:5000/address" + (!!ip ? `?ipAddress=${ip}` : "");
    console.log(backendVar);
    try {
      const response = await fetch(backendVar);
      const data = await response.json();

      if (response.ok) {
        setLocation(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("An error occurred while fetching data");
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchLocationData();
  };
  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <IpContext.Provider value={{ ip, setIP, location, error, handleSearch }}>
      {children}
    </IpContext.Provider>
  );
};
