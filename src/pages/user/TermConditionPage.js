import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'

const TermConditionPage = () => {
    return (
        <div>

            <Navbar />

            <div className='termConditionMain'>



                <div className='TC-heading-1'>Terms & Conditions - <span>Garage On Call</span></div>

                <div className='TC-heading-2'>General</div>
                <div className='TC-text'>Welcome to Garage On Call. Before availing our two-wheeler (bike and scooter) service and repair at doorstep services, please read and understand the following Terms & Conditions. By using our services, you agree to comply with and be bound by these terms.</div>

                <div className='TC-heading-2'>Service Booking:</div>
                <ul className='TC-points'>
                    <li><span>Eligibility: </span> To book a service with Garage On Call, you must be at least 18 years old.</li>
                    <li><span>Accurate Information: </span> When booking a service, provide accurate and complete information about your two-wheeler, including its make, model, and service requirements.</li>
                </ul>


                <div className='TC-heading-2'>Service Delivery:</div>
                <ul className='TC-points'>
                    <li><span>Location: </span> Our doorstep services are available in Noida, Greater Noida, Ghaziabad, Delhi, Faridabad, and Gurgaon. Ensure your location falls within our service area before booking.</li>
                    <li><span>Access to Two-Wheeler:</span> You must provide Garage On Call technicians with access to your two-wheeler for the agreed-upon service. If the service cannot be completed due to inaccessibility, a rescheduling fee may apply.</li>
                </ul>


                <div className='TC-heading-2'>Payment:</div>
                <ul className='TC-points'>
                    <li><span>Charges: </span> Service charges and any applicable taxes will be communicated to you before confirming the booking. You agree to pay the specified amount for the services rendered.</li>
                    <li><span>Payment Methods:</span> Garage On Call accepts payments through various online methods. Payments are securely processed through our platform.</li>
                </ul>


                <div className='TC-heading-2'>Cancellations and Rescheduling:</div>
                <ul className='TC-points'>
                    <li><span>Cancellation Policy:</span> Cancellations made within a specific time frame are eligible for a refund. Late cancellations may incur a cancellation fee.</li>
                    <li><span>Rescheduling Fee: </span> If you wish to reschedule a service appointment, a rescheduling fee may be applicable.</li>
                </ul>


                <div className='TC-heading-2'>Customer Responsibilities:</div>
                <ul className='TC-points'>
                    <li><span>Safe Environment:</span>Ensure a safe environment for our technicians to perform the service on your two-wheeler. Clear any obstacles and provide adequate space.</li>
                    <li><span>Feedback: </span> We encourage customers to provide feedback on our services. Your insights help us improve and enhance our offerings.</li>
                </ul>







                <div className='TC-heading-2'>Limitation of Liability:</div>
                <div className='TC-text'>Garage On Call is not liable for any damages, loss, or injury arising from the use of our services. While we strive for excellence, the customer acknowledges the inherent risks associated with vehicle service and repair.</div>



                <div className='TC-heading-2'>Privacy:</div>
                <div className='TC-text'>Your privacy is crucial to us. Refer to our Privacy Policy for details on how we collect, use, and safeguard your personal information.</div>



                <div className='TC-heading-2'>Changes to Terms & Conditions:</div>
                <div className='TC-text'>Garage On Call reserves the right to modify these Terms & Conditions at any time. Users will be notified of significant changes via email or a prominent notice on our website.</div>



                <div className='TC-heading-2'>Contact Us:</div>
                <div className='TC-text'>If you have any questions or concerns about these Terms & Conditions, please contact us at query@garageoncall.com .</div>





                <div className='TC-textend'>By availing Garage On Call's services, you agree to abide by these Terms & Conditions. We appreciate your cooperation and look forward to providing you with top-notch two-wheeler service at your doorstep.</div>


            </div>


            <Footer />
        </div>
    )
}

export default TermConditionPage