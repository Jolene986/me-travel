import React from 'react';
import loader from '../images/gif/stars-loader.gif';
export const Loading = () => {
  return (
    <div className='loading'>
      <img src={loader} alt='loader-stars' />
    </div>
  );
};
