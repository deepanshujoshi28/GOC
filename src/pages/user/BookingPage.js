import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import BookingComponent from '../../components/user/BookingComponent'
import ButtonComponent from '../../components/user/ButtonComponent'


const BookingPage = () => {
  return (
    <div>
        
        <Navbar />

        <BookingComponent />

        <Footer />
        <ButtonComponent />

    </div>
  )
}

export default BookingPage