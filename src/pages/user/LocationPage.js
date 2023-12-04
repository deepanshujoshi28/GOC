import React from 'react'
import LocationPageComponent from '../../components/user/LocationPageComponent'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'

const LocationPage = () => {
  return (
    <div>
        <Navbar/>
        <LocationPageComponent />
        <Footer />
    </div>
  )
}

export default LocationPage