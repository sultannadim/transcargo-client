import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Company from "./Company";
import "./Home.css";
import OurWebsite from "./OurWebsite";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <OurWebsite></OurWebsite>
      <Company></Company>
    </div>
  );
};

export default Home;
