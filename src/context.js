import React, { Component } from 'react';

import Client from './Contentful';


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
    // get and format data and set state
    this.getData();
  }
  //get Data from Contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({ content_type: 'destinations' });
      let destinations = this.formatData(response.items);

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
    } catch (error) {
      console.log(error);
    }
  };

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
      price,
      pets,
      food
    } = this.state;
    // all destinations
    let tempDestinations = [...destinations];
    //transform party value, price from string back to number
    party = parseInt(party);
    price = parseInt(price);
    //FILTER BY REGION
    if (region !== 'all') {
      tempDestinations = tempDestinations.filter(
        item => item.region === region
      );
    }
    //FILTER BY NUMBER OF PARTY MEMBERS
    if (party !== 1) {
      tempDestinations = tempDestinations.filter(item => item.party === party);
    }
    //FILTER BY PRICE
    tempDestinations = tempDestinations.filter(item => item.price <= price);
    //FILTER BY SIZE
    tempDestinations = tempDestinations.filter(
      item => item.radius >= minSize && item.radius <= maxSize
    );

    //FILTER BY FOOD
    if (food) {
      tempDestinations = tempDestinations.filter(item => item.food === true);
    }
    //FILTER BY PETS
    if (pets) {
      tempDestinations = tempDestinations.filter(item => item.pets === true);
    }

    //UPDATE STATE
    this.setState({
      sortedDestinations: tempDestinations
    });
  };

  handleRace = value => {
    const newDestinations = [...this.state.destinations].map(item => {
      if (item.name === value) {
        //20% discount for selected race
        item = { ...item, price: item.price * 0.8 };
      }
      return item;
    });
    let featuredDestinations = newDestinations.filter(
      item => item.featured === true
    );
    //set new destinations with new price
    this.setState({
      destinations: newDestinations,
      sortedDestinations: newDestinations,
      featuredDestinations
    });
  };
  render() {
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
