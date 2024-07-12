import Carousel from "react-bootstrap/Carousel";
import "./CarouselFade.css";
import { Link } from "react-router-dom";
import React from "react";

function CarouselFade() {
  return (
    <div className="">
      <div className="myName mb-3 mt-5 pb-4 pt-5">
        <h2 className="pt-5">Main Projects</h2>
      </div>
      <Carousel fade className="custom-carousel">
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
              This is an E-Commerce project for video games developed by a team
              in 3 weeks.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image center-image"
            src="mernimgp.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Coming Soon</h3>
            <p>
              I am currently working on a MERN project that will soon be
              deployed for you to see! In the meantime, I invite you to check
              out my non-deployed projects on my{" "}
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
