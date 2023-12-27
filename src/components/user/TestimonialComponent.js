import React from 'react'
import img from '../../images/profile-Icon.jpg'

import Slider from "react-slick";


const TestimonialComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        
        <div>
      <div className='testimonial-main'>
        <div className='tes-main-heading-1'>Customers Speaks</div>
        <div className='tes-main-heading-2'>What Garage On Call customers says about us</div>
        <div className='tes-main-heading-3'>
          Rated 4.7 on Google <span className=''>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </span>

        </div>

      </div>

      <div className='testimonial-content'>
        <Slider {...settings}>

          

          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/sai_qfKh6Ss?si=n1YTm4B8x1D-ngFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Thanks To GarageOnCaIl ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             Best bike service... Garage On Call made bike repair so convenient. The technician arrived on time, fully equipped, and fixed my bike efficiently. Five stars for professionalism and expertise!
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Lalita Kumari
                 
                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>





          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/IN_USVEk4lk?si=4eWnrHFLruv1mYZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  “Unimaginable Services”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
                Services are really good & it's unimaginable to get the services at your doorstep beings at your comfort zone. Technician was very helpful & had good knowledge of his work to detect fault in engine in just few minutes & also he cater that at minimum cost.
                  
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  Ashutosh Ranjan
                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/UwQsYS3Cga8?si=DuXJBCBDvaV-vYtu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Confident Technician ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             Good service. Go with confidence. The service person Mohit was professional and given all knowledge about everything he does to service my bike. The only missing part is washing of bike. My bike is running awesome after service. Keep up the good work guys!!
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Amit Dutt Srivastava

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>






          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/LGQMXYEKuoQ?si=XJI5h6hGSTJZ53kx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Fantastic Experience ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             I had a fantastic experience with Garage On Call's doorstep bike repair service. Their skilled mechanic arrived promptly and fixed my bike's issues efficiently. Convenient and professional – I highly recommend their service to anyone in need of bike repairs.
                  
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Shivam Singh

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>






          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/MKrmn8oIUL4?si=uet7amMPOhjPFGzT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Thanks To GarageOnCall ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             Alam, is fine mechanic.i really appreciate his work.He is on time and give me great service he also check the whole bike...and also give me feedback how I maintain my bike properly thank u Garage on call.
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Shradul Singh

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>






          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/ABY5xtBcBr8?si=-FBtjX3tDMovbu2q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Great Experience ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             Great experience, Their professionalism, attention to detail, transparency, and dedication to customer satisfaction are truly commendable. I wholeheartedly recommend their services to any cyclist in need of bike maintenance or repairs.
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Swatantra Srivastava 

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/k7itIkYzzGE?si=gs9gz3-xhjyErgBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Great GarageOnCall ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             The whole experience is very good. The mechanics are very versed in their field and the prices are quote reasonable for the amount of effort that goes in. Highly recommended.
                  
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Durva Joshi

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/Qh10Zvqa9-E?si=IoENC80n4fd39z6F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>
                  {/* -------- title --------- */}
                  “ Just call GarageOnCall ”
                </div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>
             {/* --------- comment ---------------- */}
             mechanic but even after a whole day keeping it with them they were not able to start it. Just gave GARAGE ON CALL mechanics a call and they reached at the exact same time as was told. Within 1 and half hours they got bike started. Even i didn't spent that much as i was expecting.
                  </div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                   
                  <div className='tes-s-name'>
                  {/* -------- name --------- */}
                  Imran Imran

                  </div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>




        </Slider>
      </div>

    </div>
        

    </div>
  )
}

export default TestimonialComponent