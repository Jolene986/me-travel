import React, { useContext } from 'react';
import { DestinationContext } from '../context';
import { Loader } from './Loading';
import Destination from './SmallDestination';
import Title from './Title';
import gif from '../images/gif/planet-loader.gif';

const Featured = () => {
  const { featuredDestinations: destinations, loading } = useContext(
    DestinationContext
  );
  return (
    <section className='featured-destinations'>
      <Title title='Featured Destinations' />
      <div className='featured-destinations-center'>
        {loading ? (
          <Loader src={gif} />
        ) : (
          destinations.map(item => {
            return <Destination key={item.id} destination={item} />;
          })
          
        )}
      </div>
    </section>
  );
};

export default Featured;
