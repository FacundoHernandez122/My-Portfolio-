import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./OthersProjects.css";
import { Link } from "react-router-dom";

function OthersProjects() {
  return (
    <div>
      <div className="pt-4">
        <h2 className="OthersProject text-center pt-5 ">
          Otros Proyectos asdasdas
        </h2>
      </div>
      <Row xs={1} md={2} className="g-4 mt-1 ps-5 pe-5 pt-3 ">
        <Col>
          <Card className="card_color">
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
          <Card className="card_color">
            <Link
              to={"https://quote-cryptocurrency.vercel.app/"}
              target="_blank"
            >
              <Card.Img variant="" src="cryptoimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">
                Cotizador de Cryptomonedas
              </Card.Title>
              <Card.Text className="cards_text">
                Es un cotizador de cryptomonedas usando una API externa (JS)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 ps-5 pe-5 pt-4 pb-5 mb-5">
        <Col>
          <Card className="card_color">
            <Link to={"https://veterinary-agenda.vercel.app/"} target="blank">
              <Card.Img variant="" src="veterinaryimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Veterinaria</Card.Title>
              <Card.Text className="cards_text">
                Almacena pacientes de veterinaria guardando las citas en
                LocaleStorage y permitiendo editar o eliminar las mismas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card_color">
            <Link to={"https://climate-api-zeta.vercel.app/"} target="_blank">
              <Card.Img variant="" src="climateimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Clima</Card.Title>
              <Card.Text className="cards_text">
                Usando una API externa puedes conseguir el clima en múltiples
                países
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OthersProjects;
