import React from 'react'
import { Link } from 'react-router-dom';

const OfferPopup = ({ open, onClose }) => {

    if (!open) return null;

    
  return (
    <div>

<div className='offer-popup'>


<div className='offer-section'>
            <button className='offer-closeBtn' onClick={onClose}> <i class="fa-regular fa-circle-xmark offer-icon"></i></button>
    <div className='offer-popup-main'>
        <div className='offer-content'>
            <div className='offer-text-1'>Get Upto</div>
            <div className='offer-text-2'>30% OFF</div>
            <div className='offer-text-3'>On Bike Service and parts replacement</div>
            <input placeholder='enter your number' type='number'/><br/>
        <button className='offer-claim' >Book Service</button>
        </div>
    </div>

</div>


</div>
        
    </div>
  )
}

export default OfferPopup