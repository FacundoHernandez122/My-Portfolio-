import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar mb-4 ">
      <Container fluid>
        {" "}
        <Navbar.Brand href="/">
          <h4 className="ms-5">
            <strong>Mi Portafolio</strong>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="./SobreMi" className="m-2">
              <strong>Sobre mí</strong>
            </Nav.Link>
            <Nav.Link href="/cv.pdf" className="m-2" target="_blank">
              <strong> Curriculum Vitae</strong>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/facundohernandezcasas/"
              target="_blank"
              className="m-2"
            >
              <strong>LinkedIn</strong>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/FacundoHernandez122"
              target="_blank"
              className="m-2"
            >
              <strong>GitHub</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
