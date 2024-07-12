import React from "react";
import MainPage from "../components/MainPage";
import CarouselFade from "../components/CarouselFade";
import MyNavbar from "../components/MyNavbar";
import SlideButton from "../components/SlideButton";
import "./Home.css";
import OthersProjects from "./OthersProjects";
import ContactMe from "./ContactMe";

function Home() {
  return (
    <>
      <MyNavbar />
      <MainPage />
      <ContactMe />

      <div className="mb-5">
        <CarouselFade />
      </div>
      <SlideButton />

      <OthersProjects />
    </>
  );
}

export default Home;
