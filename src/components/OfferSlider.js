import React from 'react'
import img1 from "../images/BIKE BANNER11-01.jpg"
import img2 from "../images/BIKE BANNER22222-02.jpg"

import Slider from "react-slick";


const OfferSlider = () => {

    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
  return (
    <div className='offer-main'>

<div className='offer-heading'>Top Offers</div>
        <div className='offer-slider'>

        <Slider {...settings}>
                {/* ---slide---- */}
               
                    <div className='offer-img'>
                       <img src={img1} alt='offer_image'/>
                    </div>
                
                {/* ---slide---- */}
               
                    <div className='offer-img'>
                       <img src={img2} alt='offer_image'/>
                    </div>
                {/* ---slide---- */}
               
                    <div className='offer-img'>
                       <img src={img1} alt='offer_image'/>
                    </div>
                {/* ---slide---- */}
               
                    <div className='offer-img'>
                       <img src={img2} alt='offer_image'/>
                    </div>


            </Slider>
          
        </div>
        
    </div>
  )
}

export default OfferSlider