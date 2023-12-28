import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />

      <div className='TC-text'></div>


      <div className='termConditionMain'>



        <div className='TC-heading-1'>Privacy Policy  - <span>Garage On Call</span></div>

        <div className='TC-heading-2'>General</div>
        <div className='TC-text'>At Garage On Call, we prioritize the privacy and security of our users. This Privacy Policy outlines our commitment to protecting your personal information when you use our website or avail our two-wheeler (bike and scooter) service and repair at doorstep services.</div>

        <div className='TC-heading-2'>Information We Collect:</div>
        <ul className='TC-points'>
          <li><span>Personal Information: </span>When you book a service with Garage On Call, we may collect personal information such as your name, contact number, email address, and location details to facilitate service delivery. </li>
          <li><span>Service Details: </span> To provide effective service, we may collect information about your two-wheeler, including its make, model, and service history. </li>
          <li><span>Payment Information: </span> If you make a payment through our platform, we collect payment details necessary to complete the transaction securely. </li>
        </ul>

        {/* ------------------------------------------------------------------------------- */}


        <div className='TC-heading-2'>How We Use Your Information:</div>
        <ul className='TC-points'>
          <li><span>Service Delivery: </span> We use the information you provide to schedule and deliver our doorstep services for your two-wheeler.</li>
          <li><span>Communication: </span> We may use your contact information to communicate with you regarding your service, updates, and promotional offers. You can opt-out of promotional communications at any time. </li>
          <li><span>Improving Services: </span> Your feedback and service history help us enhance our services and tailor them to meet your needs.</li>
          <li><span>Security and Fraud Prevention: </span>  We use your information to ensure the security of our platform, prevent fraud, and protect both you and Garage On Call from unauthorized activities. </li>
        </ul>





        <div className='TC-heading-2'>Information Sharing:</div>
        <ul className='TC-points'>
          <li><span>Service Providers: </span> We may share your information with trusted service providers who assist us in delivering our services, but they are bound by confidentiality agreements. </li>
          <li><span>Legal Requirements: </span> We may disclose your information if required by law, governmental agencies, or in response to a legal process.</li>
          
        </ul>








        <div className='TC-heading-2'>Data Security:</div>
        <div className='TC-text'>Garage On Call employs industry-standard security measures to protect your personal information. We use encryption, access controls, and secure data storage to safeguard your data.</div>




        <div className='TC-heading-2'>Cookies and Tracking:</div>
        <div className='TC-text'>Our website may use cookies and tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</div>




        <div className='TC-heading-2'>Third-Party Links:</div>
        <div className='TC-text'>Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of these external sites.</div>




        <div className='TC-heading-2'>Changes to Privacy Policy:</div>
        <div className='TC-text'>Garage On Call reserves the right to update or modify this Privacy Policy at any time. We will notify users of any significant changes via email or a prominent notice on our website.</div>




        <div className='TC-heading-2'>Contact Us:</div>
        <div className='TC-text'>For any questions or concerns regarding our Privacy Policy, please contact us at query@garageoncall.com .</div>



        <div className='TC-textend'>By using Garage On Call's website and services, you agree to the terms outlined in this Privacy Policy. Your trust is essential to us, and we are committed to maintaining the confidentiality and security of your information.</div>




        






        {/* <div className='TC-heading-2'>Privacy:</div>
        <div className='TC-text'>Your privacy is crucial to us. Refer to our Privacy Policy for details on how we collect, use, and safeguard your personal information.</div>



        <div className='TC-heading-2'>Changes to Terms & Conditions:</div>
        <div className='TC-text'>Garage On Call reserves the right to modify these Terms & Conditions at any time. Users will be notified of significant changes via email or a prominent notice on our website.</div>



        <div className='TC-heading-2'>Contact Us:</div>
        <div className='TC-text'>If you have any questions or concerns about these Terms & Conditions, please contact us at [Your Contact Information].</div>





        <div className='TC-textend'>By availing Garage On Call's services, you agree to abide by these Terms & Conditions. We appreciate your cooperation and look forward to providing you with top-notch two-wheeler service at your doorstep.</div> */}


      </div>



      <Footer />

    </div>
  )
}

export default PrivacyPolicy