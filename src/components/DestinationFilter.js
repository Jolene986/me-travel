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
  //get unique number of party mambers
  let partyMembers = getUnique(destinations, 'party');

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
        {/* select number of party members */}
        <div className='form-group'>
          <label htmlFor='party'> Party Members</label>
          <select
            name='party'
            id='party'
            value={party}
            className='form-control'
            onChange={handleChange}
          >
            {partyMembers.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
         {/* input price */}
        <div className="form-group">
          <label htmlFor="price">Price ${price}</label>
          <input type="range" name="price" id="price" className='price' min={minPrice} max={maxPrice} value={price} onChange={handleChange}   />
        </div>
         {/* select radius - size */}
         <div className="form-group">
           <label htmlFor="radius">Destination radius/length</label>
           <div className="size-inputs">
             <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} classname='size-input'/>
             <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} classname='size-input'/>
            </div>
         </div>
         {/* checkbox food */}
         <div className="form-group">
           <div className="single-extra">
             <input type="checkbox" name="food" id="food" checked={food} onChange={handleChange}/>
             <label htmlFor="food">Tradicional food</label>
           </div>
         </div>
         {/* checkbox pets */}
         <div className="form-group">
           <div className="single-extra">
             <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
             <label htmlFor="food">Pets</label>
           </div>
         </div>
      </form>
    </section>
  );
};

export default DestinationFilter;
