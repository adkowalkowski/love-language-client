import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";

const SignUp = ({ newUser, handleFormChange, handleFormSubmit }) => {
  // STATE FOR SIGN UP BUTTON
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // FORM VALIDATION WITH FORMIK
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required(),
  });

  return (
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
          <Button variant="primary" type="submit" onClick={handleShow}>
            Sign Up
          </Button>

          <Modal show={show} onHide={handleClose}>
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
          </Modal>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;