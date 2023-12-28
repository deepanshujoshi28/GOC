import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCountUp } from 'react-countup';
import img1 from "../../images/serviceBg-1.jpg"
import img2 from "../../images/serviceBg-2.jpg"
import img3 from "../../images/serviceBg-3.jpg"
import img5 from "../../images/serviceBg-5.jpg"
import { useNavigate } from 'react-router-dom';



const BookingComponent = () => {

  useCountUp({ ref: 'counter4.1', end: 4, duration: 2 });
  useCountUp({ ref: 'counter7.1', end: 7, duration: 2, delay: 1 });
  useCountUp({ ref: 'counter50000.1', end: 60000 });

  // ---------------------------------------------------------------------------


  const [modelName, setModelName] = useState()

  const [id, setId] = useState("6575cf9ae07dced455d8abf5")
  const [brand, setBrand] = useState([])
  const [model, setModel] = useState([])
  const fetchBrand = async () => {
    const res = await axios.get(`http://localhost:2000/bikeApi`)
    console.log('data', res.data.bikeApi)
    setBrand(res.data.bikeApi)
  }


  useEffect(() => {
    fetchBrand();
  }, [])



  const fetchmodel = async () => {

    const resp = await axios.get(`http://localhost:2000/bikeApi/${id}`)
    // console.log('resp', resp.data.bikeApi.model)
    setModel(resp.data.bikeApi.model)
  }


  const clickHandle = ((e) => {
    // console.log(11)
    fetchmodel()
  })


  const modelChange = ((e) => {
    setModelName(e.target.value)
    console.log(e.target.value)

  })





  // ----------------------------------------------------------------------------------------------------------------------------------------------------



  const [data, setData] = useState({
    model: "",
    otherModel: "",
    number: "",
    address: "",
  });


  const handleNumber = (e) => {

    const limit = 10;
    const value = e.target.value.slice(0, limit);
    setData({
      ...data,
      [e.target.name]: value
    });
  };


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
      model: modelName,
      otherModel: data.otherModel,
      number: data.number,
      address: data.address,
    };
    axios
      .post("http://localhost:2000/booking", userData)
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


  // -----------------------------------------------------------------------------------------------------------------------------



  return (
    <div>
      <div className='select-bike'>

        <div className='select-bike-content'>


          {/* ----col-1----- */}

          <div className='select-bike-col-1  '>
            <div className='sb-img1 zoomIn'><img className='' src={img1} alt='img' /></div>
            <div className='sb-img2 zoomIn'><img className='' src={img2} alt='img' /></div>
            <div className='sb-img3 zoomIn'><img className='' src={img3} alt='img' /></div>
            <div className='sb-img4 zoomIn'><img className='' src={img5} alt='img' /></div>

          </div>


          {/* ----col-2----- */}

          <div className='select-bike-col-2 shadow-01 w-100'>

            <div className='sb-col-1'>
              <div className='sb-heading-1 '>Book Service</div>
              <div className='sb-heading-2 '>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i></span> Garage On Call</div>
              <div className='sb-heading-3 '>Experience the best bike services at doorstep</div>
              <div className='sb-text'>Get the doorstep bike service at your location by experts.<br />Our mission to ensure excellent quality bike service & repair work at home to everyone at a reasonable price.</div>
            </div>


            <div className='sb-col-2'>

              <div className='sb-c2-col'>
                <div className='sb-c2-text-1'><span id='counter4.1'></span><span>.</span><span id='counter7.1'><span></span></span> / 5 </div>
                <div className='sb-c2-text-2'>
                  <div className='sb-c2-1'>Reviews Rating</div>
                  <div className='sb-c2-2'>Based on 10,000+</div>
                </div>
              </div>

              <div className='sb-c2-col'>
                <div className='sb-c2-text-1'><span id='counter50000.1'></span> </div>
                <div className='sb-c2-text-2'>
                  <div className='sb-c2-1'>Plus</div>
                  <div className='sb-c2-2'>Happy Customers</div>
                </div>
              </div>

            </div>



            <div>
              <form className='sb-col-3 select-bike-form' onClick={clickHandle} onSubmit={handleSubmit}>
                <div className='sb-c3-1'>

                  <select
                    onChange={(e) => {
                      console.log(e.target.value)
                      setId(e.target.value)
                    }}
                    className="select-bike-inp ">
                    <option disabled selected>Select Brand</option>
                    {brand.map((e) => {
                      return <option name='brand' value={e._id}>{e.brand}</option>
                    })}

                  </select>
                  <select className="select-bike-inp" onChange={modelChange} name='model' >
                    <option disabled selected>--- Select Model ---</option>

                    {
                      model.map((e) => {
                        return <option value={e}>{e}</option>
                      })
                    }

                  </select>
                </div>
                <input required className='select-bike-inp text-center' type='number' placeholder='* Enter your phone number' name='number' value={data.number} onChange={handleNumber} />
                <input className='select-bike-inp text-center' type='text' placeholder='Enter your address' name='address' value={data.address} onChange={handleChange} />
                <input className='select-bike-inp text-center' type='text' placeholder='any message !' name='otherModel' value={data.otherModel} onChange={handleChange} />
                <button className='select-bike-btn '><div className='pop-outin'>BOOK SERVICE</div> </button>
              </form>

            </div>
          </div> 



        </div>

      </div>

    </div>
  )
}

export default BookingComponent