import "./App.css";
import Address from "./components/Address";
import BannerArea from "./components/BannerArea";
import MapArea from "./components/MapArea";
import { IpProvider} from "./IpContext";
// import { useContext } from "react";

function App() {
  // const{ip,location}=useContext(IpContext);
  // console.log(ip, location)

  return (
    <div className="container">
      <IpProvider>
        <BannerArea />
        <Address />
        <MapArea />
      </IpProvider>
    </div>
  );
}

export default App;
