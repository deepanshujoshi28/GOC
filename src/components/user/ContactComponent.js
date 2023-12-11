import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ContactComponent = () => {



  
  // ----------------------------------------------------------------------------------------------------------------------------------------------------


  const [data, setData] = useState({
    name: "",
    city: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };



  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      city: data.city,
      number: data.number,
      email: data.email,
      subject: data.subject,
      message: data.message
    };
    axios
      .post("http://localhost:2000/contact", userData)
      .then((response) => {
        console.log(response);
        navigate("/contact-confirm")
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };


  // -----------------------------------------------------------------------------------------------------------------------------

  
  
  
  
  
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
            <form className='contact-frm'  onSubmit={handleSubmit}>
              <div>
                <input required placeholder='* Your Name ' name='name' value={data.name} onChange={handleChange} />
                <input placeholder='Your City' name='city' value={data.city} onChange={handleChange} />
                <input required placeholder='* Your Number' type='number'name='number' value={data.number} onChange={handleChange} />
                <input placeholder='Your Email ' type='mail'name='email' value={data.email} onChange={handleChange} />
              </div>
              <input placeholder='Subject' name='subject' value={data.subject} onChange={handleChange}/>
              <textarea required rows="3" placeholder='* How can we help you?' name='message' value={data.message} onChange={handleChange}/>
              <button>Contact</button>
            </form>
            {/* form end */}
          </div>
          {/* col-2 end */}
        </div>


 
        {/* <div className='contact-we-assist'>
          <div className='contact-w-a-heading'>How Can We Assist You?</div>
          <div className='contact-w-a-content'>
            <ul>
            <li className='contact-w-a-p'><span>Service Booking: </span> &nbsp;  Need to schedule a service for your bike or scooter? Visit our website or give us a call, and our team will guide you through the booking process.</li>
            <li className='contact-w-a-p'><span>General Inquiries: </span>  &nbsp;  Have questions about our services, pricing, or service areas? Feel free to reach out via phone or email, and we'll provide the information you need.</li>
            <li className='contact-w-a-p'><span>Feedback and Suggestions:  </span> &nbsp; Your feedback is valuable to us. Whether you've recently used our services or have suggestions for improvement, we want to hear from you. </li>
            

            </ul>
          </div>
        </div>


        <div className='contact-operating-hours'>
          <div className='contact-o-h-heading'>Operating Hours</div>
          <div className='contact-o-h-p'>Our customer support team is available during regular business hours to assist you. If you require urgent assistance, please contact our mobile helpline for prompt attention.</div>
        </div> */}




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

          <div className='contact-connect'>At Garage On Call, we are committed to providing you with a seamless and satisfying two-wheeler service experience. Contact us today, and let us take care of your bike or scooter maintenance needs at your doorstep!</div>

        </div>




      </div>

    </div>
  )
}

export default ContactComponent