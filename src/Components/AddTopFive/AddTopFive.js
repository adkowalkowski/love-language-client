import React from "react";
import Form from "react-bootstrap/Form";
import "./AddTopFive.css";
import { SignIn, user } from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const AddTopFive = () => {
  // CONDITIONAL RENDERING COULD BE if (!token) render SignIn page if(token) render AddTopFive
  const token = localStorage.token;
  console.log(token);

  //   const [topFive, setTopFive] = useState({
  //       one: "",
  //       two: "",
  //       three: "",
  //       four: "",
  //       five: ""
  //   })

  // STATES FOR ADDING A USER'S TOP 5
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  // STATE FOR RENDERING DATA
  const [topFive, setTopFive] = useState([])

  // HANDLESELECT FOR POSTING A USER'S TOP 5
  const handleOneSelect = (e) => {
    e.preventDefault();
    e.persist();
    const selectedValue = e.target.value;
    setOne(selectedValue);
  };

  const handleTwoSelect = (e) => {
    e.preventDefault();
    e.persist();
    const selectedValue = e.target.value;
    setTwo(selectedValue);
  };

  const handleThreeSelect = (e) => {
    e.preventDefault();
    e.persist();
    const selectedValue = e.target.value;
    setThree(selectedValue);
  };

  const handleFourSelect = (e) => {
    e.preventDefault();
    e.persist();
    const selectedValue = e.target.value;
    setFour(selectedValue);
  };

  const handleFiveSelect = (e) => {
    e.preventDefault();
    e.persist();
    const selectedValue = e.target.value;
    setFive(selectedValue);
  };

  // POST REQUEST FOR ADDING TOP 5 TO A USER'S ACCOUNT
  const handleTopFiveSubmit = () => {
    const topFiveData = {
      one: one,
      two: two,
      three: three,
      four: four,
      five: five,
    };
    axios
      .post("http://127.0.0.1:8000/love-languages/", topFiveData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setOne(response.data.one);
        setTwo(response.data.two);
        setThree(response.data.three);
        setFour(response.data.four);
        setFive(response.data.five);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGet = () => {
      axios
        .get("http://127.0.0.1:8000/love-languages/")
        .then((res) => {

        })
  }

  return (
    <div className="top-five-form">
      <Form onSubmit={handleTopFiveSubmit}>
        <Form.Select
          onChange={handleOneSelect}
          aria-label="Default select example"
        >
          <option>Number One</option>
          <option>Acts of Service</option>
          <option>Quality Time</option>
          <option>Words of Affirmation</option>
          <option>Receiving Gifts</option>
          <option>Physical Touch</option>
        </Form.Select>
        <Form.Select
          onChange={handleTwoSelect}
          aria-label="Default select example"
        >
          <option>Number Two</option>
          <option>Acts of Service</option>
          <option>Quality Time</option>
          <option>Words of Affirmation</option>
          <option>Receiving Gifts</option>
          <option>Physical Touch</option>
        </Form.Select>
        <Form.Select
          onChange={handleThreeSelect}
          aria-label="Default select example"
        >
          <option>Number Three</option>
          <option>Acts of Service</option>
          <option>Quality Time</option>
          <option>Words of Affirmation</option>
          <option>Receiving Gifts</option>
          <option>Physical Touch</option>
        </Form.Select>
        <Form.Select
          onChange={handleFourSelect}
          aria-label="Default select example"
        >
          <option>Number Four</option>
          <option>Acts of Service</option>
          <option>Quality Time</option>
          <option>Words of Affirmation</option>
          <option>Receiving Gifts</option>
          <option>Physical Touch</option>
        </Form.Select>
        <Form.Select
          onChange={handleFiveSelect}
          aria-label="Default select example"
        >
          <option>Number Five</option>
          <option>Acts of Service</option>
          <option>Quality Time</option>
          <option>Words of Affirmation</option>
          <option>Receiving Gifts</option>
          <option>Physical Touch</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTopFive;
