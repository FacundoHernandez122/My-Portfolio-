import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./OthersProjects.css";
import { Link } from "react-router-dom";

function OthersProjects() {
  return (
    <div>
      <div className="pt-4">
        <h2 className="OthersProject text-center pt-5">Other Projects</h2>
      </div>
      <Row xs={1} md={2} className="g-4 mt-1 ps-5 pe-5 pt-3">
        <Col className="mb-5">
          <Card className="card_color">
            <Link to={"https://car-finder-kappa.vercel.app/"} target="_blank">
              <Card.Img variant="" src="carfinderimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Car Finder</Card.Title>
              <Card.Text className="cards_text">
                This is a car finder with various filters created with Vanilla
                JavaScript.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className="card_color">
            <Link
              to={"https://quote-cryptocurrency.vercel.app/"}
              target="_blank"
            >
              <Card.Img variant="" src="cryptoimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">
                Cryptocurrency Quoter
              </Card.Title>
              <Card.Text className="cards_text">
                It's a cryptocurrency quoter using an external API (JS).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 ps-5 pe-5 pt-4 pb-5 mb-5">
        <Col className="mb-5">
          <Card className="card_color">
            <Link to={"https://veterinary-agenda.vercel.app/"} target="blank">
              <Card.Img variant="" src="veterinaryimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Veterinary</Card.Title>
              <Card.Text className="cards_text">
                Store veterinary patients by saving appointments in
                LocalStorage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className="card_color">
            <Link to={"https://climate-api-zeta.vercel.app/"} target="_blank">
              <Card.Img variant="" src="climateimg.png" />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Weather</Card.Title>
              <Card.Text className="cards_text">
                Using an external API, you can get the weather in multiple
                countries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OthersProjects;
