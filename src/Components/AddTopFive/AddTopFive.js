import React from "react";
import Form from "react-bootstrap/Form";
import './AddTopFive.css'
import { SignIn, user }from "../SignIn/SignIn";

const AddTopFive = () => {


  return (
    <div className="top-five-form">
      <Form.Select aria-label="Default select example">
        <option>Number One</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="3">Receiving Gifts</option>
        <option value="3">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Two</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="3">Receiving Gifts</option>
        <option value="3">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Three</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="3">Receiving Gifts</option>
        <option value="3">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Four</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="3">Receiving Gifts</option>
        <option value="3">Physical Touch</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Number Five</option>
        <option value="1">Acts of Service</option>
        <option value="2">Quality Time</option>
        <option value="3">Words of Affirmation</option>
        <option value="3">Receiving Gifts</option>
        <option value="3">Physical Touch</option>
      </Form.Select>
    </div>
  );
};

export default AddTopFive;
