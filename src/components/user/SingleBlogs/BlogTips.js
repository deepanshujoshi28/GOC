import React from 'react'
import img from '../../../images/Blog3.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'


const BlogTips = () => {
  return (



    <div>
      <Navbar />

      <div className='single-blog-main'>

        <div className='single-blog-cols'>

          <div className='s-b-col'>

            <div className='s-b-col-1'>
              <div className='s-b-c-head'>
                <div className='s-b-c-h-h-1'>Tips for excellent bike health</div>
                <div className='s-b-c-h-h-2'>
                  <div><i class="fa-solid fa-user"></i> ADMIN</div>
                  <div><i class="fa-solid fa-calendar-days"></i> February 17, 2020</div>
                </div>

              </div>
              <div className='s-b-c-img'><img src={img} /></div>
              <div className='s-b-c-para'>

                <div className='s-b-c-p-h'>Tyres</div>
                <div className='s-b-c-p-t'>
                  Regularly check tyre condition and air pressure. Ensure tyre pressures are maintained at manufacturer recommended levels. Check your tyres for cuts and scrapes on your tires, which could cause a blowout. Also check the tyre treads once a week and have the wheels balanced and the alignment checked if the wear is uneven.
                </div>


                <div className='s-b-c-p-h'>Engine Oil</div>
                <div className='s-b-c-p-t'>
                  Engine oil plays an important role in ensuring smooth operation and maintenance of the bike and maintaining a correct engine oil level is important. Check engine oil level regularly. Check for oil leakage. The oil thickens due to carbon deposits creating drag in the movement of engine internals. Running the bike on dirty oil will not only increase fuel consumption but also reduce the life of the engine.
                </div>



                <div className='s-b-c-p-h'>Air Filter</div>
                <div className='s-b-c-p-t'>
                  Keep the air filter clean as dusty conditions in India tend to clog up the filter in no time. Change the air filter at recommended intervals and increase the cleaning frequency in particularly dusty climes.
                </div>



                <div className='s-b-c-p-h'>Clutch</div>
                <div className='s-b-c-p-t'>
                  Should be properly adjusted and have the right amount of free play. An over tightened clutch will cause it to slip unnoticeably and increase the fuel consumption while also burning it out quickly.
                </div>



                <div className='s-b-c-p-h'>Engine</div>
                <div className='s-b-c-p-t'>
                  Regular servicing and tune-ups will keep the engine running like clockwork and reduce your petrol bills. Pay special attention to cleaning the carburetor and maintaining valve clearances. Keep carburetor clean. Every 1500 km, clean out the carburetor float chamber and other parts. Don’t neglect the spark plug, ensure it is clean, the gap is set correctly or replace it if past its prime as it’s the most crucial link in proper combustion. Clean spark plug regularly, preferably every 750 km for two-stroke bike and every 1,500 km for four-stroke bike. Most modern bikes require the choke to be used on cold starts as they run lean to meet emission norms as well as fuel efficiency requirements.
                </div>



                <div className='s-b-c-p-h'>Transmission System</div>
                <div className='s-b-c-p-t'>
                  A bike’s chain needs regular lubrication, cleaning and adjustment. Wash the chain with paraffin, a soft brush and a piece of cloth and remove the dirt accumulated in the chain. Don’t use water as it might rust the chain links. After the dirt is cleaned with the brush and paraffin wipe the chain with a clean dry cloth. Lubricate the chain links and the chain with used engine oil. Check if your bike’s chain has a free play of 2-4 mm in general by moving the chain up and down in a vertical direction with your fingers. Your bike’s chain must have the correct tension and free play of the rear wheel. If the tension is more the chain wont power the rear wheel smoothly during motion. If in case the chain is loose, the power delivery from the engine to the rear wheel won’t be optimal and there will be loss of power due to slippage. Take the bike to your mechanic or service center and get it adjusted to the manufacturer’s specifications.
                  Never over rev your RPM going at high-speeds continuously, as it may damage your bike’s engine.
                  Never shift your bike from fifth gear to first gear instantaneously because it damages the piston rings.
                </div>



                <div className='s-b-c-p-h'>Cleaning</div>
                <div className='s-b-c-p-t'>
                  Clean the two-wheeler body surface regularly to maintain the surface finish. Before cleaning the motorcycle, ensure that the ignition switch unit, H.T. Coil and silencer are covered using plastic sheets. Avoid exposing it to direct sunlight, try parking your bike near some shade because it becomes dull if exposed to frequent sunlight.
                </div>



                <div className='s-b-c-p-h'>Battery</div>
                <div className='s-b-c-p-t'>
                  The motorcycle battery needs periodical maintenance to ensure a long and trouble free life. Top up with distilled water whenever required. Check for any leakage from battery. It should be clean and free from any leakages. In case of non-use of motorcycle, battery should be kept fully charged.
                </div>



                <div className='s-b-c-p-h'>Brakes</div>
                <div className='s-b-c-p-t'>
                  Keep both brakes properly spaced. Keeping them too tight (too urgent), or too loose (too late) is dangerous. Brakes should be tightened as per the rider’s personal style and requirement. Get your bike’s brake pads replaced (front) if screeching sound persists, as sometimes it happens due to lack of oil also.

                  Change your bike’s fork oil once in every 12000 kilometers.
                  Check sprockets and replace them if necessary (wear out limit 40000 kilometers).

                  Try and maintain a speed of 40 to 60 kilometers.

                  Always ensure that the tax is paid and Insurance cover (Insurance policy) is within validity period. Keep Tax Receipt and Insurance policy at home and keep Photo copy with bike.

                </div>




              </div>

            </div>

            <div className='s-b-c-h-links'>
              <Link to="/porsche-cayenne-coupe-launched-in-india" ><i class="fa-solid fa-arrow-left-long"></i> previous</Link>
              <Link to="/corona-blog" >next <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>

          </div>

          <div>

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


      </div>


      <Footer />

    </div>




  )
}

export default BlogTips