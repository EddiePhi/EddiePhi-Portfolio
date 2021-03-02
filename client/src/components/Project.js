import React, {useEffect, useState} from "react";
import {Card, Button, Modal} from "react-bootstrap";
// import {image1, image2, image3, image4, image5, image6} from "../../image.js"


function Project(props) {
  const [lgShow, setLgShow] = useState(false);
  console.log(props)

  // const [image, setImage] = useState();

  // useEffect(async () => {
  //   const img = await import(props.imgSrc).default
  //   setImage(img)
  // },[])
  
  return (
    <>
      <Card className="mx-3 my-3 d-flex justify-content-center" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={image} /> */}
        <img src={""}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <p>{props.description}</p>
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
          <p><b>Description:</b> {props.description}</p>
          <p><b>Role:</b> {props.role}</p>
          <p><b>Technologies used:</b> {props.techUsed}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Project;
