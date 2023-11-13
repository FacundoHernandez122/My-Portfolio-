import React from "react";
import MainPage from "../components/MainPage";
import CarouselFade from "../components/CarouselFade";
import MyNavbar from "../components/MyNavbar";
import SlideButton from "../components/SlideButton";
import "./Home.css";
import OthersProjects from "./OthersProjects";

function Home() {
  return (
    <>
      <MyNavbar />
      <MainPage />
      <div className="mb-5">
        <CarouselFade />
      </div>
      <SlideButton />

      <OthersProjects />
    </>
  );
}

export default Home;
