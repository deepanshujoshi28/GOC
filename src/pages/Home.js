import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import OfferSlider from '../components/OfferSlider'
import OurService from '../components/OurService'
import Other from '../components/Other'
import TestimonialComponent from '../components/TestimonialComponent'
import BookingComponent from '../components/BookingComponent'

const Home = () => {
  return (
    <div>

      <Navbar />

      <Header />

      <OfferSlider/>
      <BookingComponent />

      <OurService />
      <Other/>

      <TestimonialComponent />

      <Footer />

    </div>
  )
}

export default Home