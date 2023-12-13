import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const OfferPopup = ({ open, onClose }) => {



  const [data, setData] = useState({
    phone: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    
  const limit = 10;
    const value = e.target.value.slice(0, limit);
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      phone: data.phone
    };
    axios
      .post("http://localhost:2000/home", userData)
      .then((response) => {
        console.log(response);
        navigate("/booking-confirm")
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };








  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  if (!open) return null;


  return (
    <div>

      <div className='offer-popup'>


        <div className='offer-section'>
          <button className='offer-closeBtn' onClick={onClose}> <i class="fa-regular fa-circle-xmark offer-icon"></i></button>
          <div className='offer-popup-main'>
            <div className='offer-content'>
              <div className='offer-text-1'>Get Upto</div>
              <div className='offer-text-2'>30% OFF</div>
              <div className='offer-text-3'>On Bike Service and parts replacement</div>
              <form onSubmit={handleSubmit}>
                <input placeholder='enter your number'
                  required
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                /><br />
                <button className='offer-claim' type="submit" >Book Service</button>

              </form>
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default OfferPopup