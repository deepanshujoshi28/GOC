import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <div>


            <div className='nav-sticky'>
                <header>
                    <div className='nav-logo'><Link to='/'><span> <i class="fa-solid fa-screwdriver-wrench"></i> Garage</span> On Call</Link></div>

                    <nav ref={navRef}>


                        <Link to='/book-an-appointment'>BOOK SERVICE</Link>
                        <Link to='/our-price'>PRICING</Link>
                        <Link to='/contact-us'>CONTACT</Link>

                        <div href='' className='nav-drop'>
                            <span>COMPANY <i class="fa-solid fa-caret-down"></i></span>
                            <div className='nav-drop-content'>
                                <div className='nav-d-c-link'>
                                    <Link to='/about-us'>About Us</Link>
                                    <Link to="/our-team">Our Team</Link>
                                    <Link to='/customer-reviews'>Testimonial</Link>
                                    <Link to='/blog-and-articles'>Blogs</Link>
                                    {/* <Link>Join US</Link> */}
                                    {/* <Link>Career</Link> */}
                                </div>
                            </div>
                        </div>

                        <button className='nav-btn nav-close-btn' onClick={showNavbar}><i class="fa-solid fa-circle-xmark"></i></button>
                    </nav>
                    <button className='nav-btn menu-btn' onClick={showNavbar}><i class="fa-solid fa-bars"></i></button>
                    <div className='nav-end'>

                        <div></div>
                        <div className='nav-end-start'>

                            <Link to='#' className='ld' >Login / Register</Link>
                            <Link to='#' className='sd' ><i class="fa-solid fa-user"></i></Link>

                        </div>
                        <></>
                        <div className='nav-end-end'>

                            <Link to='#' className='ld'><i class="fa-solid fa-cart-shopping"></i></Link>
                            <Link to='#' className='ld'><i class="fa-solid fa-location-dot"></i></Link>
                            <input className='nav-inp ld' type='text' placeholder='Location....' />
                            <Link to='#' className='sd' ><i class="fa-solid fa-location-crosshairs"></i></Link>
                        </div>

                    </div>
                </header>
            </div>


        </div>
    )
}

export default Navbar