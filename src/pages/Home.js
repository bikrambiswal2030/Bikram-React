import React from "react";
import Hero from "../component/hotel/Hero";
import Banner from "../component/hotel/Banner";
import { Link } from "react-router-dom";
import Services from "../component/hotel/Services";
import FeaturedRooms from "../component/hotel/FeaturedRooms";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurious hostels"
          subtitle="Affordable rooms starting at UGX 300,000"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
