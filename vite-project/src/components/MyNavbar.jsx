import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        {" "}
        <Navbar.Brand href="/">
          <h4 className="ms-5">Mi Portafolio</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./SobreMi" className="m-2">
              Sobre mí
            </Nav.Link>
            <Nav.Link href="/mi_curriculum.pdf" className="m-2" target="_blank">
              Curriculum Vitae
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/facundohernandezcasas/"
              target="_blank"
              className="m-2"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="https://github.com/FacundoHernandez122"
              target="_blank"
              className="m-2"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
