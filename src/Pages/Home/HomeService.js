import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeService = ({ service }) => {
  const { photo, title, price, details, _id } = service;
  return (
    <div className="col-lg-4 col-md-6 mb-lg-0 mt-4">
      <Card>
        <Card.Img variant="top" className="card-img" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details?.length >= 100 ? details.slice(0, 90) + "..." : details}
          </Card.Text>
          <p className="mb-3">
            <b>Price : ${price}</b>
          </p>
          <Link to={`/services/${_id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeService;
