import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OtherAA = () => {

  
  const [bikeApi, setBikeApi] = useState([])

  const fetchBike = async () => {
    const res = await axios.get("http://localhost:2000/bikeApi")
    setBikeApi(res.data.bikeApi)
  }
  useEffect(() => {
    fetchBike();
  }, [])

  console.log(bikeApi)


//-------------------------------------------------------------------

  const [data, setData] = useState();

  
  
  
  
  return (
    <div>



<div>
        {/* -------------------- 1st drop --------------- */}
        <select
          value={data}
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value)
          }}>
          {
            bikeApi.map((item, index) => {
              return <option value={index}>{item.brand}</option>
            })
          }
        </select>

        {/* -------------------- 1st drop --------------- */}

        <select value={data}>
          {
            bikeApi[1].model.map((item, index) => {
              return <option value={index}>{item}</option>
            })
          }
        </select>


      </div>
      
      
      
    </div>
  )
}

export default OtherAA