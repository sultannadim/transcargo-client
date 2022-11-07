import React from "react";
import Banner from "./Banner";
import Company from "./Company";
import "./Home.css";
import OurWebsite from "./OurWebsite";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurWebsite></OurWebsite>
      <Company></Company>
    </div>
  );
};

export default Home;
