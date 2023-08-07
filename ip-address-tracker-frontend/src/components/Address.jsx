import React, { useContext } from 'react'
import { IpContext } from '../IpContext';

function Address() {
    const{location,error}= useContext(IpContext); 
   
  
    console.log(error.message)

  return (
    <div className='address-container'>
        <div className="address-details">
        {error && <p>{error}</p>}
            <h3>IP Address</h3>
            <p>{location.ip}</p>
        </div>
        <div className="address-details">
            <h3>Location</h3>
            <p>{location.location.city},{location.location.postalCode}</p>
        </div>
        <div className="address-details">
            <h3>Timezone</h3>
            <p>{location.timezone}</p>
        </div>
        <div className="address-details">
            <h3>ISP</h3>
            <p>{location.isp}</p>
        </div>

    </div>
  )
}

export default Address