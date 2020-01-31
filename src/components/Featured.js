import React, { useContext } from 'react';
import { DestinationContext } from '../context';
import { Loading } from './Loading';
import Destination from './SmallDestination';
import Title from './Title';

const Featured = () => {
  const { featuredDestinations: destinations, loading } = useContext(
    DestinationContext
  );

  console.log(destinations);

  return (
    <section className='featured-destinations'>
      <Title title='Featured Destinations' />
      <div className='featured-destinations-center'>
        {loading ? (
          <Loading />
        ) : (
          destinations.map(item => {
            console.log(item);
            return <Destination key={item.id} destination={item} />;
          })
          /**ne znam dal ce nam trebati destination prop al vrvtno hoce goddamet */
        )}
      </div>
    </section>
  );
};

export default Featured;
