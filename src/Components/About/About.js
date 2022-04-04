import React from "react";
import { Accordion } from "react-bootstrap";
import Faq from "../Faq/Faq";
import './About.css'

const About = () => {
  return (
    <div className='about-page-container'>
      <Faq />
      <div className="about-the-creator">
        <h2 className='about-the-creator-heading'>About the Creator</h2>
        <p className="paragraph">
          Anthony Kowalkowski is a software engineer inspired by accessible and
          efficient code. Utilizing a mindful approach to development, he
          returns user-centric and reliable results.
          <br></br>
          <br></br>
          The Love Language Directory was created during his time at General
          Assembly with the intent to leverage PostgreSQL, Django, and React.
          <br></br>
          <br></br>
          To find out more about him and his work, check out his{" "}
          <a target="_blank" href="https://adkowalkowski.github.io/portfolio/">
            portfolio
          </a>
          ,{" "}
          <a target="_blank" href="https://github.com/adkowalkowski">
            Github
          </a>
          , and{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anthony-kowalkowski/"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
