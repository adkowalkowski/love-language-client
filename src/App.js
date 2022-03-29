import './App.css';
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from './Components/SignUp/SignUp';
import Header from './Components/Header/Header';

function App() {
  
  // STATE FOR NEW USER SIGN UP

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  })

  // HANDLERS FOR POST

  const handleFormChange = (e) => {
    e.preventDefault();
    e.persist();
    setNewUser((prevUser) => {
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
      email: newUser.email,
      password: newUser.password
    };
    axios
      .post("http://127.0.0.1:8000/sign-up/", userData)
      .then((response) => {
        console.log(response.data);
        setNewUser(response.data);
        console.log(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  


  return (
    <div className="App">
      <Header />
      <SignUp newUser={newUser} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
