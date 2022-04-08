import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import "./SignUp.css";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const SignUp = () => {
  
  // STATE FOR NEW USER SIGN UP

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  })

  // HANDLERS FOR POST

  const handleFormChange = (e) => {
    e.preventDefault();
    e.persist();
    setNewUser((prevUser) => {
      const editedUser = {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
      return editedUser;
    });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: newUser.email,
      password: newUser.password
    };
    axios
      .post("http://127.0.0.1:8000/sign-up/", userData)
      .then((response) => {
        setNewUser(response.data);
        alert('Your account has been created')
        window.location.href = 'http://localhost:3000/?#/profile'
      })
      .catch((err) => {
        alert('This email is already in use')
      });
  };

  
  // STATE FOR SIGN UP BUTTON

  const [show, setShow] = useState(false);

  // STATE FOR MODAL

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // FORM VALIDATION WITH FORMIK

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required(),
  });

  return (
    <div>
      <Alert variant="success" onClose={() => setShow(false)} >
        <Alert.Heading>Please review our <a target="_blank" href="http://localhost:3000/?#/about">
        frequently asked questions
          </a> before continuing. <br></br>Register an account with the love language directory using the form below.</Alert.Heading>
      </Alert>
<Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form
          noValidate
          // FOR MVP PURPOSES THE VALIDATION IS NOT CURRENTLY WORKING, TRY TO FIX POST MVP
          onSubmit={handleFormSubmit}
        >
          <Form.Group className="mb-3" controlId="validationFormik01">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleFormChange}
              isInvalid={!!errors.email}
              placeholder="Enter email"
              required
            />

            <Form.Text className="text-muted">
              This will be your username to connect with other users
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationFormik02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleFormChange}
              isInvalid={!!errors.password}
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up Successful</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Go to the sign in page to begin!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      )}
    </Formik>
    </div>
    
  );
};

export default SignUp;
