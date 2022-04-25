import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  const [skills, setSkills] = useState({
    style: {
      fontSize: 5 + "rem",
      margin: 20 + "px",
      textAlign: "center"
    }
  });
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Skills</h1>
      <hr></hr>
      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-wrap justify-content-center">
              <i className="skill-img mx-3 my-3 devicon-html5-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-css3-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-bootstrap-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-xd-line"></i>
              <i className="skill-img mx-3 my-3 devicon-javascript-plain"></i>
  
              <i className="skill-img mx-3 my-3 devicon-jquery-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-nodejs-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-npm-original-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-react-original-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-webpack-plain-wordmark"></i>
            
              <i className="skill-img mx-3 my-3 devicon-mongodb-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-mysql-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-sequelize-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-chrome-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-slack-plain-wordmark"></i>
            
              <i className="skill-img mx-3 my-3 devicon-trello-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-git-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-gitlab-plain-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-github-original-wordmark"></i>
              <i className="skill-img mx-3 my-3 devicon-heroku-plain-wordmark"></i>
            </div>
            <br/> 
            <br/>
            <br/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;