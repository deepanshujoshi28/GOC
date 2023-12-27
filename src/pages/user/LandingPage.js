import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/bike-parts.png'
import img2 from '../../images/mechanic.png'

const LandingPage = () => {
    return (
        <div>
            <div className='landing-page'>
                {/* ------------ lp-header -------------- */}
                <div className='landing-page-header'>
                    {/* ----------- col-1 ------------ */}
                    <div className='landing-page-header-top'>
                        <span><i class="fa-solid fa-envelope"></i> support@garageoncall.com</span>
                        <span><i class="fa-solid fa-square-phone"></i> +91-9658 124 124</span>
                    </div>

                    {/* ----------- col-2 ------------ */}
                    <div className='landing-page-nav'>
                        <div className='landing-page-nav-logo'>
                            <Link to="/" ><span> <i className="fa-solid fa-screwdriver-wrench"></i> Garage</span> On Call</Link>
                        </div>
                        <div className='landing-page-nav-buttons'>
                            <Link to="tel:01204225828">CALL NOW</Link>
                            <Link to="">BOOK NOW</Link>
                        </div>

                    </div>

                    {/* ----------- col-3 ------------ */}
                    <div className='landing-page-header-content'>

                        {/* ---------- lp-c-col-1 ---------- */}
                        <div className='landing-page-header-content-col-1'>
                            <div className='landing-page-header-content-col-1-img'><img src={img1} /></div>
                            <div className='landing-page-header-content-col-1-heading'>People trust Garrage On Call</div>
                            <div className='landing-page-header-content-col-1-stars'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className='landing-page-header-content-col-1-numbers'>

                                <div className='landing-page-header-content-col-1-numbers-col-1'>
                                    <div className='landing-page-header-content-col-1-numbers-n'>4.7/5</div>
                                    <div className='landing-page-header-content-col-1-numbers-txt'>Based on 1000+<br />reviews</div>
                                </div>

                                <div className='landing-page-header-content-col-1-numbers-col-2'>
                                    <div className='landing-page-header-content-col-1-numbers-n'>60,000+</div>
                                    <div className='landing-page-header-content-col-1-numbers-txt'>Happy<br />Customers</div>
                                </div>

                                <div className='landing-page-header-content-col-1-numbers-col-3'>
                                    <div className='landing-page-header-content-col-1-numbers-n'>8+</div>
                                    <div className='landing-page-header-content-col-1-numbers-txt'>Years Of <br />experience</div>
                                </div>

                            </div>

                        </div>

                        {/* ---------- lp-c-col-2 ---------- */}
                        <div className='landing-page-header-content-col-2'>
                            <div className='landing-page-header-content-col-2-img'><img src={img2} /></div>
                            <div className='landing-page-header-content-col-2-form'>
                                <div className='landing-page-header-content-col-2-form-heading'><img src={img2} /><span>Best <span>Bike Service</span> <br />At Your Home</span></div>
                                <form>
                                    <input type='number' placeholder='Enter Your Number' />
                                    <input placeholder='Enter Your City' />
                                    <button>BOOK NOW</button>
                                </form>
                            </div>

                        </div>

                    </div>





                    {/* ----------- col-4 ------------ */}
                    <div className='landing-page-header-bottom'>Mechanic on Call : +91-9658 124 124</div>



                </div>


                <div className='landing-page-price'>
                    <div className='landing-page-price-check'>
                        <div className='landing-page-price-check-heading'>General Bike Service <span>Check-list</span></div>
                        <div className='landing-page-price-check-list'>
                            <div>&#9989; Engine Oil Change (Price Extra)</div>
                            <div>&#9989; Oil Filter Clean (if Replace Charges)</div>
                            <div>&#9989; Air Filter Clean (if Replace Charges)</div>
                            <div>&#9989; Spark Plug Clean (if Replace Charges)</div>
                            <div>&#9989; Tightening of Screws, Bolts &amp; Nuts</div>
                            <div>&#9989; Average and Performance Check-up</div>
                            <div>&#9989; Brakes – Front &amp; Rear Adjust</div>
                            <div>&#9989; Driven Chain Basic Cleaning</div>
                            <div>&#9989; Carburettor Basic Check-up</div>
                            <div>&#9989; Minor Electrical Check-up</div>
                            <div>&#9989; Battery General Check-up</div>
                            <div>&#9989; Basic Engine Inspection</div>
                            <div>&#9989; Basic Fork Inspection</div>
                            <div>&#9989; Basic Hand Cleaning</div>
                        </div>
                    </div>
                    <div className='landing-page-price-button'>

                        <div className='landing-page-price-button-col'>
                            <div className='landing-page-price-button-col-heading-1'>Below 125 CC</div>
                            <div className='landing-page-price-button-col-heading-2'>Rs. 299 /-</div>
                            <Link to='' className='landing-page-price-button-col-button'>BOOK NOW</Link>
                        </div>


                        <div className='landing-page-price-button-col'>
                            <div className='landing-page-price-button-col-heading-1'>125 CC to 199 CC</div>
                            <div className='landing-page-price-button-col-heading-2'>Rs. 399 /-</div>
                            <Link to='' className='landing-page-price-button-col-button'>BOOK NOW</Link>
                        </div>


                        <div className='landing-page-price-button-col'>
                            <div className='landing-page-price-button-col-heading-1'>200 CC to 299 CC</div>
                            <div className='landing-page-price-button-col-heading-2'>Rs. 499 /-</div>
                            <Link to='' className='landing-page-price-button-col-button'>BOOK NOW</Link>
                        </div>


                        <div className='landing-page-price-button-col'>
                            <div className='landing-page-price-button-col-heading-1'>Above 300 CC</div>
                            <div className='landing-page-price-button-col-heading-2'>Rs. 599 /-</div>
                            <Link to='' className='landing-page-price-button-col-button'>BOOK NOW</Link>
                        </div>

                    </div>

                </div>







            </div>
        </div>
    )
}

export default LandingPage