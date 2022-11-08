import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomeService = ({ service }) => {
  const { photo, title, price, details } = service;
  return (
    <div className="col-lg-4">
      <Card>
        <Card.Img variant="top" className="card-img" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details?.length >= 100 ? details.slice(0, 100) + "..." : details}
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeService;
