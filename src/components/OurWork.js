import React from 'react'
import img1 from "../images/handshake-2.jpg"
import img2 from "../images/serviceBg-10.jpg"

const OurWork = () => {
  return (
    <div>

                
<div className='about-how-work'>
    <div className='about-hw-img'><img src={img1} alt='img1'/></div>
    <div className='about-hw-text'>
        <div className='about-hw-txt-heading'>How Garage On Call Work's</div>
        <div className='about-hw-txt-text'>
            Garage on Call offer online booking services for Bike servicing and repairing at customer preferred location whether it's home or office.
        </div>
        <div className='about-hw-txt-points'>
            <div className=''>Book your service on our website</div>
            <div className=''>Our engineer reaches at your doorstep</div>
            <div className=''>Evaluation and price estimate</div>
            <div className=''>You can watch bike serviced live</div>
            <div className=''>Invoicing and payment ( Google Pay / paytm / NEFT )</div>
        </div>
    </div>
</div>

<div className='about-choose-us'>
    <div className='about-cu-text'>
        <div className='about-cu-txt-heading'>Why Choose Garage On Call ?</div>
        <div className='about-cu-txt-text'>
            Choose a well qualified and experienced mechanic through our portal our mechanic reach at your doorstep to repair any kind of bike related problem or regular Bike servicing at home any where.
        </div>
        <div className='about-cu-txt-points'>
            <div className=''>8+ years of experience</div>
            <div className=''>Doorstep service No queue</div>
            <div className=''>Qualified and trusted Engineer</div>
            <div className=''>Timely service reminder</div>
            <div className=''>7 days Warranty on parts replaced</div>
            <div className=''>Genuine Parts and Lubricants</div>
        </div>
    </div>
    <div className='about-cu-img'><img src={img2} alt='img2' /></div>

</div>

        
    </div>
  )
}

export default OurWork