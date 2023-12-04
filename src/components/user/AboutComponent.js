import React from 'react'
import { useCountUp } from 'react-countup';
import OurService from './OurService';
import img2 from "../../images/serviceBg-10.jpg"



const AboutComponent = () => {

    useCountUp({ ref: 'counterAbout5', end: 8, duration: 4 });
    useCountUp({ ref: 'counterAbout4', end: 4, duration: 2 });
    useCountUp({ ref: 'counterAbout7', end: 7, duration: 2, delay: 1 });
    useCountUp({ ref: 'counterAbout5000', end: 50000, duration: 2 });
    useCountUp({ ref: 'counterAbout6', end: 10, duration: 4 });

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
                        <p>Welcome to Garage On Call, where innovation meets convenience in the world of two-wheeler (bike and scooter) service and repair. We understand the challenges and inconveniences associated with traditional service models, and we are here to revolutionize your experience by bringing the garage to your doorstep.</p>
                        {/* <p>Bike lovers, daily commuters, and all bike riders in Delhi NCR, we’ve got you covered. Fast and busy life of Delhi, Noida and Gurgaon really deserves the best Garage services at home. “TIME IS MONEY” and when Mechanic and Garage comes to you, you save time and ride happily.</p>
                        <p>For all types of bike, we will come to your home or office with all bike tools and equipment to take care of your bikes from bike servicing to repairing.  Garage on Call offer online booking services for Bike servicing and repairing at customer preferred location whether it’s home or office in Noida, Greater Noida, Delhi and Gurgaon. Choose a well qualified and experienced mechanic through our portal we send mechanic at your home to repair any kind of bike related problem or regular bike servicing at home. You can book online garage services for any type of bike servicing at home in Noida, Gr.Noida and Delhi.</p>
                        <p>We work as per customer convenience we give option to customize date, time slot etc for booking then we send our Mechanic at home.</p>
                        <p>Our team of passionate and dedicated professionals can also help you at your office health & wellness program participation for road safety, road rule and regulations training etc. We work with corporate as well who used bikes for ride business or food delivery etc to bring top quality bike service on-site.</p>
                        <p>Garage On Call aims to update, fitness and quality maintenance of your two wheeler.</p> */}
                    </div>

                </div>


                <div className='about-mission-vision'>

                    <div className='about-m-v'>
                        <div className='about-m-v-heading'>Our Vision:</div>
                        <div className='about-m-v-text'>At Garage On Call, our vision is to simplify and elevate the two-wheeler service experience for individuals across Noida, Greater Noida, Ghaziabad, Delhi, Faridabad, and Gurgaon. We aim to establish ourselves as the go-to service provider that combines expertise, transparency, and convenience, ensuring your two-wheeler receives the care it deserves.</div>
                    </div>

                    <div className='about-m-v'>
                        <div className='about-m-v-heading'>Our Mission:</div>
                        <div className='about-m-v-text'>Garage On Call is on a mission to transform the way individuals perceive and experience two-wheeler service and repair. By combining cutting-edge technology, skilled professionals, and a commitment to customer satisfaction, we strive to make the entire process convenient, transparent, and reliable.</div>
                    </div>

                </div>


                <div className='about-choose-us'>
                    <div className='about-cu-img'><img src={img2} alt='img2' /></div>
                    <div className='about-cu-text'>
                        <div className='about-cu-txt-heading'>Why Garage On Call ?</div>
                        
                        <ul className='about-cu-txt-points'>
                            <li className=''><span>Innovation in Service: </span>We believe in breaking away from the conventional and embracing innovation. Our mobile service model brings skilled technicians directly to your location, saving you time and offering unmatched convenience.</li>
                            <li className=''><span>Skilled Technicians: </span> Our team of technicians is not just skilled; they are passionate about ensuring your two-wheeler runs at its best. Equipped with the latest tools and expertise, our technicians are committed to delivering top-notch service. </li>
                            <li className=''><span>Transparency in Operations: </span> Garage On Call values transparency in all interactions. From pricing to service details, we believe in keeping you informed every step of the way. No hidden costs, no surprises – just clear communication. </li>
                            <li className=''><span>Quality Parts and Service: </span> Your two-wheeler deserves the best, and we deliver that through the use of genuine and quality spare parts. Our services go beyond routine maintenance, ensuring your bike or scooter receives comprehensive care. </li>
                            <li className=''><span>Customer-Centric Approach: </span> Your satisfaction is our priority. We actively seek and value customer feedback to continuously improve our services. Garage On Call is not just a service provider; we are your partners in ensuring your two-wheeler stays in prime condition. </li>

                        </ul>
                    </div>

                </div>






                {/* <div className='about-our-work'>
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
                        <div className='about-ow-c-col-1'>
                            <iframe src="https://www.youtube.com/embed/-M0LwwWzwNU?si=jIZ1DsroWNdRnupy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='about-ow-c-col-2'>
                            <iframe src="https://www.youtube.com/embed/QTPBpmcrvRE?si=HBuEvqzv4zCQk0tZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='about-ow-c-col-3'>
                            <iframe src="https://www.youtube.com/embed/5JZfrRsOv9Y?si=4Co50OhMN5TrMDls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='about-ow-c-col-4'>
                            <iframe src="https://www.youtube.com/embed/ZJCpnk3usTo?si=c_BjV_Pt7VYThd8D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='about-ow-c-col-5'>
                            <iframe src="https://www.youtube.com/embed/me0GoTvi1Hg?si=2jhX7MY89yAwb_nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                </div> */}

                <OurService />


                <div className='about-journey'>
                    <div className='about-j-head'>Join Us on <span><br /></span>this Journey</div>
                    <div className='about-j-text'>Whether you are a daily commuter, a passionate rider, or someone who simply values their two-wheeler, Garage On Call invites you to join us on this journey of redefining convenience and quality in two-wheeler service. Book your service now, and let us bring the garage to you!</div>

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