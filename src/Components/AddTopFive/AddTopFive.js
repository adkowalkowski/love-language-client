import React from "react";
import Form from "react-bootstrap/Form";
import "./AddTopFive.css";
import SignIn from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";

const AddTopFive = () => {
  // STORING TOKEN FROM SIGN IN TO A VARIABLE
  const token = localStorage.token;
  console.log(token);

  // STATES FOR ADDING A USER'S TOP 5

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  // STATE FOR DELETE
  const [deletedUser, setDeleteUser] = useState()

  // STATE FOR RENDERING DATA

  const [topFive, setTopFive] = useState([]);

  // STATE FOR SIGN UP BUTTON
  const [show, setShow] = useState(false);

  // STATE FOR MODAL

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // HANDLER FOR DELETE LOVE MODEL 
  const handleChange = (e) => {
    e.persist();
    const editedDeleteUser = e.target.value;
    setDeleteUser(editedDeleteUser)
  }


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
        console.log(res.data)
      });
  };

  // DELETE REQUEST FOR DELETING A SIGNED IN USER'S TOP 5
  const handleSubmit = () => {
    axios
      .delete(`http://127.0.0.1:8000/love-languages/${deletedUser}`)
      .then((res) => {
        console.log(res.data)
        setTopFive(res.data);    
        alert("Your top 5 was deleted")   
        
      });
  };

  // RENDERING DATA

  const topFiveList = topFive.map((item) => (
    <div className="top-five-container">
      <Card style={{ width: "18rem" }}>
        <Card.Header>Your Top 5 <FiMoreHorizontal className="menu-icon"/> </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>1. {item.one}</ListGroup.Item>
          <ListGroup.Item>2. {item.two}</ListGroup.Item>
          <ListGroup.Item>3. {item.three}</ListGroup.Item>
          <ListGroup.Item>4. {item.four}</ListGroup.Item>
          <ListGroup.Item>5. {item.five}</ListGroup.Item>
          <ListGroup.Item className="top-five">
          <Button className="edit-button" variant="primary" size="sm" onClick={handleShow}>
              Edit Your Top 5
            </Button>
            <Button className="delete-button" variant="danger" size="sm" onClick={handleShow}>
              Delete Your Top 5
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Your Top 5?</Modal.Title>
        </Modal.Header>
        <Form className='email-form-content'>
          <Form.Group>
            <Form.Control 
              className="delete-input-field"
              type="email"
              name="email"
              value={deletedUser}
              onChange={handleChange}
              // isInvalid={!!errors.email}
              placeholder="Enter your email to confirm"
              required
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button className="final-delete-button" variant="danger" onClick={handleSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ));

  // CONDITIONAL RENDERING IF A USER IS/IS NOT SIGNED IN

  if (!token) {
    return (
      <div className="not-signed-in">
        <p>
          You are not currently signed in. To view your profile, sign in
        </p>
        <SignIn />
      </div>
    );
  }

  if (token) {
    return (
      // FORM FOR SIGNED IN USER TO ADD THEIR TOP 5
      
      <div className="top-five-form">
        <Form onSubmit={handleTopFiveSubmit}>
          <Form.Label>To add your top 5 love languages into our directory, fill out the form below</Form.Label>
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
            Submit
          </Button>
        </Form>

        {/* // BUTTON TO VIEW A SIGNED IN USER'S TOP FIVE */}

        <div>
          <Button className="top-five-button" variant="secondary" onClick={handleGet}>
            View Your Top 5
          </Button>
          {topFiveList}
        </div>
      </div>
    );
  }
};

export default AddTopFive;
