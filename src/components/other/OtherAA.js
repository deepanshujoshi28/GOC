import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OtherAA = () => {




  // const fetchBrand = async () => {
  //   const res = await axios.get(`http://localhost:2000/bikeApi`)
  //   console.log('data', res.data.bikeApi)
  //   setBike(res.data.bikeApi)

  // }

  // useEffect(() => {
  //   fetchBrand();
  // }, [])





  const [brand, setBrand] = useState([])
  const [model, setModel] = useState([])
  const [id, setId] = useState([])




  const fetchBrand = async () => {
    const res = await axios.get(`http://localhost:2000/bikeApi`)
    console.log('data', res.data.bikeApi)
    setBrand(res.data.bikeApi)
  }

  useEffect(() => {
    fetchBrand();
  }, [])





  const fetchModel = async () => {
    const res = await axios.get(`http://localhost:2000/bikeApi`)
    console.log('data', res.data.bikeApi)
    setBrand(res.data.bikeApi)
  }

  useEffect(() => {
    // fetchBrand();
  }, [])







  return (
    <div>

      <div>
        <select onClick={
          (e) => {
          setId(e.target.value)
        }
        }>
          {brand.map((e) => {
            return <option name='brand' value={e._id}>{e.brand}</option>
          })}

        </select>
      </div>
      <div></div>
      <div></div>



    </div>
  )
}

export default OtherAA