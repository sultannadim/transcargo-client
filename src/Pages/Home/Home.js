import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Company from "./Company";
import "./Home.css";
import HomeService from "./HomeService";
import OurWebsite from "./OurWebsite";

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <OurWebsite></OurWebsite>
      <section className="bg-dark py-5 pt-lg-5 pt-0">
        <div className="container">
          <div className="row">
            <h1 className="fw-bold text-light mb-lg-4 text-center">
              Our Services
            </h1>
            {services.map((service) => (
              <HomeService key={service._id} service={service}></HomeService>
            ))}
            <div className="text-center mt-4">
              <Link to="/services" className="btn btn-primary px-4">
                See All
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Company></Company>
    </div>
  );
};

export default Home;
