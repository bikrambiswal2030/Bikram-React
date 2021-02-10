import React from "react";
import Banner from "../component/hotel/Banner";
import { Link } from "react-router-dom";
import Hero from "../component/hotel/Hero";
import RoomsContainer from "../component/hotel/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
