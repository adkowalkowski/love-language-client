import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn.css";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const SignIn = () => {
  
  // STATE FOR USER SIGN IN

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  // HANDLERS FOR POST

  const handleFormChange = (e) => {
    e.preventDefault();
    e.persist();
    setUser((prevUser) => {
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
      email: user.email,
      password: user.password
    };
     axios
      .post("https://love-language-server.herokuapp.com/sign-in/", userData)
      .then((response) => {
        setUser(response.data);
        localStorage.setItem('token', response.data.user.token)
        window.location.reload(true)
      })
      .catch((err) => {
        alert('Incorrect login information')
      });
  };

  const tokenSignOut = localStorage.token

  // SIGN OUT

  const handleSignOut = () => {
    axios
      .delete("https://love-language-server.herokuapp.com/sign-out/", {
        headers: {
          Authorization: `Token ${tokenSignOut}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("token", "");
        window.location.reload(true)
      });
  };


  // FORM VALIDATION WITH FORMIK (NOT CURRENTLY IMPLEMENTED)

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required(),
  });


  return (
    <Formik
      className='sign-in-form'
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
              value={user.email}
              onChange={handleFormChange}
              isInvalid={!!errors.email}
              placeholder="Enter email"
              required
            />

            <Form.Text className="text-muted">
              Login with your email
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
              value={user.password}
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
            Sign In
          </Button>
        
          <Button className="sign-out" variant="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;