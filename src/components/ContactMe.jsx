import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContactMe.css";

function ContactMe() {
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="cont_contactMe ">
      <Link onClick={handleShowModal}>
        <div className="left_icon_bar text-center ">
          <p>Contáctame</p>
        </div>
      </Link>
          <Modal
              className="modal_bg mt-5"
              show={showModal}
              onHide={handleCloseModal}
              dialogClassName="modal-custom"
            >
              <Modal.Header className="modal_title" closeButton>
                <Modal.Title>Información de Contacto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3 className="mt-2">Correo Electrónico:</h3>
                <h4 className="mt-3">facundohernandez122@gmail.com</h4>
                <h3 className="mt-5">Número de Teléfono:</h3>
                <h4 className="mt-3">+598 097 085 998</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  );
}

export default ContactMe;