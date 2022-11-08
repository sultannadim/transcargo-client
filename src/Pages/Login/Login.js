import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { userLogin, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        user?.uid && toast.success("Login Successfull");
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  //   google login
  const handelGooleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        user?.uid && toast.success("Login Successfull");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <section className="bg-dark py-5  login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Form onSubmit={handelLogin} className="bg-light p-4 rounded-3">
              <Form.Text className="text-danger">{error && error}</Form.Text>

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
                Login
              </Button>
              <Button
                onClick={handelGooleLogin}
                variant="primary"
                className="bg-dark border-0 w-100 mt-2"
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
