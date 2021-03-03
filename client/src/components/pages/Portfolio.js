import React , {useState}from "react";
import Project from "../Project.js";
import projects from "../../projects.json";
import {Container, Row, Col} from "react-bootstrap"

function Portfolio() {
  const [portProjects, setPortProjects] = useState({
    projects
  })
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Portfolio</h1>
      <hr></hr>
      <Container>
        <Row>
          {portProjects.projects.map(project => (
            <Col className="d-flex justify-content-center">
             <Project
             id={project.id}
             key={project.id}
             name={project.name}
             deployed={project.deployed}
             gitHub={project.gitHub}
             description={project.description}
             role={project.role}
             techUsed={project.techUsed}
             imgSrc={project.imgSrc}
             />
            </Col>
           ))} 
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Portfolio;
