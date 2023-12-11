import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import ContactComponent from '../../components/user/ContactComponent'
import ButtonComponent from '../../components/user/ButtonComponent'

const ContactPage = () => {
  return (
    <div>
        
        <Navbar />

<ContactComponent/>

        <Footer />
        <ButtonComponent />

    </div>
  )
}

export default ContactPage