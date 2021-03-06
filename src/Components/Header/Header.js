import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Search from "../Search/Search";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import './Header.css'
import AddTopFive from "../AddTopFive/AddTopFive";
import UpdateTopFive from "../UpdateTopFive/UpdateTopFive";

const Header = () => {
  
  // STORING TOKEN FROM LOCALSTORAGE FOR CONDITIONAL RENDERING

  const token = localStorage.token

  // NAVBAR IF A USER IS SIGNED IN

  if (token != '') {
    return (
      <div>
        <Navbar sticky="top" bg="white">
        <Container>
          <Nav >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/sign-in">
              Sign Out
            </Nav.Link>
            <Button variant="secondary" size="sm" as={Link} to="/sign-up">
                Register
            </Button>
          </Nav>
        </Container>
        <hr></hr>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<AddTopFive />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/update-top-five" element={<UpdateTopFive />}></Route>
        </Routes>
      </div>
      </div>
    )
  } 

  // NAVBAR IF A USER IS NOT SIGNED IN

  return (
    <div>
      <Navbar sticky="top" bg="white">
        <Container>
          <Nav >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/sign-in">
              Sign In
            </Nav.Link>
           
            <Button variant="secondary" size="sm" as={Link} to="/sign-up">
                Register
            </Button>
           
          </Nav>
        </Container>
        <hr></hr>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<AddTopFive />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Header;
