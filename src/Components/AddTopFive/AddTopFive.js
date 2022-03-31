import React from "react";
import Form from "react-bootstrap/Form";
import "./AddTopFive.css";
import SignIn from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const AddTopFive = () => {
  // CONDITIONAL RENDERING COULD BE if (!token) render SignIn page if(token) render AddTopFive

  // STORING TOKEN FROM SIGN IN TO A VARIABLE
  const token = localStorage.token;
  console.log(token);

  // STATES FOR ADDING A USER'S TOP 5

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  // STATE FOR RENDERING DATA

  const [topFive, setTopFive] = useState([]);

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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // GET REQUEST FOR VIEWING SIGNED IN TOP 5

  const handleGet = () => {
    axios
      .get("http://127.0.0.1:8000/love-languages/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setTopFive(res.data);
      });
  };

  // RENDERING DATA

  const topFiveList = topFive.map((item) => (
    <div className="top-five-container">
      <Card style={{ width: "18rem" }}>
        <Card.Header>Your Top 5</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>1. {item.one}</ListGroup.Item>
          <ListGroup.Item>2. {item.two}</ListGroup.Item>
          <ListGroup.Item>3. {item.three}</ListGroup.Item>
          <ListGroup.Item>4. {item.four}</ListGroup.Item>
          <ListGroup.Item>5. {item.five}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  ));

  if (!token) {
    return (
      <div className="not-signed-in">
          <p>You are not currently signed in. To add, view, or edit your top 5, please sign in</p>
        <SignIn />
      </div>
    );
  }

  if (token) {
    return (
      // FORM FOR SIGNED IN USER TO ADD THEIR TOP 5

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

        {/* // BUTTON TO VIEW A SIGNED IN USER'S TOP FIVE */}

        <div>
          <Button variant="primary" onClick={handleGet}>
            View Your Top 5
          </Button>
          {topFiveList}
        </div>
      </div>
    );
  }
};

export default AddTopFive;
