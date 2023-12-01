import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import OfferSlider from '../components/OfferSlider'
import OurService from '../components/OurService'
import TestimonialComponent from '../components/TestimonialComponent'
import BookingComponent from '../components/BookingComponent'
import OurWork from '../components/OurWork'
import ButtonComponent from '../components/ButtonComponent'

const Home = () => {
  return (
    <div>

      <Navbar />

      <Header />

      <OfferSlider/>
      <BookingComponent />

      <OurService />
      <OurWork />

      <TestimonialComponent />

      <Footer />

      <ButtonComponent />



    </div>
  )
}

export default Home