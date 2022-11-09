import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="py-5 bg-dark erro-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center flex-column">
              <img
                src="https://cdn.svgator.com/images/2022/01/404-page-design-animation.gif"
                alt="404 Error Page"
                className="img-fluid w-50 rounded-4 mb-4"
              />
              <Link to="/" className="btn btn-warning d-inline fw-bold ">
                404 Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
