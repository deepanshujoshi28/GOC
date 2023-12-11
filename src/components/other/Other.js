import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Other = () => {
  const [limit, setLimit] = useState("")

  const handleLim = (event) => {
    setLimit(event.target.value.slice(0, 5))
    console.log(limit)
  }



  // ----------------------------------------------------------------------------------------------------------------------------------------------------


  const [data, setData] = useState({
    name: "",
    city: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };



  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      city: data.city,
      number: data.number,
      email: data.email,
      subject: data.subject,
      message: data.message
    };
    axios
      .post("http://localhost:2000/contact", userData)
      .then((response) => {
        console.log(response);
        navigate("/contact-confirm")
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


  // -----------------------------------------------------------------------------------------------------------------------------

  return (
    <div>

      <input type='number' value={limit} onChange={handleLim} />
      {/* -------------------------------------------------------------------------------------------------- */}

      <form onSubmit={handleSubmit}>
        <input placeholder='inp-1' required name='name' value={data.name} onChange={handleChange} />
        <input placeholder='inp-2' required name='city' value={data.city} onChange={handleChange} />
        <input placeholder='inp-3' required name='number' value={data.number} onChange={handleChange} />
        <input placeholder='inp-4' required name='email' value={data.email} onChange={handleChange} />
        <input placeholder='inp-4' required name='subject' value={data.subject} onChange={handleChange} />
        <input placeholder='inp-4' required name='message' value={data.message} onChange={handleChange} />

        <button type='submit' >submit</button>
      </form>


    </div>
  )
}

export default Other