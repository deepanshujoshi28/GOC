import React from 'react'
import img1 from "../../images/handshake-2.jpg"
import img2 from "../../images/serviceBg-10.jpg"

const OurWork = () => {
    return (
        <div>


            <div className='our-work'>
                <div className='our-work-img'><img src={img1} alt='img2' /></div>
                <div className='about-cu-t'>
                    <div className='our-work-txt-heading'>Why Choose Garage On Call ?</div>
                    <div className='our-work-txt-text'>
                    At Garage On Call, we understand the significance of your two-wheeler, and we're dedicated to providing a service experience that goes beyond the ordinary. Here are compelling reasons why Garage On Call stands out as your preferred choice for doorstep bike and scooter service
                    </div>
                    <div className='our-work-txt-points'>
                        <div className=''>Convenience at Your Doorstep</div>
                        <div className=''>Expert Technicians</div>
                        <div className=''>Transparent Pricing</div>
                        <div className=''>Genuine Parts and Lubricants</div>
                        <div className=''>Customer Satisfaction Guaranteed</div>
                        <div className=''>Prompt and Professional Service</div>
                    </div>
                </div>

            </div>



            <div className='our-work'>
                <div className='about-cu-t'>
                    <div className='our-work-txt-heading'>How Garage On Call Works ?</div>
                    <div className='our-work-txt-text'>
                    Welcome to Garage On Call, where we redefine the two-wheeler service experience by bringing our expertise to your doorstep. Our streamlined process ensures a hassle-free and efficient service, saving you time and effort. Here's how Garage On Call works
                    </div>
                    <div className='our-work-txt-points'>
                        <div className=''>Book a Service</div>
                        <div className=''>Technician Dispatch</div>
                        <div className=''>Service On The Spot</div>
                        <div className=''>Transparent Communication</div>
                        <div className=''>Quality Assurance</div>
                        <div className=''>Payment and Feedback</div>
                    </div>
                </div>
                <div className='our-work-img'><img src={img2} alt='img2' /></div>

            </div>


        </div>
    )
}

export default OurWork