import React, { useState } from "react";
import { useCountUp } from 'react-countup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  
  const [data, setData] = useState({
    phone: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value;
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


  
  useCountUp({ ref: 'counter4', end: 4, duration: 5 });
  useCountUp({ ref: 'counter7', end: 7, duration: 3 });
  useCountUp({ ref: 'counter50000', end: 50000 });
  
  return (
    <div>

      <div className='header'>

        <div className='header-col-1'>
          <div className='header-c-heading-1'>Service Your Motorbike <br />at Doorstep</div>
          <div className='header-c-heading-2'>Book Expert Mechanic to Fix your <br />Bike at Your Home</div>

          <form className='header-c-form' onSubmit={handleSubmit}>
            <input type='number' placeholder='Enter your number' maxlength="10"
                  required
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
             />
            <br />
            <button  type="submit">BOOK NOW</button>
          </form>

          <div className='header-c-inc'>
            <div className='header-c-inc-col'>
              <span id='counter4'></span><span className=''>.</span><span id='counter7'></span>/ 5
              <div className=''>Based on 100000+ <br /> Reviews</div>

            </div>
            <div className='header-c-inc-col'>
              <span id='counter50000'></span> +
              <div className=''>Happy <br /> Customers</div>

            </div>


          </div>

        </div>



        <div className='header-col-2'>
          {/* <img className="head-img-1" src={img1} />
          <img className="head-img-2 imgrot" src={img2} /> */}
          {/* <img className="head-img-3" src={img} /> */}
          {/* <img className="head-img-4" src={img3} /> */}
        </div>



      </div>


    </div>
  )
}
