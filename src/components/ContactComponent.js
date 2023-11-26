import React from 'react'

const ContactComponent = () => {
  return (
    <div>

      <div className='contact-mn' >

        <div className='contact-page'>

          {/* col-1 */}
          <div className='contact-col-1'>
            <div className='cont-map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.014336785242!2d77.3256289!3d28.569332199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44943d78a13%3A0x29ae137fea9ed1!2sBhumu%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1700459857718!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* col-2 */}
          <div className='contact-col-2'>
            <div className='contact-col-2-h1'>Contact Us</div>
            <div className='contact-col-2-h2'>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i></span> Garage On Call</div>
            <div className='contact-col-2-h3'>We're here to help you</div>
            <div className='contact-col-2-h4'>Fill out the form to contact our team.</div>
            {/* contact form */}
            <form className='contact-frm'>
              <div>
                <input placeholder='* Your Name ' />
                <input placeholder='Your City' />
                <input placeholder='* Your Number' type='number' />
                <input placeholder='Your Email ' type='mail' />
              </div>
              <input placeholder='Subject' />
              <textarea rows="3" placeholder='* How can we help you?' />
              <button>Contact</button>
            </form>
            {/* form end */}
          </div>
          {/* col-2 end */}
        </div>


        <div className='contact-top'>

          {/* c-t-col-1 */}
          <div className='c-t-col'>
            <div className='c-t-icon'><i class="fa-solid fa-location-dot"></i></div>
            <div className='c-t-text'>
              <div className='c-t-t-h'>Location :</div>
              <div className='c-t-t-t'>210, 2nd Floor, Ocean Plaza, <br />Sector-18, Noida - 201301</div>
            </div>

          </div>

          {/* c-t-col-3 */}
          <div className='c-t-col'>
            <div className='c-t-icon'><i class="fa-solid fa-phone-volume"></i></div>
            <div className='c-t-text'>
              <div className='c-t-t-h'>Call :</div>
              <div className='c-t-t-t'> 0120 4225828</div>
            </div>
          </div>

          {/* c-t-col-2 */}
          <div className='c-t-col'>
            <div className='c-t-icon'><i class="fa-solid fa-envelope-open-text"></i></div>
            <div className='c-t-text'>
              <div className='c-t-t-h'>Email :</div>
              <div className='c-t-t-t'>support@garageoncall.com</div>
            </div>
          </div>

          {/* c-t-col-4 */}
          <div className='c-t-col'>
            <div className='c-t-icon'><i class="fa-brands fa-whatsapp"></i></div>
            <div className='c-t-text'>
              <div className='c-t-t-h'>WhatsApp :</div>
              <div className='c-t-t-t'> +91 9658-124-124</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactComponent