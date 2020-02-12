import React, { useContext } from 'react';
import DestinationFilter from './DestinationFilter';
import DestinationList from './DestinationList';
import { DestinationContext } from '../context';
import { Loader } from './Loading';
import gif from '../images/gif/stars-loader.gif';

const DestinationContainer = () => {
  const { destinations, sortedDestinations, loading } = useContext(
    DestinationContext
  );

  if (loading) {
    return <Loader src={gif} />;
  }
  return (
    <>
      <DestinationFilter  />
      <DestinationList  />
    </>
  );
};

export default DestinationContainer;
