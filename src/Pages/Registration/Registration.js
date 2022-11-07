import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
  const { userSignUp } = useContext(AuthContext);
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
        user.uid && toast.success("Registration Successfull");
        form.reset();
        console.log(user);
      })
      .catch((error) => console.error(error));
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  placeholder="Enter Name"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
