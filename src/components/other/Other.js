import axios from "axios";
import {useEffect, useState} from 'react';

const Other = () => {
  // ------------------------- location ---------------
  const [currLocation, setCurrLocation] = useState({});
  // const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocation();
    // getLocationJs();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };
  

  
  
  // ------------------------- Option ---------------
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



  const ChooseLocation = event => {
    setLoc(currLocation.city);
  };

  return (
    <div>
      <h2>Location: {loc}</h2>
      
      <div className="select-btn">

      <button onClick={Delhi}>Delhi</button>
      <button onClick={Noida}>Noida</button>
      <button onClick={Gurugram}>Gurugram</button>
      <button onClick={Ghaziabad}>Ghaziabad</button>
      <button onClick={Faridabad}>Faridabad</button>

      </div>
      <div className="select-locatin">      
      <button onClick={ChooseLocation}><i class="fa-solid fa-location-crosshairs"></i></button>

      </div>

      <h2>City: {currLocation.city}</h2>
      
    </div>
  );
};

export default Other;
