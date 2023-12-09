import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import { Header } from '../../components/user/Header'
import OfferSlider from '../../components/user/OfferSlider'
import OurService from '../../components/user/OurService'
import TestimonialComponent from '../../components/user/TestimonialComponent'
import BookingComponent from '../../components/user/BookingComponent'
import OurWork from '../../components/user/OurWork'
import ButtonComponent from '../../components/user/ButtonComponent'

const Home = () => {
  return (
    <div>

      <Navbar />

      <Header />

      <OfferSlider/>
      <BookingComponent />
<div className='home-pg-padding'>
      <OurService />

</div>
      <OurWork />

      <TestimonialComponent />

      <Footer />

      <ButtonComponent />



    </div>
  )
}

export default Home