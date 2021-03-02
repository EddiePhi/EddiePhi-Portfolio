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
                Self-motivated full-stack developer with an IT background and an
                eagerness to empower others. Recently earned a certificate in
                full-stack web development from the University of New Hampshire,
                with fluency in the MongoDB, Express, React, and Node (MERN).
              </p>
              <p className="d-flex justify-content-center mt-3 mb-3">
                Known as a go-getter, I believe in self-advocacy and making the
                most out of a situation. With each project I've worked on, I’ve
                utilized newly learned concepts from prior classes and previous
                projects. I applied Agile methodologies on In-Progress projects to
                keep my projects up to date. I worked on a team of four to develop
                a hiking app that provides current popular hiking trial data,
                weather forecasts, and a dynamic map for users to view in any area
                across the US. 
              </p>
              <p className="d-flex justify-content-center mt-3 mb-3">
                My educational and professional background in
                technology, combined with a passionate drive to effectively solve
                problems, would make me a strong addition to any organization.
              </p>
            </div>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
