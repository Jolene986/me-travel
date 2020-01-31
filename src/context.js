import React, { Component } from 'react';
import items from './data';

const DestinationContext = React.createContext();

export default class DestinationProvider extends Component {
  state = {
    destinations: [],
    sortedDestinations: [],
    featuredDestinations: [],
    loading: true,
    region: 'all',
    party: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    food: false,
    pets: false
  };
  componentDidMount() {
    let destinations = this.formatData(items);
    // set featured rooms
    let featuredDestinations = destinations.filter(
      item => item.featured === true
    );
    //finding max price and max size from our data
    let maxPrice = Math.max(...destinations.map(item => item.price));
    let maxSize = Math.max(...destinations.map(item => item.radius));
    this.setState({
      destinations,
      featuredDestinations,
      sortedDestinations: destinations,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  // format Data
  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(img => img.fields.file.url);
      let destination = { ...item.fields, id, images: images };
      return destination;
    });
    return tempItems;
  };
  //Get one destination by slug
  getDestination = slug => {
    let tempDestinations = [...this.destinations];
    const destination = tempDestinations.find(item => item.slug === slug);

    return destination;
  };
  //form input change handler
  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
  };

  filterDestinations = () => {
    console.log('filter destinations func');
  };
  render() {
    return (
      <DestinationContext.Provider
        value={{ ...this.state, getDestination: this.getDestination }}
      >
        {this.props.children}
      </DestinationContext.Provider>
    );
  }
}

const DestinationConsumer = DestinationContext.Consumer;
export { DestinationProvider, DestinationConsumer, DestinationContext };
