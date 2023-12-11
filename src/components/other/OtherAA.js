import axios from 'axios'
import React, { useEffect, useState } from 'react'


const OtherAA = () => {

  
  const [bike, setBike] = useState([])
  const [id, setId] = useState("6575cf9ae07dced455d8abf5")
  const [brand, setBrand] = useState([])
  const [model, setModel] = useState([])
  // const [country, setCountry] = useState({_id: "" , brand: "", model: []})

  const fetchBrand = async () => {
    const res = await axios.get(`http://localhost:2000/bikeApi`)
    console.log('data', res.data.bikeApi)
    setBrand(res.data.bikeApi)

    const resp = await axios.get(`http://localhost:2000/bikeApi/${id}`)
    console.log('resp', resp.data.bikeApi.model)
    setModel(resp.data.bikeApi.model)
  }

  useEffect(() => {
    fetchBrand();
  }, [])

  
  
  
  return (
    <div>
    <div onChange={(e)=>{
        console.log(e.target.value)
        setId(e.target.value)
      }}>
      <select >
        <option>select</option>
        {brand.map((e)=>{
          return <option value={e._id}>{e.brand}</option>
        })}
      </select> 
      
      <select>
        {
          model.map((e)=>{
            return <option>{e}</option>
          })
        }
      </select>
    <div></div>
    <div>{id}</div>
    <div>OtherAA</div>

    </div>
        </div>
  )
}

export default OtherAA