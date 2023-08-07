const resolve = require('dotenv').config({path:".env"})
const express = require("express");
const {fetchIPData}= require("./ipGeoAPI");

console.log(resolve)
const app = express();
var cors = require("cors");
const PORT = 5000;

app.use(cors());
app.get("/address", async(req,res)=>{ 
  //  res.json({ message: "Hello from server!" });
  const ipAddress = req.query.ipAddress;
  if(!ipAddress){
    return res.status(400).json({error:"IP address is required"});
  }
  try{
    const data=await fetchIPData(ipAddress);
    res.status(200).json(data);
  }catch(error){
    res.status(500).json({error:"An error occcured while fetching  data"})
  }
});;
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
