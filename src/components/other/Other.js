import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Other = () => {


  const [countries, setCountries] = useState([])

  const fetchBike = async () => {
    const res = await axios.get("http://localhost:2000/bikeApi")
    setCountries(res.data.bikeApi)
  }
  useEffect(() => {
    fetchBike();
  }, [])

  console.log(countries)





  // const countries = [
  //   {
  //     name: 'ind', value: "in", cities: [
  //       "del",
  //       "mum"
  //     ]
  //   },
  //   {
  //     name: 'pa', value: "pk", cities: [
  //       "lah",
  //       "kar"
  //     ]
  //   },
  //   {
  //     name: 'ban', value: "bg", cities: [
  //       "dak",
  //       "chi"
  //     ]
  //   }
  // ]






  // ---------------------------------------------
  // const [country, setCountry] = useState("");
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });



  return (
    <div>
      <div>Other</div>
      <div>
        {/* -------------------- 1st drop --------------- */}
        <select
          value={country}
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value)
          }}>
          {
            countries.map((item, index) => {
              return <option value={index}>{item.name}</option>;
            })
          }
        </select>

        {/* -------------------- 1st drop --------------- */}

        {/* <select value={country}>
          {
            countries.model.map((item, index) => {
              return <option value={country}>{item}</option>
            })
          }
        </select> */}
      </div>



      <div></div>
    </div>
  )
}

export default Other