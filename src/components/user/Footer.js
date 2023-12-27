import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        
        <div>
      {/* <div>Footer</div> */}
      <div>
        {/* <div>Footer</div> */}
        <div className='footer-main'>

          {/* footer Head */}
          <div className='footer-head'>
            <div className='fh-logo'>
              <div className='fh-l-logo'><Link to='/'><span> <i className="fa-solid fa-screwdriver-wrench"></i> Garage</span> On Call</Link></div>
              <div className='fh-l-tagline'>ride with happiness</div>
            </div>

            <div className='fh-address'>
              <div className='fh-address-h'>Corporate Office</div>
              <div className='fh-address-p'>210, 2nd Floor, Ocean Plaza, Sector-18, Noida - 201301</div>
            </div>
          </div>

          {/* footer content */}
          <div className='footer-content'>

            {/* fc-cols */}
            {/* col-1 */}
            <div className='fc-col-1'>
              <div className='fc-c-h'>Comapny</div>
              <div className='fc-c-c f-bfr'>

                <Link to="/welcome">Welcome</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/disclaimer">Term & Condition</Link>
                {/* <Link to="/other">Other</Link> */}
                {/* <Link>Booking</Link> */}

              </div>
            </div>

            {/* col-2 */}
            <div className='fc-col-2'>
              <div className='fc-c-h'>Contact</div>
              <div className='fc-c-c'>

                <div><i className="fa-regular fa-envelope"></i> &ensp; support@garageoncall.com</div>
                <div><i className="fa-solid fa-phone-volume"></i> &ensp; 0120 4225828</div>
                <div><i className="fa-brands fa-whatsapp"></i> &ensp; +91 9658-124-124</div>
                <div><i className="fa-solid fa-globe"></i> &ensp; https://garageoncall.com</div>

              </div>

            </div>

            {/* col-3 */}
            <div className='fc-col-3'>
              <div className='fc-c-h'>Social Media</div>
              <div className='fc-c-c f-bfr'>

                <Link to="https://www.facebook.com/garageoncallofficial/" target='_blank'><i className="fa-brands fa-facebook-f"></i> &ensp; FaceBook</Link>
                <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FGarageoncall" target='_blank'><i className="fa-brands fa-x-twitter"></i> &ensp; Twitter</Link>
                <Link to="https://www.instagram.com/garageoncallofficial/" target='_blank'><i className="fa-brands fa-instagram"></i> &ensp; Instagram</Link>
                <Link to="https://www.linkedin.com/company/garage-on-call/" target='_blank'><i className="fa-brands fa-linkedin-in"></i> &ensp; Linkedin</Link>

              </div>
            </div>

            {/* col-4 */}
            <div className='fc-col-4'>
              <div className='fc-c-h'>Available In</div>
              <div className='fc-c-c f-bfr'>

                <div>&ensp;Delhi</div>
                <div>&ensp;Noida & Greater Noida</div>
                <div>&ensp;Gurugram</div>
                <div>&ensp;Ghaziabad</div>
                <div>&ensp;Faridabad</div>

              </div>
            </div>


            {/* col-5 */}
            <div className='fc-col-5'>
              <div className='fc-c-h'>Join Us</div>
              <div className='fc-c-c'>
                <div className='fc-c-text'>Join us to get the best doorstep <br />bike service at your location by experts.</div>
                <div className='fc-c-form'>
                  <input type='number' placeholder='Your number' />
                  <button>Join Us</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='footer-cc'>Copyright <i className="fa-regular fa-copyright"></i> 2023, Garage on Call. All Rights Reserved.</div>

      </div>

    </div>
        
    </div>
  )
}

export default Footer