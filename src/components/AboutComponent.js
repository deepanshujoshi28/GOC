import React from 'react'
import { useCountUp } from 'react-countup';
import img from "../images/handshake.jpg"
import img1 from "../images/handshake-2.jpg"
import img2 from "../images/serviceBg-10.jpg"


const AboutComponent = () => {
    
    useCountUp({ ref: 'counterAbout5', end: 5, duration: 4 });
    useCountUp({ ref: 'counterAbout4', end: 4, duration: 2 });
    useCountUp({ ref: 'counterAbout7', end: 7, duration: 2, delay: 1 });
    useCountUp({ ref: 'counterAbout5000', end: 5000, duration: 2 });
    useCountUp({ ref: 'counterAbout6', end: 6, duration: 4 });

  return (
    <div>

<div className='about-page'>


<div className='about-increment'>

    <div className='about-inc-col'>
        <span id='counterAbout5'></span> <span className='spn'></span>+
        <div className='about-inc-text'>Years of experience</div>
    </div>


    <div className='about-inc-col'>
        <span id='counterAbout4'></span><span>.</span><span id='counterAbout7'></span>  / 5
        <div className=''>Reviews Based on 10,000+</div>
    </div>


    <div className='about-inc-col'>
        <span id='counterAbout5000'></span> +
        <div className=''>Happy Customers</div>
    </div>


    <div className='about-inc-col'>
        <span id='counterAbout6'></span> +
        <div className=''>Available Cities</div>
    </div>

</div>


<div className='about-us'>
    <div className='about-us-heading'>About Us</div>
    <div className='about-us-heading-2'>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i> </span> Garage On Call</div>
    <div className='about-us-heading-3'>Your doorstep bike repairing service mechanics met in Delhi and NCR</div>
    <div className='about-us-text'>
        <p>Bike lovers, daily commuters, and all bike riders in Delhi NCR, we’ve got you covered. Fast and busy life of Delhi, Noida and Gurgaon really deserves the best Garage services at home. “TIME IS MONEY” and when Mechanic and Garage comes to you, you save time and ride happily.</p>
        <p>For all types of bike, we will come to your home or office with all bike tools and equipment to take care of your bikes from bike servicing to repairing.  Garage on Call offer online booking services for Bike servicing and repairing at customer preferred location whether it’s home or office in Noida, Greater Noida, Delhi and Gurgaon. Choose a well qualified and experienced mechanic through our portal we send mechanic at your home to repair any kind of bike related problem or regular bike servicing at home. You can book online garage services for any type of bike servicing at home in Noida, Gr.Noida and Delhi.</p>
        <p>We work as per customer convenience we give option to customize date, time slot etc for booking then we send our Mechanic at home.</p>
        <p>Our team of passionate and dedicated professionals can also help you at your office health & wellness program participation for road safety, road rule and regulations training etc. We work with corporate as well who used bikes for ride business or food delivery etc to bring top quality bike service on-site.</p>
        <p>Garage On Call aims to update, fitness and quality maintenance of your two wheeler.</p>
    </div>

</div>



<div className='about-our-work'>
    <div className='about-ow-col-1'>
        <div className='about-our-work-heading'>Our Work</div>
        <div className='about-our-work-heading-2'>
            Lorem ipsum dolor sit amet, consectetur.
        </div>
        <div className='about-our-work-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis illo assumenda magni blanditiis iusto quos, delectus voluptatem sit. In sit doloribus modi, provident animi consequatur molestiae et exercitationem obcaecati id eaque distinctio reprehenderit delectus vitae quidem quisquam quas asperiores quaerat eveniet officia magnam nostrum perferendis commodi perspiciatis. Doloribus commodi harum enim veniam, quibusdam, debitis quidem odit, iure impedit veritatis nam excepturi rem id corporis libero dolorem vitae. Quam sequi a corporis consequatur itaque veritatis nam. Minus, exercitationem. Officia, repudiandae? Culpa molestias eligendi, perferendis possimus laboriosam officiis odio, dolorum, incidunt officia quae quo suscipit libero illum ea impedit asperiores provident.
        </div>
    </div>

    <div className='about-ow-col-2'>
        <div className='about-ow-c-col-1'></div>
        <div className='about-ow-c-col-2'></div>
        <div className='about-ow-c-col-3'></div>
        <div className='about-ow-c-col-4'></div>
        <div className='about-ow-c-col-5'></div>
    </div>

</div>


{/* <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div className=''>about us - 100% width text </div>
<div className=''>How goc work  -   img     bullets points</div>
<div className=''>choose us  -     bullets points       img</div>
<div className=''>our work  -   video grid</div>
<div className=''></div>
<div className=''></div> */}

</div>
        
    </div>
  )
}

export default AboutComponent