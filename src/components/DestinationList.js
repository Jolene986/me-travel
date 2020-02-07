import React from 'react';
import SmallDestination from './SmallDestination';

const DestinationList = ({ destinations }) => {
  if (destinations.lenght === 0) {
    return (
      <div className='empty-search'>
        <h3>Unfortunately there is no rooms mached your search</h3>
      </div>
    );
  }

  return (
    <section className='destinationlist'>
      <div className='destinationlist-center'>
        {destinations.map(item => (
          <SmallDestination key={item.id} destination={item} />
        ))}
      </div>
    </section>
  );
};

export default DestinationList;
