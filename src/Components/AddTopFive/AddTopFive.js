import React from "react";
import Form from "react-bootstrap/Form";
import './AddTopFive.css'
import { SignIn, user }from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";


const AddTopFive = () => {

  // CONDITIONAL RENDERING COULD BE if (!token) render SignIn page if(token) render AddTopFive 
  const token = localStorage.token
  console.log(token)

  const [topFive, setTopFive] = useState({
      one: "",
      two: "",
      three: "",
      four: "",
      five: ""
  })
  
//   const handleSelect = (e) => {
//     setTopFive((prevTopFive) => {

//     }
//   };

  const handleTopFiveSubmit = () => {
    const topFiveData = {
      one: topFive.one,
      two: topFive.two,
      three: topFive.three,
      four: topFive.four,
      five: topFive.five
    };
     axios
      .post("http://127.0.0.1:8000/love-languages/", topFiveData, {
          headers: {
            'Authorization': `Token ${token}` 
          }
      })
      .then((response) => {
        setTopFive(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="top-five-form">
      <Form onSubmit={handleTopFiveSubmit}>
      <Form.Select aria-label="Default select example">
        <option>Number One</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="4">Receiving Gifts</option>
        <option value="5">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Two</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="4">Receiving Gifts</option>
        <option value="5">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Three</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="4">Receiving Gifts</option>
        <option value="5">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Four</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="4">Receiving Gifts</option>
        <option value="5">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Five</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="4">Receiving Gifts</option>
        <option value="5">Physical Touch</option>
      </Form.Select>
      <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      
    </div>
  );
};

export default AddTopFive;
