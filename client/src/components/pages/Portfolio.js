import React from "react";
import Project from "../Project.js";
import projects from "../../projects.json";
import {Container, Row, Col} from "react-bootstrap"

function Portfolio() {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Portfolio</h1>
      <hr></hr>
      <Container>
        <Row>
          <Col>
            <Project
              name={projects[0].name}
              deployed={projects[0].deployed}
              gitHub={projects[0].gitHub}
              description={projects[0].description}
              role={projects[0].role}
              techUsed={projects[0].techUsed}
              imgSrc={projects[0].imgSrc}
            />
          </Col>
          <Col>
            <Project
              name={projects[1].name}
              deployed={projects[1].deployed}
              gitHub={projects[1].gitHub}
              description={projects[1].description}
              role={projects[1].role}
              techUsed={projects[1].techUsed}
              imgSrc={projects[1].imgSrc}
            />
          </Col>
          <Col>
            <Project
              name={projects[2].name}
              deployed={projects[2].deployed}
              gitHub={projects[2].gitHub}
              description={projects[2].description}
              role={projects[2].role}
              techUsed={projects[2].techUsed}
              imgSrc={projects[2].imgSrc}
            />
          </Col>
          <Col>
            <Project
              name={projects[3].name}
              deployed={projects[3].deployed}
              gitHub={projects[3].gitHub}
              description={projects[3].description}
              role={projects[3].role}
              techUsed={projects[3].techUsed}
              imgSrc={projects[3].imgSrc}
            />
          </Col>
          <Col>
            <Project
              name={projects[4].name}
              deployed={projects[4].deployed}
              gitHub={projects[4].gitHub}
              description={projects[4].description}
              role={projects[4].role}
              techUsed={projects[4].techUsed}
              imgSrc={projects[4].imgSrc}
            />
          </Col>
          <Col>
            <Project
              name={projects[5].name}
              deployed={projects[5].deployed}
              gitHub={projects[5].gitHub}
              description={projects[5].description}
              role={projects[5].role}
              techUsed={projects[5].techUsed}
              imgSrc={projects[5].imgSrc}
            />
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
    </>
  );
}

export default Portfolio;
