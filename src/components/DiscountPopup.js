import React from 'react';
import {FaWindowClose} from 'react-icons/fa'


const DiscountPopup = ({ name,clicked }) => {
  return (

    <div className='discount'>
      <h1>congratulations!</h1>
      <p>You got a <span>20%</span> off to visit </p>
      <h3>{name}</h3>
      <FaWindowClose className='discount-icon' onClick={clicked}/>
    </div>
    
  );
};
export default DiscountPopup;
