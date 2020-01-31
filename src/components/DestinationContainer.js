import React, { useContext } from 'react';
import DestinationFilter from './DestinationFilter';
import DestinationList from './DestinationList';
import { DestinationContext } from '../context';
import { Loading } from './Loading';

const DestinationContainer = () => {
  const { destinations, sortedDestinations, loading } = useContext(
    DestinationContext
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <DestinationFilter destinations={destinations} />
      <DestinationList destinations={sortedDestinations} />
    </>
  );
};

export default DestinationContainer;
