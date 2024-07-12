import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContactMe.css";

function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="cont_contactMe">
      <Link onClick={handleShowModal}>
        <div className="left_icon_bar text-center">
          <p>Contact Me</p>
        </div>
      </Link>
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
  );
}

export default ContactMe;
