import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./AboutMe.css";
import MyNavbar from "./MyNavbar";
import Accordion from "react-bootstrap/Accordion";

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <MyNavbar />
      <div className="container lg-12 md-6 sm-4 sobre-mi-container mt-5">
        <div className="row text-center ">
          <div className="col  sobre-mi-card">
            <Card.Text className="sobre-mi-text mt-5">
              My name is Facundo Hernandez, a 24-year-old enthusiastic
              full-stack web developer. I am currently in my second semester of
              the IT Analyst program at the Faculty of Engineering at ORT. My
              productivity shines thanks to my dedication to self-taught
              learning and my commitment to continuous improvement. My creative
              approach to problem-solving and my solid knowledge base
              distinguish me as a committed and valuable candidate. I am excited
              about the opportunity to apply my skills and knowledge in a
              professional environment, collaborating as a team to provide
              innovative solutions.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              My journey began with an introductory front-end course, followed
              by an intensive 3-month bootcamp that took place from Monday to
              Friday, from 8 AM to 6 PM in 2023. After completing the bootcamp,
              I embarked on creating my own portfolio and implementing practical
              projects to consolidate my knowledge.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              My technical skills include proficiency in technologies such as
              React, Node.js, MongoDB, MySQL, Redux, Express.js, Javascript,
              HTML, CSS, Vue.js, GitHub, AWS, Scrum, Bootstrap, and Tailwind,
              Java, among others.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Besides my dedication to web development, I consider myself a
              responsible, proactive person who is constantly driven to overcome
              challenges. My growth-oriented mindset and ability to learn
              quickly make me a passionate web developer.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Thank you for taking the time to get to know me! If you want to
              contact me.
            </Card.Text>
            <br />
            <Card.Title className="sobre-mi-title mt-3">Soft Skills</Card.Title>
            <br />
            <br />

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>Communication</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Effective exchange of information and ideas.</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Collaboration</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Working effectively in a team environment.</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>Adaptability</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Flexibility to embrace change and new technologies.</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>Time Management</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Efficiently organizing and prioritizing tasks.</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>Problem Solving</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Analytical thinking to resolve challenges.</h5>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>Creativity</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Generating innovative solutions and ideas.</h5>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <a className="buttonInfo mt-5 mb-5" onClick={handleShowModal} block>
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Contact me
            </a>
            <Modal
              className="modal_bg mt-5"
              show={showModal}
              onHide={handleCloseModal}
              dialogClassName="modal-custom"
            >
              <Modal.Body className="modal_body">
                <h3 className="mt-2">Email:</h3>
                <h4 className="mt-3">facundohernandez122@gmail.com</h4>
                <h3 className="mt-5">Phone Number:</h3>
                <h4 className="mt-3">+598 097 085 998</h4>
              </Modal.Body>
              <Modal.Footer className="modal_footer">
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
