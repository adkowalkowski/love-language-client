import React from "react";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import "./AddTopFive.css";
import SignIn from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import UpdateTopFive from "../UpdateTopFive/UpdateTopFive";

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
  const [pk, setPk] = useState('')

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

  const handleUpdateClick = () => {
    window.location.href = 'http://localhost:3000/?#/update-top-five'
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
        alert('Your top 5 has been added to the directory.')
      })
      .catch((err) => {
        alert('You have already submitted your top 5. Click "View Your Top 5" to make changes.')
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
        localStorage.setItem('pk', res.data[0].id)
        setPk(localStorage.pk)
        console.log(pk)
      });
  };

  // DELETE REQUEST FOR DELETING A SIGNED IN USER'S TOP 5

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/love-languages/modify/${pk}`, {
        headers: {
          Authorization: `Token ${token}`,
        }
      })
      .then((res) => {
        // setTopFive(res.data);   
        window.location.reload(true) 
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
          <Button className="edit-button" variant="primary" size="sm" onClick={handleUpdateClick}>
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
        <Modal.Footer>
          <Button className="final-delete-button" variant="danger" onClick={handleDelete}>
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
        <Alert variant="danger" onClose={() => setShow(false)} >
        <Alert.Heading>Sign in to view your profile</Alert.Heading>
      </Alert>
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
