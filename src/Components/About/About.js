import React from "react";
import { Accordion } from "react-bootstrap";
import Faq from "../Faq/Faq";

const About = () => {
  return (
    <div className='about-page-container'>
      <Faq />
      <div className="about-the-creator">
        <h2>About the Creator</h2>
        <p className="paragraph">
          Anthony Kowalkowski is a software engineer inspired by accessible and
          efficient code. Utilizing a mindful approach to development, he
          returns user-centric and reliable results.
          <br></br>
          <br></br>
          Love Language Directory was created during his time at General
          Assembly with the intent to leverage both React.js and Studio Ghibli's
          API.{" "}
          <a
            target="_blank"
            href="https://github.com/adkowalkowski/react-api-studio-ghiblist"
          >
            Click here
          </a>{" "}
          to view the Github repository for this project.
          <br></br>
          <br></br>
          To find out more about me and my work, check out my{" "}
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
