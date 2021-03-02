import React, { useState } from "react";
import ContactImg from "../../assets/contact.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const [contact, setContact] = useState({
    style: {
      color: "black"
    },
    linkedIn: "https://www.linkedin.com/in/eddiephi/",
    gitHub: "https://github.com/EddiePhi",
    resume:
      "https://github.com/EddiePhi/EddiePhiPortfolio/blob/master/Assets/EddiePhimansoneResume.pdf"
  });
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Contact</h1>
      <hr></hr>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center mx-3 my-3">
              <img
              src={ContactImg}
              className="img-fluid"
              alt={"Contact"}
              />
            </div>
            <div className="d-flex justify-content-center mt-3 ml-3 mr-3 ml-3">
              <a style={contact.style} href={contact.linkedIn}>
                Here's my LinkedIn.
              </a>
            
              <a className="mr-3 ml-3"style={contact.style} href={contact.gitHub}>
                Here's my GitHub.
              </a>
              <a style={contact.style} href={contact.resume}>
                Here's my Resume.
              </a>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <p>
                Currently residing in Newmarket, New Hampshire. To reach me, send an
                email to ephimansone@gmail.com or leave a voicemail on my cell: (603)
                343-8622. I'm always happy to connect!
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

export default Contact;
