import React from "react";

const ShowReview = ({ review }) => {
  return (
    <div className="col-lg-12">
      <div className="review-content mt-5">
        <div className="review-user d-flex align-items-center">
          <img
            src={review?.photo}
            className="profile img-fluid"
            alt="profile"
          />
          <h5 className="text-light ms-3">{review?.name}</h5>
        </div>
        <p className="text-light mt-3">{review?.review}</p>
      </div>
    </div>
  );
};

export default ShowReview;
