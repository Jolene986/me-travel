import React, { useState, useEffect, useContext } from 'react';

import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../context';
import StyledHero from '../components/StyledHero';

export const Destination = props => {
  const [slug] = useState(props.match.params.slug); // props provides by react router

  // get the Fnc that finds the object with the same slug provided as atrr
  const { getDestination } = useContext(DestinationContext);
  //run that fnc
  const destination = getDestination(slug);
  if (!destination) {
    return (
      <div className='error'>
        <h3>No destination found</h3>
        <Link to='/destinations'>Back to destinations</Link>
      </div>
    );
  }
  const {
    name,
    region,
    price,
    radius,
    party,
    pets,
    food,
    description,
    advice,
    extras,
    images
  } = destination;
  const [firstImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero image={firstImg}>
        <Banner title={name}>
          <Link to='/destinations' className='btn-primary'>
            all Destinations
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-destination'>
        <div className='single-destination-images'>
          {defaultImg.map((item, index) => (
            <img src={item} key={index} alt={name + index} />
          ))}
        </div>
        <div className='single-destination-info'>
          <article className='desc'>
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>Galactic region : {region}</h6>
            <h6>price : ${price}</h6>
            <h6>radius/length : {radius} km</h6>
            <h6>
              max capasity :
              {party > 1 ? `${party} party members` : `{party} party member`}
            </h6>
            <h6>{pets ? 'Pets allowed' : ' no pets allowed'}</h6>
            <h6>{food && 'Tradicional food '}</h6>
          </article>
        </div>
      </section>
      <section className='destination-extras'>
        <h3>Extras</h3>
        <ul className='extras'>
          {extras.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className='advice'>
        <div>
          <h3>Travel Advice</h3>
          <p>{advice}</p>
        </div>
      </section>
    </>
  );
};

export default Destination;
