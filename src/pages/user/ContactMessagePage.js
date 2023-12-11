import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'


const ContactMessagePage = () => {
  return (
    <div>
         <Navbar/>
            <div className='booked-page'>
            <div className='booked-page-content'>
                {/* <div className='booked-page-headding-1'><i class="fa-regular fa-face-smile"></i> Thanks For Booking <i class="fa-regular fa-face-smile-beam"></i></div> */}
                <div className='booked-page-headding-2'>Thanks For Contacting </div>
                <div className='booked-page-headding-3'>Our team will connect you soon</div>

                </div>

            </div>
            <Footer />
    </div>
  )
}

export default ContactMessagePage