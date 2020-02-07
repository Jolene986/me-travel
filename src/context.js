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
    let tempDestinations = [...this.state.destinations];
    const destination = tempDestinations.find(item => item.slug === slug);

    return destination;
  };
  //form input change handler
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target, value, name);
    this.setState(
      {
        [name]: value
      },
      this.filterDestinations
    );
  };
  filterDestinations = () => {
    let {
      destinations,
      region,
      party,
      minSize,
      maxSize,
      minPrice,
      maxPrice,
      price,
      radius,
      pets,
      food
    } = this.state;

    let tempDestinations = [...destinations];
    if (region !== 'all') {
      tempDestinations = tempDestinations.filter(
        item => item.region === region
      );
      this.setState({
        sortedDestinations: tempDestinations
      });
    }
  };
  handleRace = () => {
    console.log(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <DestinationContext.Provider
        value={{
          ...this.state,
          getDestination: this.getDestination,
          handleChange: this.handleChange,
          handleRace: this.handleRace
        }}
      >
        {this.props.children}
      </DestinationContext.Provider>
    );
  }
}

const DestinationConsumer = DestinationContext.Consumer;
export { DestinationProvider, DestinationConsumer, DestinationContext };
