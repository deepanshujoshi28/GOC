import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import { Link } from 'react-router-dom'

const BookedPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='booked-page'>
            <div className='booked-page-content'>
                {/* <div className='booked-page-headding-1'><i class="fa-regular fa-face-smile"></i> Thanks For Booking <i class="fa-regular fa-face-smile-beam"></i></div> */}
                <div className='booked-page-headding-2'><span><i class="fa-regular fa-face-smile"></i> </span> Thanks For Booking <span> <i class="fa-regular fa-face-smile-beam"></i></span></div>
                <div className='booked-page-headding-3'>Our technician will contact you shortly</div>
                <div className='booked-page-headding-4'>Contact Number : <Link to="tel:9658124124"> +91-9658 124 124</Link></div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default BookedPage