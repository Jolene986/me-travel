import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const AllDestinations = () => {
  return (
    <Hero hero="destinationsHero">
      <Banner title="Our Destinations ">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};
export default AllDestinations;
