import React from 'react';
import defaultImg from '../images/ssvnormandy.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Destination = ({ destination }) => {
  const { name, slug, images, price, id } = destination;
  return (
    <article className='destination'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt={'destination' + id} />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>one way trip</p>
        </div>
        <Link
          to={`/destinations/${slug}`}
          className='btn-primary destination-link'
        >
          Features
        </Link>
      </div>
      <p className='destination-info'>{name}</p>
    </article>
  );
};

Destination.propTypes = {
  destination: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Destination;
