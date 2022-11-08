import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
    toast.error("Log Out Successfull");
  };
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
              className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
              to="/"
            >
              Blog
            </Link>
            {user?.uid ? (
              <>
                <Link
                  className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
                  to="/my-reviews"
                >
                  My Reviews
                </Link>
                <Link
                  className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
                  to="/add-services"
                >
                  Add Service
                </Link>

                <Link
                  onClick={handelLogOut}
                  className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
                >
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}

            {user?.displayName && (
              <Link className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4">
                {user?.displayName}
              </Link>
            )}
            {user?.photoURL && (
              <Link className="text-decoration-none fw-semibold text-light mt-lg-0 mt-3 ms-lg-4">
                <img src={user?.photoURL} alt="profile" className="profile" />
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
