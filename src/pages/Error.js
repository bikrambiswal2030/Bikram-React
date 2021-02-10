import React from "react";
import Hero from "../component/hotel/Hero";
import Banner from "../component/hotel/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="Error 404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
