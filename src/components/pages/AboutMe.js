import React from "react";
import Selfie from "../../assets/linkedin-selfie.jpg";
import { Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">About Me</h1>
      <hr></hr>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <img className="img-fluid mt-3" src={Selfie} alt="Selfie" />
          </Col>
          <Col md={8} xs={12}>
            <div>
              <p className="d-flex justify-content-center mt-3 mb-3">
                Howdy! Thanks for visiting my page. I'm a self-motivated problem-solver currently transitioning into the Data Engineering space.
                I carry with me a background in IT Help Desk Support and Full Stack Web Development with an
                eagerness to empower others. In early 2021, I earned a certificate in
                Full Stack Web Development from the University of New Hampshire,
                with fluency in the MongoDB, Express, React, and Node (MERN).
              </p>
              <p className="d-flex justify-content-center mt-3 mb-3">
                Known as a go-getter throughout my career in tech, I believe in self-advocacy and making the
                most out of a situation. With each project that I am a part of, I take challenges head-on to learn and
                utilize new tech concepts and methods, leveraging my accumulated experience to think outside the box. Versed in Agile methodology,
                I've worked on enterprise projects like a migration tool to bring 60,000+ internal company repositories from Bitbucket to GitHub.
              </p>
              <p className="d-flex justify-content-center mt-3 mb-3">
                My educational and professional background in
                technology, combined with a passionate drive to empower myself and others to solve
                problems, would make me a strong addition to any organization.
              </p>
              <p className="d-flex mt-3 mb-3">
                Let's solve something together!
              </p>
            </div>
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default AboutMe;