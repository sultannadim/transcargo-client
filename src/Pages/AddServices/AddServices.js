import React from "react";
import useTitle from "../../hooks/useTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

const AddServices = () => {
  useTitle("Add Services");
  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const details = form.details.value;
    const service = { title, photo, price, details };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfully");
          form.reset();
        }
      });
  };

  return (
    <section className="bg-dark py-5  login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h1 className="text-light fw-bold text-center mb-3">
              Add Your Service
            </h1>
            <Form
              onSubmit={handelAddService}
              className="bg-light p-4 rounded-3"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Title</Form.Label>
                <Form.Control
                  name="title"
                  required
                  type="text"
                  placeholder="Enter Title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Service Photo</Form.Label>
                <Form.Control
                  name="photo"
                  required
                  type="text"
                  placeholder="Photo URL"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Service Price</Form.Label>
                <Form.Control
                  name="price"
                  required
                  type="text"
                  placeholder="Enter Price"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Service Details</Form.Label>
                <Form.Control
                  name="details"
                  required
                  as="textarea"
                  placeholder="Enter Service Details"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                className="bg-dark border-0 w-100 mt-2"
                type="submit"
              >
                Add Service
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
