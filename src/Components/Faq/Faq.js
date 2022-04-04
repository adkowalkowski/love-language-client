import React from "react";
import { Accordion } from "react-bootstrap";
import './Faq.css'

const Faq = () => {
  return (
    <div className="faq">
      <h2 className='faq-header'>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are love languages?</Accordion.Header>
          <Accordion.Body>
            Love languages are ways in which people express and experience love.
            The Love Language Directory is based off of{" "}
            <i>
              The Five Love Languages: How to Express Heartfelt Commitment to
              Your Mate
            </i>{" "}
            by Gary Chapman. Therefore, our directory uses{" "}
            <b>
              Acts of Service, Quality Time, Words of Affirmation, Receiving
              Gifts,
            </b>{" "}
            and <b>Physical Touch</b> as the five love languages. To learn more,
            please visit the{" "}
            <a target="_blank" href="https://www.5lovelanguages.com/">
              official love languages website.
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do I find out my top 5 love languages?{" "}
          </Accordion.Header>
          <Accordion.Body>
            Please take the quiz{" "}
            <a
              target="_blank"
              href="https://www.5lovelanguages.com/quizzes/love-language"
            >
              here.
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I add my top 5 love languages to the directory?
          </Accordion.Header>
          <Accordion.Body>
            To add your top 5 into our directory, you must have an account.{" "}
            <a target="_blank" href="http://localhost:3000/?#/sign-up">
              Register here
            </a>
            . Once your account is created, visit your{" "}
            <a target="_blank" href="http://localhost:3000/?#/profile">
              profile
            </a>
            . There you can add your top 5 based off of the{" "}
            <a
              target="_blank"
              href="https://www.5lovelanguages.com/quizzes/love-language"
            >
              official love languages quiz
            </a>
            .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I edit or delete my top 5?</Accordion.Header>
          <Accordion.Body>
            After adding your top 5 to our directory, visit your{" "}
            <a target="_blank" href="http://localhost:3000/?#/profile">
              profile
            </a>
            . There you can view your top 5. Options will then appear to edit or
            delete your top 5.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How do I find someone's top 5?</Accordion.Header>
          <Accordion.Body>
            You must know the email address they used to register with our
            directory. Visit the{" "}
            <a target="_blank" href="http://localhost:3000/?#/">
              home page
            </a>{" "}
            and enter their email to view their top 5.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Can anyone see my top 5?</Accordion.Header>
          <Accordion.Body>
            By registering an account with our directory, you agree to have your
            top 5 visible to anyone who may be able to access it (see "How do I
            find someone's top 5?" in frequently asked questions)
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
