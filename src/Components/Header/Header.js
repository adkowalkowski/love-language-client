import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Search from "../Search/Search";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Header = () => {
  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-in">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Header;
