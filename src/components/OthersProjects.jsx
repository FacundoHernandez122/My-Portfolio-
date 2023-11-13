import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./OthersProjects.css";
import { Link } from "react-router-dom";

function OthersProjects() {
  return (
    <div>
      <div>
        <h2 className="OthersProject text-center pt-5 ">Otros Proyectos</h2>
      </div>
      <Row xs={1} md={2} className="g-4 mt-5 p-5">
        <Col>
          <Card>
            <Link to={"https://car-finder-kappa.vercel.app/"} target="_blank">
              <Card.Img variant="" src="carfinderimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Buscador de Autos</Card.Title>
              <Card.Text className="cards_text">
                Este es un buscador de autos con varios filtros creado con
                Javascript Vanilla.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="" src="carfinderimg.png" />
            <Card.Body>
              <Card.Title className="text-center">Buscador de Autos</Card.Title>
              <Card.Text className="cards_text">
                Este es un buscador de autos con varios filtros creado con
                Javascript Vanilla.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OthersProjects;
