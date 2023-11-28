import axios from "axios";
import {useEffect, useState} from 'react';

const LocationPopup = () => {

     // ------------------------- location -----------------------
  const [currLocation, setCurrLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };
  

  const ChooseLocation = event => {
    setLoc(currLocation.city);
  };
  
  
  // ------------------------- Option ------------------------------
  const [loc, setLoc] = useState(currLocation.city);


  const Delhi = event => {
    setLoc("Delhi");
  };
  const Noida = event => {
    setLoc("Noida");
  };
  const Gurugram = event => {
    setLoc("Gurugram");
  };
  const Faridabad = event => {
    setLoc("Faridabad");
  };
  const Ghaziabad = event => {
    setLoc("Ghaziabad");
  };



  return (
    <div>
      
        <h3>selected Location: {loc}</h3>
      
      <div className="select-btn">

      <button onClick={Delhi}>Delhi</button><br/>
      <button onClick={Noida}>Noida</button><br/>
      <button onClick={Gurugram}>Gurugram</button><br/>
      <button onClick={Ghaziabad}>Ghaziabad</button><br/>
      <button onClick={Faridabad}>Faridabad</button><br/>

      </div>
      <div className="select-locatin">      
      <button onClick={ChooseLocation}><i class="fa-solid fa-location-crosshairs"></i></button>

      </div>

      <h2>current City: {currLocation.city}</h2>



      <h4>Experience The Best Bike Services In {loc}</h4>

      
      
      
      
    </div>
  )
}

export default LocationPopup