import React from 'react';

const DiscountPopup = ({ name }) => {
  return (
    <div className='discount'>
      <h1>congratulations</h1>
      <h6>You got a 20% off to visit </h6>
      <h3>{name}</h3>
    </div>
  );
};
export default DiscountPopup;
