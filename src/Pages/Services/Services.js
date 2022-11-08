import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import HomeService from "../Home/HomeService";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  return (
    <section className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-light mb-lg-4 text-center">
            All Services
          </h1>
          {services.map((service) => (
            <HomeService key={service._id} service={service}></HomeService>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
