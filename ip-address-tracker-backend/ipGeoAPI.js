const axios = require("axios");
const API_KEY = process.env["IPGEOLOCATION_API_KEY"];

const fetchIPData = async (ipAddress) => {
  try {
    console.log(API_KEY);
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
    );
    // res.status(200).json(response);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    // res
    //   .status(400)
    //   .json({ error: "Failed to fetch IP address", message: error });
  }
};
module.exports = { fetchIPData };
