import React from 'react'
import { useCountUp } from 'react-countup';

export const Header = () => {
  
  useCountUp({ ref: 'counter4', end: 4, duration: 5 });
  useCountUp({ ref: 'counter7', end: 7, duration: 3 });
  useCountUp({ ref: 'counter50000', end: 50000 });
  
  return (
    <div>

      <div className='header'>

        <div className='header-col-1'>
          <div className='header-c-heading-1'>Service Your Motorbike <br />at Doorstep</div>
          <div className='header-c-heading-2'>Book Expert Mechanic to Fix your <br />Bike at Your Home</div>

          <div className='header-c-form'>
            <input type='number' placeholder='Enter your number' />
            <br />
            <button>BOOK NOW</button>
          </div>

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
