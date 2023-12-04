import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'

const ServicePage = () => {
  return (
    <div>
      <Navbar />

      <div className=''>
        <div className='our-service-page-heading-1'>Our Services - <span>Garage On Call</span></div>
        <div className='our-service-page-text'>Welcome to Garage On Call, where we bring exceptional two-wheeler (bike and scooter) service and repair right to your doorstep. Our commitment is to provide you with a hassle-free and convenient experience, ensuring your two-wheeler stays in optimal condition. Explore the range of services we offer</div>

        <div className='our-service-page-col'>
          <div className='our-s-p-col-1'>

            <div>
              <div className='our-s-p-col-h'>Regular Servicing:</div>
              <div className='our-s-p-col-p'>Ensure the longevity and performance of your bike or scooter with our regular servicing. Our skilled technicians perform comprehensive checks, oil changes, and tune-ups, keeping your two-wheeler running smoothly.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>Breakdown Assistance:</div>
              <div className='our-s-p-col-p'>Stuck on the roadside with a breakdown? Fret not! Garage On Call offers prompt breakdown assistance. Our technicians will reach your location swiftly, diagnosing and resolving issues on the spot.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>Engine Diagnostics:</div>
              <div className='our-s-p-col-p'>For those mysterious engine troubles, our advanced diagnostic tools and experienced technicians will identify the root cause. Trust Garage On Call to get your engine purring perfectly again.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>Battery Replacement:</div>
              <div className='our-s-p-col-p'>Is your bike or scooter struggling to start? Our technicians will assess your battery's health and, if necessary, provide a swift replacement with high-quality batteries to keep you on the move.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>Tire and Tube Replacement:</div>
              <div className='our-s-p-col-p'>Worn-out tires or damaged tubes can compromise your safety. Garage On Call offers efficient tire and tube replacement services to ensure your two-wheeler maintains excellent traction and stability.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>Oil Change:</div>
              <div className='our-s-p-col-p'>Regular oil changes are crucial for engine health. Garage On Call ensures your bike or scooter receives the right type and amount of oil, promoting smooth functioning and longevity.</div>

            </div>


            <div>
              <div className='our-s-p-col-h'>And More:</div>
              <div className='our-s-p-col-p'>Our services go beyond routine maintenance. Whether it's brake repairs, electrical issues, or any other mechanical problem, Garage On Call has the expertise and equipment to handle it all. We pride ourselves on offering a comprehensive suite of services to meet all your two-wheeler needs.</div>

            </div>








          </div>
          <div className='our-s-col-2'></div>

        </div>
      </div>



      <Footer />
    </div>
  )
}

export default ServicePage