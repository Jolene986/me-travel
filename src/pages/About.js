import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Team } from '../components/Team';

const About = () => {
  return (
    <>
      <Hero hero='aboutHero' id='movBackg'>
        <Banner
          title='ME Travel Agency '
          subtitle=' From Nimbus Cluster to Far Rim'
        >
          <p>We are the safest and most spectacular way to travel</p>
        </Banner>
      </Hero>
      <Team />
    </>
  );
};

export default About;
