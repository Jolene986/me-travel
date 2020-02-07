import React from 'react';

export const Loader = ({ src }) => {
  return (
    <div className='loading'>
      <img src={src} alt='loader-stars' />
    </div>
  );
};
