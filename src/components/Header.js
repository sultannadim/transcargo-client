import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar bg="dark" expand="lg" className="border-bottom">
      <Container>
        <Link to="/" className="my-nav text-decoration-none">
          <img src={logo} alt="logo" className="logo" />
          Transcargo
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex align-items-center">
            <Link
              className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4"
              to="/"
            >
              My Reviews
            </Link>
            <Link
              className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4"
              to="/"
            >
              Add Service
            </Link>
            <Link className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4">
              {user.name}
            </Link>
            <Link className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4">
              Log Out
            </Link>
            <Link className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4">
              <img
                src="https://static.toiimg.com/photo/msid-89908674/89908674.jpg"
                alt="profile"
                className="profile"
              />
            </Link>
            <Link
              className="text-decoration-none fw-bold text-light mt-lg-0 mt-3 ms-lg-4"
              to="/login"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
