import React from 'react'
import img from '../../../images/Blog1.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'


const BlogBenefits = () => {
  return (


    <div>
      <Navbar />

      <div className='single-blog-main'>

        <div className='single-blog-cols'>

          <div className='s-b-col'>

            <div className='s-b-col-1'>
              <div className='s-b-c-head'>
                <div className='s-b-c-h-h-1'>Benefits of availing doorstep bike repairing and servicing.</div>
                <div className='s-b-c-h-h-2'>
                  <div><i class="fa-solid fa-user"></i> ADMIN</div>
                  <div><i class="fa-solid fa-calendar-days"></i> February 19, 2020</div>
                </div>

              </div>
              <div className='s-b-c-img'><img src={img} /></div>
              <div className='s-b-c-para'>

                <div className='s-b-c-p-h'>
                  Experts know how to do it the best way
                </div>
                <div className='s-b-c-p-h'>
                  Your vehicle needs constant care
                </div>
                <div className='s-b-c-p-h'>
                  Customer friendly service and variable packages
                </div>

                <div className='s-b-c-p-t'>
                  Getting your bike to a professional garage or service provider has multiple advantages that you would surely like to explore.A well maintained and a thorough vehicle makes you save up on your time, and increase the resale value of the same. Not just this, a well maintained vehicle will save a lot of your money.
                  To establish a better perspective for you, here are the top reasons why you need to avail doorstep bike servicing
                </div>

              </div>

            </div>

            <div className='s-b-c-h-links'>
              <Link ></Link>
              <Link to="/porsche-cayenne-coupe-launched-in-india" >next <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>

          </div>


          <div className='s-b-col-2'>
            <div className='s-b-c2-h-1'>Garage on Call – Blog</div>

            <div className='s-b-c2-b'>
              <div className='s-b-c2-h-2'>Corona LOCK DOWN.. Here are the tips by Garage on Call to Keep your Bike Healthy</div>
              <div className='s-b-c2-h-3'>APRIL 7, 2020</div>
              <div className='s-b-c2-p'>Keeping bike in Garage (not using) Due to CORONA Lock Down? Here are the tips from Garage on Call experts to Keep your Bike Healthy Start the bike once in two weeks and take it around <Link target='blank' to="/corona-blog" >read_more...</Link></div>
            </div>

            <div className='s-b-c2-b'>
              <div className='s-b-c2-h-2'>Benefits of availing doorstep bike repairing and servicing.</div>
              <div className='s-b-c2-h-3'>FEBRUARY 19, 2020</div>
              <div className='s-b-c2-p'>Getting your bike to a professional garage or service provider has multiple advantages that you would surely like to explore.A well maintained and a thorough vehicle makes you save up on your time, <Link target='blank' to="/renault-sells-over-18000-units-with-the-triber-mpv-in-india" >read_more...</Link></div>
            </div>

            <div className='s-b-c2-b'>
              <div className='s-b-c2-h-2'>Bike servicing – why is it necessary</div>
              <div className='s-b-c2-h-3'>FEBRUARY 18, 2020</div>
              <div className='s-b-c2-p'>The Importance Of Bike Servicing For the smooth running, longevity and safety of your bike, regular checks should be carried out to ensure it’s running correctly. The harsh conditions of the winter can be severely <Link target='blank' to="/porsche-cayenne-coupe-launched-in-india" >read_more...</Link></div>
            </div>


            <div className='s-b-c2-b'>
              <div className='s-b-c2-h-2'>Tips for excellent bike health</div>
              <div className='s-b-c2-h-3'>FEBRUARY 17, 2020</div>
              <div className='s-b-c2-p'>Tyres Regularly check tyre condition and air pressure. Ensure tyre pressures are maintained at manufacturer recommended levels. Check your tyres for cuts and scrapes on your tires, which could cause a blowout. Also check the <Link  target='blank' to="/tata-hexa-offering-benefits-upto-₹-2-2-lakh" >read_more...</Link></div>
            </div>


          </div>




        </div>


      </div>


      <Footer />

    </div>



  )
}

export default BlogBenefits