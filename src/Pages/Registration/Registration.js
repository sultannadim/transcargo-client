import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Registration = () => {
  useTitle("Registration");
  const [error, setError] = useState("");
  const { userSignUp, updateUser } = useContext(AuthContext);
  const handelRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    userSignUp(email, password)
      .then((result) => {
        const user = result.user;
        const profile = { displayName: name, photoURL: photo };
        updateUser(profile)
          .then(() => {
            user.uid && toast.success("Registration Successfull");
            form.reset();
          })
          .catch(() => {});

        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    console.log(name, photo, email, password);
  };
  return (
    <section className="bg-dark py-5  login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Form
              onSubmit={handelRegistration}
              className="bg-light p-4 rounded-3"
            >
              <Form.Text className="text-danger">{error && error}</Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  name="photoURL"
                  required
                  type="text"
                  placeholder="Photo URL"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  required
                  type="email"
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="bg-dark border-0 w-100 mt-2"
                type="submit"
              >
                Registration
              </Button>

              <p className="mt-3 mb-0 text-center">
                Already have an account? Please <Link to="/login">Login</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
