import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AddReview = ({ service }) => {
  const { user } = useContext(AuthContext);

  const handelReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const photo = user?.photoURL;
    const email = user?.email;
    const review = form.review.value;
    const productId = service?._id;
    const userReview = { name, photo, email, review, productId };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
        }
      });
    form.reset();
  };

  return (
    <div className="col-lg-9 col-md-10 pb-5">
      <Form onSubmit={handelReview} className="bg-light p-4 rounded-3">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            defaultValue={user?.email}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Comments</Form.Label>
          <Form.Control
            name="review"
            required
            as="textarea"
            style={{ height: "150px" }}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="bg-dark border-0 w-100 mt-2"
          type="submit"
        >
          Add Review
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
