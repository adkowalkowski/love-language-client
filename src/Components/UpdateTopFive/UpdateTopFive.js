import React from "react";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
// import "./AddTopFive.css";
import SignIn from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";

const UpdateTopFive = () => {
  // STORING TOKEN FROM SIGN IN TO A VARIABLE
  const token = localStorage.token;

  // STORING PRIMARY KEY FROM HANDLEGET ON ADDTOPFIVE TO A VARIABLE

  const pk = localStorage.pk; 

  // STATES FOR UPDATING A USER'S TOP 5

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  // HANDLESELECT FOR UPDATING A USER'S TOP 5

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

  const handleTopFiveUpdate = () => {
    const topFiveData = {
      one: one,
      two: two,
      three: three,
      four: four,
      five: five,
    };
    axios
      .put(`https://love-language-server.herokuapp.com/love-languages/modify/${pk}`, topFiveData, {
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
        alert("Your top 5 has been updated");
        window.location.href = 'https://adkowalkowski.github.io/love-language-client/#/profile';
      })
  };

  return (
    <div>
      <Form onSubmit={handleTopFiveUpdate}>
        <Form.Label>
          To edit your top 5 love languages, fill out the form
          below
        </Form.Label>
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
        <Button className="submit-button" variant="secondary" type="submit">
          Edit Your Top 5
        </Button>
      </Form>
    </div>
  );
};

export default UpdateTopFive;
