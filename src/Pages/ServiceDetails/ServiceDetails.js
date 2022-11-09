import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AddReview from "./AddReview";
import ShowReview from "./ShowReview";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  useTitle("Product Details");
  const service = useLoaderData();
  const { title, photo, price, details } = service;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service-reviews?productId=${service?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [service?._id]);

  return (
    <section className="bg-dark py-5 ">
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-light mb-4">
            Details About <span className="text-primary">{title}</span>
          </h1>
          <div className="col-lg-12">
            <div className="service-details pb-5 mb-5 border-bottom">
              <img src={photo} className="img-fluid mb-3" alt="" />
              <h3 className="fw-bold text-light mb-3">{title}</h3>
              <h5 className="text-light mb-3">Price : ${price}</h5>
              <p className="text-light m-0">{details}</p>
            </div>
          </div>
          {user?.email ? (
            <AddReview
              service={service}
              reviews={reviews}
              setReviews={setReviews}
            ></AddReview>
          ) : (
            <h3 className="text-light mb-4">
              <b>
                Please <Link to="/login">Login</Link> for add a review
              </b>
            </h3>
          )}

          <div className="mt-3 border-top">
            <h2 className="text-light mt-4">All Reviews</h2>
            {reviews.map((review) => (
              <ShowReview key={review._id} review={review}></ShowReview>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
