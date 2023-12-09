import React, { useState } from 'react'
import OfferPopup from './OfferPopup'
import { Link } from 'react-router-dom';

const ButtonComponent = () => {

    const [openModal, setOpenModal] = useState(true);


   
    const [toggle, setToggle] = useState(true);
  
    const handleClick = () => {
      setToggle(!toggle)
    };
  
    
    return (
        <div>
            <div>

                <OfferPopup open={openModal} onClose={() => setOpenModal(false)} />
                {/* <button className='button-call-btn'>
                    <div>Call Now</div>
                </button> */}

            </div>

            <div className='side-fix-buttons'>
                <div className='side-fix-heading'>FOLLOW US</div>
                <div className='side-fix-buttons-icon'><br />
                    <div className='side-fix-b-icon'><Link to="https://www.youtube.com/@GarageOnCall" target='blank'><i class="fa-brands fa-youtube"></i></Link></div>
                    <div className='side-fix-b-icon'><Link to="https://www.facebook.com/garageoncallofficial/" target='blank'><i class="fa-brands fa-square-facebook"></i></Link></div>
                    <div className='side-fix-b-icon'><Link to="https://www.instagram.com/garageoncallofficial/" target='blank'><i class="fa-brands fa-instagram"></i></Link></div>
                    <div className='side-fix-b-icon'><Link to="https://www.linkedin.com/company/garage-on-call/" target='blank'><i class="fa-brands fa-linkedin"></i></Link></div>
                    <div className='side-fix-b-icon'><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FGarageoncall" target='blank'><i class="fa-brands fa-square-x-twitter"></i></Link></div>

                </div>


            </div>
            <div className='contact-fix-btn'>
                <div className='call-fix-buttons'><Link to="tel:01204225828" target='blank'><i class="fa-solid fa-phone-volume"></i></Link></div>
                <div className='whatsapp-fix-buttons'><Link to="https://wa.me/+919658124124?text=Hello ! I'm Interested in Doorstep Bike Service. Please contact me." target='_blank'><i class="fa-brands fa-whatsapp"></i></Link></div>
                <button onClick={() => setOpenModal(true)} className='offerButton'><i class="fa-solid fa-gift pop-outin "></i></button>

            </div>

{/* 

            <div className='help-fix-btn'>
                <button className='help-fix-btn'><i class="fa-solid fa-circle-exclamation"></i>&nbsp;<span>Need Help? any complaint</span></button>

            </div>
            <div className=''></div>
            <div className=''></div> */}



{toggle ?
        <div>
          <button onClick={handleClick} className='help-fix-btn'><i class="fa-solid fa-circle-exclamation"></i>&nbsp;<span>Need Help? / any complaint?</span></button>
          
        </div>
        :
        <div className='help-fix-frm'>
        
            <form className='help-fix-form'>
              <input placeholder='your number' />
              <input placeholder='subject' />
              <textarea rows={5} placeholder='your message' />
              <button className='help-fix-form-btn' >submit</button>
            </form>
          <button  onClick={handleClick} className='help-fix-close-btn'><i class="fa-regular fa-circle-xmark"></i></button>
       
        </div>
        }



        </div>
    )
}

export default ButtonComponent