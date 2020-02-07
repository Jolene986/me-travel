import React, { useContext } from 'react';
import { DestinationContext } from '../context';
import Title from './Title';

const getUnique = (arr, val) => {
  return [...new Set(arr.map(item => item[val]))];
};
const DestinationFilter = () => {
  const {
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
    food,
    handleChange
  } = useContext(DestinationContext);
  // get unique regions
  let regions = getUnique(destinations, 'region');
  regions = [...regions, 'all'];

  return (
    <section className='filter-container'>
      <Title title='Search destinations' />
      <form className='filter-form'>
        {/* select region */}
        <div className='form-group'>
          <label htmlFor='region'> Galactic region</label>
          <select
            name='region'
            id='region'
            value={region}
            className='form-control'
            onChange={handleChange}
          >
            {regions.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </section>
  );
};

export default DestinationFilter;
