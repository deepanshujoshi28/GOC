import React from 'react'
import img from '../images/profile-Icon.jpg'

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

          {/* ---------- slide-1 ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/lOmmblLpD1A?si=LXh49rOWIQxNTZc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>“A Friendly Experience”</div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>I got my bike serviced by GarageOnCall. Their entire team was very professional. Their skilful advisor Rohan Singh asked me if I had any specific problems with the car and advised to get replaced worn-off parts with 100% genuine parts. I ended up paying much lesser than what the other service centres usually charge.</div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                  <div className='tes-s-image'><img src={img} /></div>
                  <div className='tes-s-name'>Aman Malhotra</div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide-2 ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/lOmmblLpD1A?si=LXh49rOWIQxNTZc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>“A Friendly Experience”</div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>I got my bike serviced by GarageOnCall. Their entire team was very professional. Their skilful advisor Rohan Singh asked me if I had any specific problems with the car and advised to get replaced worn-off parts with 100% genuine parts. I ended up paying much lesser than what the other service centres usually charge.</div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                  <div className='tes-s-image'><img src={img} /></div>
                  <div className='tes-s-name'>Aman Malhotra</div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide-3 ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/lOmmblLpD1A?si=LXh49rOWIQxNTZc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>“A Friendly Experience”</div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>I got my bike serviced by GarageOnCall. Their entire team was very professional. Their skilful advisor Rohan Singh asked me if I had any specific problems with the car and advised to get replaced worn-off parts with 100% genuine parts. I ended up paying much lesser than what the other service centres usually charge.</div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                  <div className='tes-s-image'><img src={img} /></div>
                  <div className='tes-s-name'>Aman Malhotra</div>

                </div>
                <div className=''></div>

              </div>

            </div>
          </div>


          {/* ---------- slide-4 ---------- */}
          <div>
            <div className='testimonial-slide'>
              <div className='tes-s-video'><span><iframe src="https://www.youtube.com/embed/lOmmblLpD1A?si=LXh49rOWIQxNTZc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></div>
              <div className='tes-s-content'>
                <div className='tes-s-tittle'>“A Friendly Experience”</div>
                <div className='tes-s-stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className='tes-s-icon'>“</div>
                <div className='tes-s-comment'>I got my bike serviced by GarageOnCall. Their entire team was very professional. Their skilful advisor Rohan Singh asked me if I had any specific problems with the car and advised to get replaced worn-off parts with 100% genuine parts. I ended up paying much lesser than what the other service centres usually charge.</div>
                <div className='tes-s-icon'>”</div>
                <div className='tes-s-user'>
                  <div className='tes-s-image'><img src={img} /></div>
                  <div className='tes-s-name'>Aman Malhotra</div>

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