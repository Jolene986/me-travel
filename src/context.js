import React, { useState, useEffect } from 'react';
import items from './data';

const DestinationContext = React.createContext();

const DestinationProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [sortedDestinations, setSortedDestinations] = useState([]);
  const [featuredDestinations, setFeturedDestinations] = useState([]);
  const [loading, setLoading] = useState(true); // vrvtno ce dolaziti sa data
  const [singleDestination, setSingleDestination] = useState({});

  //getData & frormat data
  useEffect(() => {
    //getData()
    let destinations = formatData(items);
    let featuredDestinations = destinations.filter(
      item => item.featured === true
    );
    setDestinations(destinations);
    setFeturedDestinations(featuredDestinations);
    setSortedDestinations(destinations);
    setLoading(false);
  }, []);

  // format Data
  const formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(img => img.fields.file.url);
      let destination = { ...item.fields, id, images: images };
      return destination;
    });
    return tempItems;
  };
  //Get one destination by slug
  const getDestination = slug => {
    let tempDestinations = [...destinations];
    const destination = tempDestinations.find(item => item.slug === slug);

    return destination;
  };
  return (
    <DestinationContext.Provider
      value={{
        destinations: [...destinations],
        featuredDestinations: [...featuredDestinations],
        sortedDestinations: [...sortedDestinations],
        getDestination,
        loading
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};

const DestinationConsumer = DestinationContext.Consumer;
export { DestinationProvider, DestinationConsumer, DestinationContext };
