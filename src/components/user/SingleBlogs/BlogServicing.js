import React from 'react'
import img from '../../../images/blog2.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const BlogServicing = () => {
  return (

<div>
    <Navbar />

    <div className='single-blog-main'>

      <div className='single-blog-cols'>

        <div className='s-b-col'> 

          <div className='s-b-col-1'>
            <div className='s-b-c-head'>
              <div className='s-b-c-h-h-1'>Bike servicing – why is it necessary</div>
              <div className='s-b-c-h-h-2'>
                <div><i class="fa-solid fa-user"></i> ADMIN</div>
                <div><i class="fa-solid fa-calendar-days"></i> February 18, 2020</div>
              </div>

            </div>
            <div className='s-b-c-img'><img src={img} /></div>
            <div className='s-b-c-para'>
              <div className='s-b-c-p-h'>The Importance Of Bike Servicing</div>
              <div className='s-b-c-p-t'>
                For the smooth running, longevity and safety of your bike, regular checks should be carried out to ensure it’s running correctly. The harsh conditions of the winter can be severely detrimental to a bikes performance and both the moving and static parts can be effected. In the road riding spectrum, the increased wet conditions of the winter combined with the constant gritting of the roads mean grime can be driven into bearings, chains and brake pads. For the devoted mountain bikers riding through the winter, the muddy, sludgy conditions that the trails can turn to make the servicing of your bike a high priority if you want it to continue riding like new. The most important reason to keep your bike serviced (whatever your discipline) is safety – if your bike is maintained and regularly serviced, the less likelihood of a mechanical issue and the safer your ride is.
              </div>
              <div className='s-b-c-p-h'>Maintain, Retain and Benefit</div>
              <div className='s-b-c-p-t'>
                If you want your bike to ride smoothly and allow you to focus 100% on your technique and the ride itself, then you will want to keep your bike tuned and serviced. For this, you’ll be rewarded, as a well looked after bike will increase your motivation, increase your performance, and enable you achieve your end goal faster. Your bike is an integral part of your cycling experience which needs as much attention as your nutrition or training plan.
              </div>

            </div>

          </div>

          <div className='s-b-c-h-links'>
          <Link to="/renault-sells-over-18000-units-with-the-triber-mpv-in-india" ><i class="fa-solid fa-arrow-left-long"></i> previous</Link>
          <Link to="/tata-hexa-offering-benefits-upto-₹-2-2-lakh" >next <i class="fa-solid fa-arrow-right-long"></i></Link>
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
            <div className='s-b-c2-p'>Tyres Regularly check tyre condition and air pressure. Ensure tyre pressures are maintained at manufacturer recommended levels. Check your tyres for cuts and scrapes on your tires, which could cause a blowout. Also check the <Link target='blank' to="/tata-hexa-offering-benefits-upto-₹-2-2-lakh" >read_more...</Link></div>
          </div>


        </div>




      </div>


    </div>


<Footer />
    
</div>
    
  )
}

export default BlogServicing