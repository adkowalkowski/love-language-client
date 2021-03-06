import React from "react";
import Form from "react-bootstrap/Form";
import SignIn from "../SignIn/SignIn";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import './Search.css'
// import '../../App.css'

const Search = () => {
  const [email, setEmail] = useState('');
  const [emailTopFive, setEmailTopFive] = useState([]);
  
  const token = localStorage.token;

  const handleChange = (e) => {
    e.persist();
    const editedEmail = e.target.value;
    setEmail(editedEmail)
  }
  const handleSubmit = () => {
    axios
      .get(`https://love-language-server.herokuapp.com/love-languages/${email}`)
      .then((res) => {
        setEmailTopFive(res.data);       
      })
      .catch((err) => {
        alert('This email either does not exist in our directory or has not submitted a top 5')
      });
  };

  // RENDERING DATA
  
  const emailTopFiveList = emailTopFive.map((item) => (
    <div className="top-five-container">
      <Card style={{ width: "18rem" }}>
        <Card.Header>{email}'s Top 5</Card.Header>
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

  

  return (
    <div className='test'>
      <div className='landing-page-logo'><h1>Love Language Directory</h1></div>
      <Form className='search-form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter an email to search the Love Language Directory</Form.Label>
          <Form.Control className='email-control' type="email" placeholder="Enter an email" onChange={handleChange}/>
        </Form.Group>
        <Button className="search-button" variant="secondary" type="submit">
          Search
        </Button>
        {emailTopFiveList}
      </Form>
      {/* <img className="landing-photo" src={require("../../assets/love_landing_page.png")} alt={"Love Language Landing Page Photo"}/> */}
    </div> 
   
      
    
  );
};

export default Search;
