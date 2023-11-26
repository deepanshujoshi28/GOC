import React from 'react'
import img0 from '../images/download.png'


const OurService = () => {
    return (
        <div>

            <div>
                <div className='our-service'>

                    <div className='our-service-head'>
                        <div className='our-service-c-heding-1'>Our Service</div>
                        <div className='our-service-c-heding-2'>Doorstep Bike Service and Repair</div>

                    </div>

                    <div className='our-service-content'>

                        <div className='our-s-col-1'>
                            <div className='our-s-c-heading'>We Work</div>
                            <div className='our-s-c-points'>
                                <div>Book your service on our website</div>
                                <div>Evaluation and price estimate</div>
                                <div>Our engineer reaches at your doorstep</div>
                                <div>You can watch bike serviced live</div>
                                <div>Invoicing and payment </div>
                            </div>

                        </div>

                        <img src={img0} />

                        {/* <div className='our-s-img'>
                    <img className='our-s-img-1' src={img2} />
                    <img className='our-s-img-2 imgrot' src={img1} />
                </div> */}

                        <div className='our-s-col-2'>
                            <div className='our-s-c-heading'>Locations</div>
                            <div className='our-s-l-points'>
                                <div>Available in <span>Delhi</span></div>
                                <div>Available in <span>Noida</span></div>
                                <div>Available in <span>Greater Noida</span></div>
                                <div>Available in <span>Gurugram</span></div>
                                <div>Available in <span>Ghaziabad</span></div>
                                <div>Available in <span>Faridabad</span></div>
                            </div>
                        </div>

                    </div>


                </div>
                {/* <div className='our-service-c-heding-2'>Doorstep Bike Service and Repair</div> */}
                <div className=''></div>
            </div>


        </div>
    )
}

export default OurService