import React, {useState} from "react";
import {Card, Button, Modal} from "react-bootstrap";



function Project(props) {
  const [lgShow, setLgShow] = useState(false);

  
  return (
    <>
      <Card className="mx-3 my-3 d-flex justify-content-center" style={{ width: '18rem', height: '24rem' }}>
        <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Card.Text>
            <Button variant="primary" onClick={() => setLgShow(true)}>Details</Button>
          </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Deployed link:</b> <a href={props.deployed}>Click here</a></p>
          <p><b>GitHub link:</b> <a href={props.gitHub}>Click here</a></p>
          <p><b>Description:</b> {props.description}</p>
          <p><b>Role:</b> {props.role}</p>
          <p><b>Technologies used:</b> {props.techUsed}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Project;
