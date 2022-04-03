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
      .post("http://127.0.0.1:8000/sign-in/", userData)
      .then((response) => {
        // setToken(response.data.user.token)
        setUser(response.data);
        localStorage.setItem('token', response.data.user.token)
        console.log(localStorage)
        console.log(user)
        alert('You are signed in')
        window.location.reload(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tokenSignOut = localStorage.token
  console.log(tokenSignOut)

  // SIGN OUT
  const handleSignOut = () => {
    axios
      .delete("http://127.0.0.1:8000/sign-out/", {
        headers: {
          Authorization: `Token ${tokenSignOut}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("token", "");
        console.log(localStorage);
        console.log(res.data);
      });
  };


  // FORM VALIDATION WITH FORMIK (NOT CURRENTLY IMPLEMENTED)

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


// PSEUDOCODE FOR SEARCH FEATURE
// set state for email and setEmail as an empty string
// have a handle change that stores the typed email into this state
// in a handleSubmit, take that email and do a get request like the sign in, so it returns the user's id
// 