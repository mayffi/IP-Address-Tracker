const resolve = require('dotenv').config({path:".env"})
const express = require("express");
const axios = require("axios");
const {fetchIPData}= require("./ipGeoAPI");

console.log(resolve)
const app = express();
var cors = require("cors");
const PORT = 5000;

app.use(cors());
app.get("/address", async(req,res)=>{ 
  console.log("Invoked")
  //  res.json({ message: "Hello from server!" });
  let ipAddress = req.query.ipAddress;
  if(!(!!ipAddress)){
    const resp = await axios.get("http://ip.jsontest.com")
    const data = await resp.data
    console.log(data)
    ipAddress = data.ip
  }
  try{
    const data=await fetchIPData(ipAddress);
    console.log(data)
    res.status(200).json(data);
  }catch(error){
    res.status(500).json({error:"An error occcured while fetching  data"})
  }
});;
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
