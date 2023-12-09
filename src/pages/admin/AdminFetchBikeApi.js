import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminFetchBikeApi = () => {
  //--------------------------fetch----------------
  const [brand, setBrand] = useState([])

  const fetchBike = async () => {
    const res = await axios.get("http://localhost:2000/bikeApi")
    const aaa = res.data.bikeApi
    // setBrand(aaa)
    console.log('res', res.data.bikeApi)
    console.log(brand)

    const abc = aaa.sort((a, b) => a.brand.localeCompare(b.brand))
    setBrand(abc)


  }
  useEffect(() => {
    fetchBike();
  }, [])


  return (
    <div>

      {/* ---------------------------------------------- */}


      <div className=''>
        <div className='bike-m-ca-heading-1'> <span> Update <i class="fa-solid fa-motorcycle"></i> </span> API</div>
        <div className='bike-m-ca-heading-2'>Update Bike Brand and Model Api</div>


        <ol>


          <div className='bike-update-api-list'>

            <div className='bike-u-api-list-2'>
              <div className='bike-u-a-brand-heading'>Brand name</div>
              <div className='bike-u-a-model-heading'>Brand model list</div>
            </div>

            {
              brand.map((e) => {
                return <div className='bike-u-api-list-1' >
                  <div className='pp-1'></div>
                  <li className='bike-u-a-brand'>{e.brand}</li>
                  <div className='bike-u-a-model'>
                    <ul>
                      {
                        e.model.map((aa) => {
                          return <li>{aa}</li>
                        })
                      }

                    </ul>
                  </div>

                </div>
              })
            }


          </div>


        </ol>



      </div>



      {/* ---------------------------------------------- */}

    </div>
  )
}

export default AdminFetchBikeApi