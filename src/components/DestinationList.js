import React, {useContext} from 'react';
import SmallDestination from './SmallDestination';
import { DestinationContext } from '../context';


const DestinationList = () => {
  const {sortedDestinations}=useContext(DestinationContext)
  if (sortedDestinations.length === 0) {
    return (
      <div className='empty-search'>
        <h3>Unfortunately no destinations mached your search</h3>
      </div>
    );
  }

  return (
    <section className='destinationlist'>
      <div className='destinationlist-center'>
        {sortedDestinations.map(item => (
          <SmallDestination key={item.id} destination={item} />
        ))}
      </div>
    </section>
  );
};

export default DestinationList;
