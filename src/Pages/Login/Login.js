import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-dark py-5  login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Form className="bg-light p-4 rounded-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  required
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
                Login
              </Button>
              <Button
                variant="primary"
                className="bg-dark border-0 w-100 mt-2"
                type="submit"
              >
                Google Login
              </Button>
              <p className="mt-3 mb-0 text-center">
                Do not have an account? Please{" "}
                <Link to="/registration">Registration</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
