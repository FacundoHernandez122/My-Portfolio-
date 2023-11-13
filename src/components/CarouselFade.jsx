import Carousel from "react-bootstrap/Carousel";
import "./CarouselFade.css";
import { Link } from "react-router-dom";
import React from "react";

function CarouselFade() {
  return (
    <div>
      <div className="myName mb-5 mt-5">
        {" "}
        <h2>Mis proyectos deployados</h2>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <Link to="https://gamehub-frontend.vercel.app/" target="_blank">
            <img
              className="carousel-image center-image"
              src="gamehubimg.png"
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>GameHub</h3>
            <p>
              Esté es un proyecto de E-Commerce de videojuegos logrado en equipo
              en un lapso de 3 semanas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image center-image"
            src="woi.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Proximamente</h3>
            <p>
              Me encuentro realizando un proyecto usando MERN que muy pronto
              estára deployado para que lo puedas ver! Mientras tanto te invito
              a ver mis proyectos no deployados en mi{" "}
              <Link
                className="githublink"
                to={`https://github.com/FacundoHernandez122`}
                target="_blank"
              >
                GitHub
              </Link>
              .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
