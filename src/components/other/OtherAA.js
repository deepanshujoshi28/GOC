import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom";


const OtherAA = () => {


  const [brand, setBrand] = useState([])
  const [id, setId] = useState([])


  const [brandName, setBrandName] = useState('')





  const fetchBrand = async () => {
    const res = await axios.get(`http://localhost:2000/bikeApi`)
    console.log('data', res.data.bikeApi)
    setBrand(res.data.bikeApi)
  }

  useEffect(() => {
    fetchBrand();
  }, [])




  
  

  // ----------------------------------------------------------------------------------------------------------------------------------------------------


  const [data, setData] = useState({
    subject: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setId(e.target.value)
    setBrandName(e.target.value)

    setData({
      ...data,
      [e.target.name]: value
    });
  };



  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      subject: id,
    };
    axios
      .post("http://localhost:2000/help", userData)
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

      {/* <div>
        <select onChange={
          (e) => {
          setId(e.target.value)
        }
        }>
          {brand.map((e) => {
            return <option name='brand' value={e.brand}>{e.brand}</option>
          })}

        </select>
      </div> */}
      <h3>Form</h3>
      <div>{id}</div>

      <form  onSubmit={handleSubmit}>
        <select onChange={handleChange} name='phone'>
          <option>--- select options ----</option>
          {brand.map((e) => {
            
            return <option name='brand' id='aa'  value={e.brand}>{e.brand} </option>
          })}
        </select>

        <button type='submit'>submit</button>
        
      </form>






      <div>abc :{brandName}</div>


    </div>
  )
}

export default OtherAA