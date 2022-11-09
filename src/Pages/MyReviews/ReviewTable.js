import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
const ReviewTable = ({ myReview, handelDelete }) => {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal
  const [reviesService, setReviesService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${myReview?.productId}`)
      .then((res) => res.json())
      .then((data) => setReviesService(data));
  }, []);
  //   review update
  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReview = form.details.value;
    myReview.review = newReview;
    fetch(`http://localhost:5000/reviews/${myReview._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review update successfull");
        }
      });
  };
  return (
    <div className="col-lg-12 mb-3 ">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{reviesService.title} Review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handelUpdate}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="details"
                required
                as="textarea"
                defaultValue={myReview.review}
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update Now
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Card>
        <Card.Header as="h5">Review Details</Card.Header>
        <Card.Body>
          <Card.Title>{reviesService.title}</Card.Title>
          <Card.Text>{myReview.review}</Card.Text>
          <Button onClick={handleShow} variant="primary">
            Edit
          </Button>
          <Button
            onClick={() => handelDelete(myReview)}
            className="ms-2"
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewTable;
