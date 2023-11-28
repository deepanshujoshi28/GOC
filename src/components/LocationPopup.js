import axios from "axios";
import { useEffect, useState } from 'react';
import del from "../images/delhi.jpg"
import noi from "../images/noida.jpg"
import gur from "../images/gurgaon.jpg"
import far from "../images/Faridabad.jpg"
import ghaz from "../images/Ghaziabad.jpg"

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




  // ------------------------- Option ------------------------------
  const a = currLocation.city;

  const [loc, setLoc] = useState();



  const Delhi = event => {
    setLoc("Delhi");
    setAba("none")
  };
  const Noida = event => {
    setLoc("Noida");
    setAba("none")
  };
  const Gurugram = event => {
    setLoc("Gurugram");
    setAba("none")
  };
  const Faridabad = event => {
    setLoc("Faridabad");
    setAba("none")
  };
  const Ghaziabad = () => {
    setLoc("Ghaziabad");
    setAba("none")
  };

  const ChooseLocation = () => {
    setLoc(currLocation.city);
    setAba("none")
  };

  const [aba, setAba] = useState("none");


  const abab = () => {
    setAba("flex")
  }

  const closeLoc = () => {
    setAba("none")
  }


  return (
    <div>
      <div onClick={abab}>
        <input placeholder="Choose Location" value={loc} /><i class="fa-solid fa-caret-down"></i>

      </div>

      {/* <h3 onClick={abab}>{loc} <i class="fa-solid fa-caret-down"></i></h3> */}


      <div className="location-col" style={{ display: aba }}>
        <div className="closeLoc" onClick={closeLoc}><i class="fa-regular fa-circle-xmark"></i></div>
        <div className="location-col-h1">Select Your City</div>

        <div className="select-btn">
          <div><span onClick={Delhi}><img src={del} /> <div> Delhi </div> </span> </div>
          <div> <span onClick={Noida}><img src={noi} /> <div> Noida </div> </span> </div>
          <div> <span onClick={Gurugram}><img src={gur} /> <div> Gurugram </div> </span> </div>
          <div> <span onClick={Ghaziabad}><img src={ghaz} /> <div> Ghaziabad </div> </span> </div>
          <div> <span onClick={Faridabad}><img src={far} /> <div> Faridabad </div> </span> </div>
        </div>

        <div onClick={ChooseLocation} className="select-locatin">
          <i class="fa-solid fa-location-crosshairs"></i> Detect Location
        </div>

      </div>

    </div>
  )
}

export default LocationPopup


