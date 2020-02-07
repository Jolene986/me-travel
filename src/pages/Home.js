import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

import Featured from '../components/Featured';
import SelectRace from '../components/SelectRace';

const Home = () => {
  return (
    <>
      <Hero id='movBkg'>
        {/*id='movBkg' */}
        <Banner title='ME TRAVEL' subtitle='With us to a new adventure!'>
          <Link to='/destinations' className='btn-primary'>
            Destinations
          </Link>
        </Banner>
      </Hero>

      <Services />
      <Featured />
      <SelectRace />

      <p>TESTIMONIALS SLIDER</p>
    </>
  );
};
export default Home;
